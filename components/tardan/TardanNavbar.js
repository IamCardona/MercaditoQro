const TardanNavbar = ({ hats, setHats }) => {
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
        zIndex: "991",
        borderBottom: "solid 1px #e5edef"
      }} className="navbar_shops">

        {/** Tag container */}
        <div style={{ textAlign: "center"/* , paddingTop: "0.5rem" */, backgroundColor: "white" }}>


          <div className={hats === "all" ? "click menu-selected_nav" : "click menu-no-selected_nav"} onClick={() => setHats("all")}>
            Todo
          </div>

          <div className={hats === "Etiqueta" ? "click menu-selected_nav" : "click menu-no-selected_nav"} onClick={() => setHats("Etiqueta")}>
            Etiqueta
          </div>

          <div className={hats === "Vestir" ? "click menu-selected_nav" : "click menu-no-selected_nav"} onClick={() => setHats("Vestir")}>
            Vestir
          </div>

          <div className={hats === "Casual" ? "click menu-selected_nav" : "click menu-no-selected_nav"} onClick={() => setHats("Casual")}>
            Casual
          </div>

        </div>
      </div>
    </div>
  )
}

export default TardanNavbar