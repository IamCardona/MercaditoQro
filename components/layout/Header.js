// Imports
import { useState } from 'react'

// Import components
import Sidebar from './Sidebar'
import Link from 'next/link'

const Header = ({ menuKey }) => {
  const [visibleSidebar, setVisibleSidebar] = useState(false)

  return(
    <header>
      <nav style={{
        position: "fixed",
        width: "100%",
        height: "60px",
        display: "flex",
        alignItems: "center",
        boxShadow: "0 3px 3px 0 rgba(128,98,96,.16)",
        zIndex: "999",
        backgroundColor: "white",
        justifyContent: "space-between" 
      }}>

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
        <div>
          <Link href="/">
            <img src="/logo.png" alt="Logo" style={{ height: "100px" }} className="click" />
          </Link>
        </div>
      </nav>

        {/** Sidebar */}
        <Sidebar visible={visibleSidebar} setVisible={setVisibleSidebar} menuKey={menuKey} />
    </header>
  )
}

export default Header