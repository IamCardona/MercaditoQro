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
          <div style={{ textAlign: "center" }}>
            <img src="/logos/logo-tardan.png" />
          </div>
          <div style={{ textAlign: "center" }}>
            <img src="/logos/logo-tardan.png" />
          </div>
          <div style={{ textAlign: "center" }}>
            <img src="/logos/logo-tardan.png" />
          </div>
          <div style={{ textAlign: "center" }}>
            <img src="/logos/logo-tardan.png" />
          </div>
          <div style={{ textAlign: "center" }}>
            <img src="/logos/logo-tardan.png" />
          </div>
          <div style={{ textAlign: "center" }}>
            <img src="/logos/logo-tardan.png" />
          </div>
          <div style={{ textAlign: "center" }}>
            <img src="/logos/logo-tardan.png" />
          </div>
          <div style={{ textAlign: "center" }}>
            <img src="/logos/logo-tardan.png" />
          </div>
          <div style={{ textAlign: "center" }}>
            <img src="/logos/logo-tardan.png" />
          </div>
          <div style={{ textAlign: "center" }}>
            <img src="/logos/logo-tardan.png" />
          </div>


        <div style={{ position: "fixed", top: "60px" }}>

          <Menu mode="vertical" inlineCollapsed={menu} theme="light" style={{display: "flex" }}>
            <Menu.SubMenu key="/tardan" icon={<ShopOutlined />}>
              <Menu.Item key="/inicio" icon={<HomeOutlined />}>Inicio</Menu.Item>
              <Menu.ItemGroup title="Sombreros">
                <Menu.Item key="/playa">Playa</Menu.Item>
                <Menu.Item key="/etiqueta">Etiqueta</Menu.Item>
                <Menu.Item key="/western">Western</Menu.Item>
                <Menu.Item key="/vestir">Vestir</Menu.Item>
              </Menu.ItemGroup>
            </Menu.SubMenu>
          </Menu>
        </div>
      </div>
    </Layout>
  )
}

export default Tardan