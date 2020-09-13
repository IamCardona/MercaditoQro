import { useState } from 'react'
import Layout from '../../components/layout/Layout'
import { Menu, Button, message } from 'antd'
import { HomeOutlined, MenuUnfoldOutlined, MenuFoldOutlined, ShopOutlined } from '@ant-design/icons'

const Tardan = () => {
  const [menu, setMenu] = useState(false)

  return(
    <Layout title="Mercadito Qro - Tardan" menuKey="/tardan">
      <div>

          <div style={{ textAlign: "center" }}>
            <img src="/logos/logo-tardan.png" />
          </div>

        <div style={{ width: "256px", position: "fixed", top: "80px", left: "20px" }}>
          <Button style={{ marginBottom: "1rem" }} type="primary" onClick={() => setMenu(!menu)}>
              {menu ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </Button>

          <Menu mode="inline" inlineCollapsed={menu} theme="light">
            <Menu.Item key="/inicio" icon={<HomeOutlined />}>Inicio</Menu.Item>
            <Menu.SubMenu title="Productos" icon={<ShopOutlined />}>
              <Menu.Item key="/playa">Playa</Menu.Item>
            </Menu.SubMenu>
          </Menu>
        </div>
      </div>
    </Layout>
  )
}

export default Tardan