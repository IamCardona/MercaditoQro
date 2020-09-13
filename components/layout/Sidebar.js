import { Drawer, Menu, Button, Divider } from 'antd'
import { useUser } from '../../lib/auth/userContext'
import Link from 'next/link'

const Sidebar = ({ visible, menuKey }) => {
  const { user } = useUser()

  return(
    <Drawer
      title={null}
      closable={false}
      visible={visible}
      placement="left"
      style={{ zIndex: "998" }}
      width={300}
    >
      <div style={{ height: "60px" }}></div>
      {/** Menu */}

      {user ? (
        <div>
          <p>{`Hola, ${user}`}</p>
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

      <Menu defaultSelectedKeys={[menuKey]} style={{ marginTop: "1rem" }}>
        <Menu.Item key="/" icon={<img src="/icons/global.svg" className="icon" />}>
          <Link href="/">
            Mercadito Qro
          </Link>
        </Menu.Item>

        <Menu.Item key="/user" icon={<img src="/icons/usuario.svg" className="icon" />}>
          <Link href="/user">
            Mi cuenta
          </Link>
        </Menu.Item>

        <Divider orientation="left" plain style={{ color: "grey" }}>Tiendas</Divider>

        <Menu.SubMenu key="/ropa" title="Ropa" icon={<img src="/icons/percha.svg" className="icon" />}>

          <Menu.Item key="/tardan">
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