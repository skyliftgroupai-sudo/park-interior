import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import App from './App'
import blogs from './Pages/Blog/blogData'
import { routes } from './seo/routes'

export function render(url) {
  return renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  )
}

export const blogSlugs = blogs.map((b) => b.slug)
export { routes }
