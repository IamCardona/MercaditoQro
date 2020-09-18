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
        zIndex: "999",
        backgroundColor: "white",
        justifyContent: "space-between",
        borderBottom: "solid 1px #e5edef"
      }}>

        <div style={{ display: "flex", alignItems: "center" }}>
          {/** Menu */}
          <div>
            <div className="sidebar-menu-hamburger">
              <div className="menu-activador menu-celular">
                <input type="checkbox" id="lanzador" className="menu-celular" onClick={() => setVisibleSidebar(!visibleSidebar)} />
                <label htmlFor="lanzador">
                  <span className="menu-activador-linea"></span>
                  <span className="menu-activador-linea"></span>
                  <span className="menu-activador-linea"></span>
                </label>
              </div>
            </div>
          </div>

          {/** Logo */}
        </div>
          <div>
            <Link href="/">
              <img src="/logo.png" alt="Logo" style={{ height: "100px" }} className="click" />
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