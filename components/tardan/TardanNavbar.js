import Link from 'next/link'

const TardanNavbar = ({ pathname }) => {
  return(
    <div>
      {/** Main container */}
      <div style={{
        width: "100%",
        backgroundColor: "white",
        height: "auto",
        position: "fixed",
        /* padding: "1rem", */
        overflow: "auto",
        whiteSpace: "nowrap"
      }} className="navbar_shops">

        {/** Tag container */}
        <div style={{ textAlign: "center" }}>

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