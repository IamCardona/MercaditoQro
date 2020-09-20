import { useState, useEffect } from 'react'
import { Drawer, Menu, Button, Divider } from 'antd'
import { useUser } from '../../lib/auth/userContext'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Sidebar = ({ visible, menuKey, setVisible }) => {
  const router = useRouter()
  const { user } = useUser()
  const [stateSidebar, setStateSidebar] = useState(null)

  useEffect(() => {
    const updateWidth = () => {
      const width = document.body.clientWidth
      if (width < 550) {
        setStateSidebar("inline")
      } else {
        setStateSidebar("vertical")
      }
    }
    updateWidth()
    window.addEventListener("resize", updateWidth)
    return () => {
      window.removeEventListener("resize", updateWidth)
    }
  })

  const checkNavStatus = nav => {
    if(router.pathname === nav) {
      setVisible(!visible)
    }
  }

  return(
    <Drawer
      title={user ? (
        <div>
          <p style={{ fontWeight: "bold", margin: "0" }}>{`Hola, ${user}`}</p>
        </div>
      ):(
        <div style={{ display: "flex" }}>
          <Link href="/login">
            <Button type="primary" style={{ marginRight: "1rem" }}>Iniciar sesión</Button>
          </Link>
          <Link href="/register">
            <Button>Crear cuenta</Button>
          </Link>
        </div>
      )}
      closable={true}
      visible={visible}
      placement="left"
      style={{ zIndex: "999" }}
      width={320}
      onClose={() => setVisible(!visible)}
    >
     {/*  <div style={{ height: "10vh" }}></div> */}
      {/** Menu */}

      {/* user ? (
        <div>
          <p style={{ fontWeight: "bold" }}>{`Hola, ${user}`}</p>
        </div>
      ):(
        <div style={{ display: "flex" }}>
          <Link href="/login">
            <Button type="primary" style={{ marginRight: "1rem" }}>Iniciar sesión</Button>
          </Link>
          <Link href="/register">
            <Button>Crear cuenta</Button>
          </Link>
        </div>
      ) */}

      <Menu defaultSelectedKeys={[menuKey]} style={{ /* marginTop: "1rem" */ }} mode={stateSidebar}>
        <Menu.Item key="/" icon={<img src="/icons/global.svg" className="icon" />} onClick={() => checkNavStatus("/")}>
          <Link href="/">
            Mercadito Qro
          </Link>
        </Menu.Item>

        <Menu.Item key="/user" icon={<img src="/icons/usuario.svg" className="icon" />} onClick={() => checkNavStatus("/user")}>
          <Link href="/user">
            Mi cuenta
          </Link>
        </Menu.Item>

        <Menu.Item key="/divider">
          <Divider orientation="left" plain style={{ color: "grey" }}>Tiendas</Divider>
        </Menu.Item>

        <Menu.SubMenu key="/ropa" title="Ropa" icon={<img src="/icons/percha.svg" className="icon" />}>

          <Menu.Item key="/tardan" onClick={() => checkNavStatus("/tardan")}>
            <Link href="/tardan">
              <div className="flex"><img src="/icons/sombrero.svg" className="icon" /> Tardan</div>
            </Link>
          </Menu.Item>
        </Menu.SubMenu>

      </Menu>

    </Drawer>
  )
}

export default Sidebar