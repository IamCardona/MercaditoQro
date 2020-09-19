import Layout from '../../components/layout/Layout'
import { Col, Row, Breadcrumb, Rate } from 'antd'
import { useState } from 'react'
import TardanSidebar from '../../components/tardan/TardanSidebar'
import TardanNavbar from '../../components/tardan/TardanNavbar'
import Link from 'next/link'
import firebase from '../../lib/auth/firebase'

const Tardan = ({ data }) => {
  console.log(data)
  const [test, setTest] = useState("/test")

  return(
    <Layout>
      <TardanSidebar />
      <TardanNavbar />

      <div style={{ backgroundColor: "#fafaf8" }}>
        <div style={{ height: "100%" }} className="container-shops">

          {/** Current Location */}
          <Breadcrumb style={{ margin: "1rem" }}>
            <Breadcrumb.Item><Link href="/"><a>Mercadito Qro</a></Link></Breadcrumb.Item>
            <Breadcrumb.Item>Ropa</Breadcrumb.Item>
            <Breadcrumb.Item>Tardan</Breadcrumb.Item>
          </Breadcrumb>

          {/**  */}
          <Row style={{ width: "90%", backgroundColor: "white", margin: "0 auto", borderRadius: "0.5rem" }}>
            <Col xs={24} sm={24} md={24} xl={12}>
              <div style={{ padding: "1rem", textAlign: "center" }}>
                <img src="/logos/logo-tardan.png" alt="Logo tardan" />
              </div>
            </Col>

            <Col xs={24} sm={24} md={24} xl={12}>
              <div style={{ padding: "1rem" }}>
                <p style={{ fontWeight: "bold", color: "#7d7d7d" }}>DE SONORA A YUCATÁN SE USAN SOMBREROS TARDAN, SOMBREROS QUE TRANSFORMAN</p>
                <div style={{ textAlign: "right" }}>
                <p style={{ color: "#7d7d7d", fontStyle: "italic" }}>- Tardan</p>
                </div>
                <Rate disabled defaultValue={4.5} />
              </div>
            </Col>

          </Row>
        </div>
      </div>
    </Layout>
  )
}

export default Tardan

/* export async function getStaticProps() {
  const snapshot = await firebase.firestore().collection('/shops/tardan/products').get()

  const data = []

  snapshot.forEach(doc => {
    const document = doc.data()
    data.push(document)
  })
    
  return {
    props: { data }
  } 
} */