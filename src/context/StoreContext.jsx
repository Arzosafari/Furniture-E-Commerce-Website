import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { products } from '../data/products'

const StoreContext = createContext(null)

const CART_KEY = 'livenest.cart.v1'
const WISH_KEY = 'livenest.wishlist.v1'

function readStored(key, fallback) {
  try {
    const raw = window.localStorage.getItem(key)
    return raw ? JSON.parse(raw) : fallback
  } catch {
    return fallback
  }
}

export function StoreProvider({ children }) {
  const [cart, setCart] = useState(() => readStored(CART_KEY, []))
  const [wishlist, setWishlist] = useState(() => readStored(WISH_KEY, []))
  const [cartOpen, setCartOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [navOpen, setNavOpen] = useState(false)
  const [toast, setToast] = useState(null)

  useEffect(() => {
    window.localStorage.setItem(CART_KEY, JSON.stringify(cart))
  }, [cart])

  useEffect(() => {
    window.localStorage.setItem(WISH_KEY, JSON.stringify(wishlist))
  }, [wishlist])

  useEffect(() => {
    const overlayOpen = cartOpen || searchOpen || navOpen
    document.body.style.overflow = overlayOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [cartOpen, searchOpen, navOpen])

  useEffect(() => {
    if (!toast) return undefined
    const timer = window.setTimeout(() => setToast(null), 2600)
    return () => window.clearTimeout(timer)
  }, [toast])

  const addToCart = useCallback((product, color, qty = 1) => {
    const key = `${product.id}::${color}`
    setCart((current) => {
      const existing = current.find((item) => item.key === key)
      if (existing) {
        return current.map((item) =>
          item.key === key ? { ...item, qty: item.qty + qty } : item,
        )
      }
      return [...current, { key, productId: product.id, color, qty }]
    })
    setToast(`${product.name} added to your bag`)
    setCartOpen(true)
  }, [])

  const setQty = useCallback((key, qty) => {
    setCart((current) =>
      current.map((item) =>
        item.key === key ? { ...item, qty: Math.max(1, Math.min(99, qty)) } : item,
      ),
    )
  }, [])

  const removeItem = useCallback((key) => {
    setCart((current) => current.filter((item) => item.key !== key))
  }, [])

  const clearCart = useCallback(() => setCart([]), [])

  const toggleWishlist = useCallback((productId) => {
    setWishlist((current) =>
      current.includes(productId)
        ? current.filter((id) => id !== productId)
        : [...current, productId],
    )
  }, [])

  const cartItems = useMemo(
    () =>
      cart
        .map((item) => ({
          ...item,
          product: products.find((product) => product.id === item.productId),
        }))
        .filter((item) => Boolean(item.product)),
    [cart],
  )

  const cartCount = useMemo(
    () => cart.reduce((total, item) => total + item.qty, 0),
    [cart],
  )

  const subtotal = useMemo(
    () => cartItems.reduce((total, item) => total + item.product.price * item.qty, 0),
    [cartItems],
  )

  const value = {
    cart,
    cartItems,
    cartCount,
    subtotal,
    addToCart,
    setQty,
    removeItem,
    clearCart,
    wishlist,
    toggleWishlist,
    isWished: (id) => wishlist.includes(id),
    cartOpen,
    openCart: () => setCartOpen(true),
    closeCart: () => setCartOpen(false),
    searchOpen,
    openSearch: () => setSearchOpen(true),
    closeSearch: () => setSearchOpen(false),
    navOpen,
    openNav: () => setNavOpen(true),
    closeNav: () => setNavOpen(false),
    toast,
  }

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}

export function useStore() {
  const context = useContext(StoreContext)
  if (!context) throw new Error('useStore must be used inside StoreProvider')
  return context
}
