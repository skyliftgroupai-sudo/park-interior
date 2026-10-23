import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

// Head tags baked in at build time (scripts/prerender.mjs) are removed here;
// <Seo /> re-creates them for the current route, so there are never duplicates.
document.querySelectorAll('[data-prerender]').forEach((el) => el.remove())

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
