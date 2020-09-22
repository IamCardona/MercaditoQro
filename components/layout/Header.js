// Imports
import { useState } from 'react'

// Import components
import Sidebar from './Sidebar'
import Link from 'next/link'
import { Badge } from 'antd'

const Header = ({ menuKey }) => {
  const [visibleSidebar, setVisibleSidebar] = useState(false)

  return(
    <header>
      <nav style={{
        position: "fixed",
        width: "100%",
        height: "10vh",
        display: "flex",
        alignItems: "center",
        zIndex: "998",
        backgroundColor: "white",
        justifyContent: "space-between",
        borderBottom: "solid 1px #e5edef"
      }}>

        {/** Menu */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div>
            <img src="/icons/menu.svg" alt="Menu" className="click" onClick={() => setVisibleSidebar(!visibleSidebar)} style={{ marginLeft: "1rem", width: "25px" }} />
          </div>
        </div>

          {/** Logo */}
          <div>
            <Link href="/">
              <img src="/logo.png" alt="Logo" style={{ height: "70px" }} className="click" />
            </Link>
          </div>

        <div>
          <div style={{ marginRight: "1.5rem" }}>
            <Badge count={2} style={{ backgroundColor: "#9254DE" }}>
              <img src="/icons/supermercado.svg" alt="Carrito de compras" style={{ width: "25px" }} />
            </Badge>
          </div>
        </div>

      </nav>

        {/** Sidebar */}
        <Sidebar visible={visibleSidebar} setVisible={setVisibleSidebar} menuKey={menuKey} />
    </header>
  )
}

export default Header