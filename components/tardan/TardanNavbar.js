import Link from 'next/link'
import { ArrowRightOutlined } from '@ant-design/icons'

const TardanNavbar = ({ pathname }) => {
  return(
    <div style={{ textAlign: "center", display: "flex" }}>
      {/** Main container */}
      <div style={{
        backgroundColor: "white",
        height: "auto",
        position: "fixed",
        overflow: "scroll",
        whiteSpace: "nowrap",
        width: "100%",
        padding: "0 1rem",
        zIndex: "991"
      }} className="navbar_shops">

        {/* <div style={{ position: "fixed", textAlign: "right", right: "0.5rem" }}>
          <p style={{ color: "grey" }}>Desliza para ver todo el catálogo</p>
        </div> */}

        {/** Tag container */}
        <div style={{ textAlign: "center"/* , paddingTop: "0.5rem" */, backgroundColor: "white" }}>


          <Link href="/tardan">
            <div className={!pathname ? "click menu-selected_nav" : "click menu-no-selected_nav"}>
              Todo
            </div>
          </Link>

          <Link href="/tardan/[category]" as="/tardan/Etiqueta">
            <div className={pathname === "Etiqueta" ? "click menu-selected_nav" : "click menu-no-selected_nav"}>
              Etiqueta
            </div>
          </Link>

          <Link href="/tardan/[category]" as="/tardan/Vestir">
            <div className={pathname === "Vestir" ? "click menu-selected_nav" : "click menu-no-selected_nav"}>
              Vestir
            </div>
          </Link>

          <Link href="/tardan/[category]" as="/tardan/Casual">
            <div className={pathname === "Casual" ? "click menu-selected_nav" : "click menu-no-selected_nav"}>
              Casual
            </div>
          </Link>
          
          <Link href="/tardan/[category]" as="/tardan/Texano">
            <div className={pathname === "Texano" ? "click menu-selected_nav" : "click menu-no-selected_nav"}>
              Texano
            </div>
          </Link>

          <Link href="/tardan/[category]" as="/tardan/Western">
            <div className={pathname === "Western" ? "click menu-selected_nav" : "click menu-no-selected_nav"}>
              Western
            </div>
          </Link>

          <Link href="/tardan/[category]" as="/tardan/Deportivo">
            <div className={pathname === "Deportivo" ? "click menu-selected_nav" : "click menu-no-selected_nav"}>
              Deportivo
            </div>
          </Link>

          <Link href="/tardan/[category]" as="/tardan/Boina">
            <div className={pathname === "Boina" ? "click menu-selected_nav" : "click menu-no-selected_nav"}>
              Boinas
            </div>
          </Link>

          <Link href="/tardan/[category]" as="/tardan/Playa">
            <div className={pathname === "Playa" ? "click menu-selected_nav" : "click menu-no-selected_nav"}>
              Playa
            </div>
          </Link>
          
          <Link href="/tardan/[category]" as="/tardan/Accesorios">
            <div className={pathname === "Accesorios" ? "click menu-selected_nav" : "click menu-no-selected_nav"}>
              Accesorios
            </div>
          </Link>

        </div>
      </div>
    </div>
  )
}

export default TardanNavbar