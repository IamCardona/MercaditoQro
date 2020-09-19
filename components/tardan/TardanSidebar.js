import Link from 'next/link'

const TardanSidebar  = ({ pathname }) => {
  return(
    <div>
      {/** Main container */}
      <div style={{
        width: "200px",
        backgroundColor: "white",
        height: "90vh",
        position: "fixed",
        padding: "1rem",
        overflow: "scroll",
        left: "20px"
      }} className="sidebar-shops">

        {/** Title */}
        <h2 style={{ fontWeight: "bold", color: "#332927" }}>Catálogo</h2>

        {/** Tag container */}
        <div style={{ margin: "0 0", textAlign: "left", borderRadius: "1rem" }}>

          <Link href="/tardan">
            <div className={!pathname ? "click menu-selected" : "click menu-no-selected"}>
              Todo
            </div>
          </Link>

          <Link href="/tardan/[category]" as="/tardan/Etiqueta">
            <div className={pathname === "Etiqueta" ? "click menu-selected" : "click menu-no-selected"}>
              Etiqueta
            </div>
          </Link>

          <Link href="/tardan/[category]" as="/tardan/Vestir">
            <div className={pathname === "Vestir" ? "click menu-selected" : "click menu-no-selected"}>
              Vestir
            </div>
          </Link>

          <Link href="/tardan/[category]" as="/tardan/Casual">
            <div className={pathname === "Casual" ? "click menu-selected" : "click menu-no-selected"}>
              Casual
            </div>
          </Link>
          
          <Link href="/tardan/[category]" as="/tardan/Texano">
            <div className={pathname === "Texano" ? "click menu-selected" : "click menu-no-selected"}>
              Texano
            </div>
          </Link>

          <Link href="/tardan/[category]" as="/tardan/Western">
            <div className={pathname === "Western" ? "click menu-selected" : "click menu-no-selected"}>
              Western
            </div>
          </Link>

          <Link href="/tardan/[category]" as="/tardan/Deportivo">
            <div className={pathname === "Deportivo" ? "click menu-selected" : "click menu-no-selected"}>
              Deportivo
            </div>
          </Link>

          <Link href="/tardan/[category]" as="/tardan/Boina">
            <div className={pathname === "Boina" ? "click menu-selected" : "click menu-no-selected"}>
              Boinas
            </div>
          </Link>

          <Link href="/tardan/[category]" as="/tardan/Playa">
            <div className={pathname === "Playa" ? "click menu-selected" : "click menu-no-selected"}>
              Playa
            </div>
          </Link>
          
          <Link href="/tardan/[category]" as="/tardan/Accesorios">
            <div className={pathname === "Accesorios" ? "click menu-selected" : "click menu-no-selected"}>
              Accesorios
            </div>
          </Link>

        </div>
      </div>
    </div>
  )
}

export default TardanSidebar