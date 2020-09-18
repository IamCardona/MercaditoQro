import Layout from '../../components/layout/Layout'
import { Menu } from 'antd'
import { useState } from 'react'
import TardanSidebar from '../../components/tardan/TardanSidebar'
import TardanNavbar from '../../components/tardan/TardanNavbar'

const Tardan = () => {
  const [test, setTest] = useState("/test")

  return(
    <Layout style={{ backgroundColor: "#fafaf8" }}>
      <TardanSidebar />
      <TardanNavbar />

      <div style={{ backgroundColor: "#fafaf8" }}>
        <div style={{ height: "100%" }} className="container-shops">

          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          
          {/* <Menu style={{ overflow: "auto", whiteSpace: "nowrap"  }}>
            <Menu.Item style={{ display: "inline-block", borderRadius: "8px" }}>
              Vestir
            </Menu.Item>
            <Menu.Item style={{ display: "inline-block" }}>
              Vestir
            </Menu.Item>
            <Menu.Item style={{ display: "inline-block" }}>
              Vestir
            </Menu.Item>
            <Menu.Item style={{ display: "inline-block" }}>
              Vestir
            </Menu.Item>
            <Menu.Item style={{ display: "inline-block" }}>
              Vestir
            </Menu.Item>
            <Menu.Item style={{ display: "inline-block" }}>
              Vestir
            </Menu.Item>
            <Menu.Item style={{ display: "inline-block" }}>
              Vestir
            </Menu.Item>
            <Menu.Item style={{ display: "inline-block" }}>
              Vestir
            </Menu.Item>
            <Menu.Item style={{ display: "inline-block" }}>
              Vestir
            </Menu.Item>
            <Menu.Item style={{ display: "inline-block" }}>
              Vestir
            </Menu.Item>
            <Menu.Item style={{ display: "inline-block" }}>
              Vestir
            </Menu.Item>
            <Menu.Item style={{ display: "inline-block" }}>
              Vestir
            </Menu.Item>
            <Menu.Item style={{ display: "inline-block" }}>
              Vestir
            </Menu.Item>
            <Menu.Item style={{ display: "inline-block" }}>
              Vestir
            </Menu.Item>
            <Menu.Item style={{ display: "inline-block" }}>
              Vestir
            </Menu.Item>
            <Menu.Item style={{ display: "inline-block" }}>
              Vestir
            </Menu.Item>
            <Menu.Item style={{ display: "inline-block" }}>
              Vestir
            </Menu.Item>
            <Menu.Item style={{ display: "inline-block" }}>
              Vestir
            </Menu.Item>
            <Menu.Item style={{ display: "inline-block" }}>
              Vestir
            </Menu.Item>
            <Menu.Item style={{ display: "inline-block" }}>
              Vestir
            </Menu.Item>
            <Menu.Item style={{ display: "inline-block" }}>
              Vestir
            </Menu.Item>
            <Menu.Item style={{ display: "inline-block" }}>
              Vestir
            </Menu.Item>
            <Menu.Item style={{ display: "inline-block" }}>
              Vestir
            </Menu.Item>
            <Menu.Item style={{ display: "inline-block" }}>
              Vestir
            </Menu.Item>
            
          </Menu> */}
        </div>
      </div>
    </Layout>
  )
}

export default Tardan