import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// In the Base44 sandbox the dev server is reached through a rotating proxy host.
// Only when the preview flag is set do we widen the host allowlist / enable polling;
// with the flag unset the server behaves like a plain local Vite dev server.
const previewMode = process.env.BASE44_PREVIEW_MODE === '1'
const sandboxDomain = process.env.BASE44_SANDBOX_HOST_DOMAIN

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: true,
    allowedHosts:
      previewMode && sandboxDomain ? ['.' + sandboxDomain] : undefined,
    watch: previewMode ? { usePolling: true, interval: 300 } : undefined,
  },
})
