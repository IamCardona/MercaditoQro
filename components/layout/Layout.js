// Import components
import Header from './Header'
import Head from 'next/head'

const Layout = ({ children, title = "Mercadito Qro", menuKey }) => {
  return(
    <div style={{ backgroundColor: "#fafaf8" }}>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="bolso.svg" type="image/svg" />
      </Head>
      <Header menuKey={menuKey} />
      <div>
        <main style={{ paddingTop: "10vh", zIndex: "1"  }}>
          {children}
        </main>
      </div>
      <footer>
        {/** Footer */}
      </footer>
    </div>
  )
}

export default Layout