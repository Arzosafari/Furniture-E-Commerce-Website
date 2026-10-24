import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import AnnouncementBar from './components/AnnouncementBar.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import MobileNavigation from './components/MobileNavigation.jsx'
import CartDrawer from './components/CartDrawer.jsx'
import SearchDialog from './components/SearchDialog.jsx'
import Home from './pages/Home.jsx'
import Shop from './pages/Shop.jsx'
import CollectionPage from './pages/CollectionPage.jsx'
import Collections from './pages/Collections.jsx'
import ProductPage from './pages/ProductPage.jsx'
import Rooms from './pages/Rooms.jsx'
import RoomPage from './pages/RoomPage.jsx'
import Journal from './pages/Journal.jsx'
import JournalArticle from './pages/JournalArticle.jsx'
import Account from './pages/Account.jsx'
import Help from './pages/Help.jsx'
import About from './pages/About.jsx'
import Legal from './pages/Legal.jsx'
import NotFound from './pages/NotFound.jsx'
import { useStore } from './context/StoreContext.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function Toast() {
  const { toast } = useStore()
  return (
    <div className={`toast${toast ? ' is-visible' : ''}`} role="status" aria-live="polite">
      {toast}
    </div>
  )
}

export default function App() {
  return (
    <div className="app">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <ScrollToTop />
      <AnnouncementBar />
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/new" element={<Shop mode="new" />} />
          <Route path="/sale" element={<Shop mode="sale" />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/collections/:slug" element={<CollectionPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/rooms/:slug" element={<RoomPage />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/journal/:slug" element={<JournalArticle />} />
          <Route path="/account" element={<Account />} />
          <Route path="/help" element={<Help />} />
          <Route path="/about" element={<About />} />
          <Route path="/legal/:slug" element={<Legal />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <MobileNavigation />
      <CartDrawer />
      <SearchDialog />
      <Toast />
    </div>
  )
}
