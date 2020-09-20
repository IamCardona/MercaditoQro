import Link from 'next/link'
import { Button } from 'antd'

const  NavBack = () => {
  return(
    <nav style={{
      position: "fixed",
      width: "100%",
      height: "60px",
      display: "flex",
      alignItems: "center",
      zIndex: "999",
      backgroundColor: "white",
      justifyContent: "space-between",
      borderBottom: "solid 1px #e5edef"
    }}>
      <div>
        <Link href="/">
          <img src="/logo.png" alt="Logo" style={{ height: "60px", marginLeft: "1rem" }} className="click" />
        </Link>
      </div>

      <div>
        <Link href="/">
          <Button style={{ marginRight: "1rem" }}>
            Volver
          </Button>
        </Link>
      </div>
    </nav>
  )
}

export default NavBack