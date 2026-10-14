import { createSSRApp } from 'vue'
import pinia from './stores'

import App from './App.vue'
// #ifdef WEB
import '@/styles/web.scss'
// #endif

export function createApp() {
  const app = createSSRApp(App)

  app.use(pinia)
  return {
    app,
  }
}
