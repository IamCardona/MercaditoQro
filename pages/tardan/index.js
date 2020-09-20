import Layout from '../../components/layout/Layout'
import { Col, Row, Breadcrumb, Rate, Card, Button } from 'antd'
import { useState } from 'react'
import TardanSidebar from '../../components/tardan/TardanSidebar'
import TardanNavbar from '../../components/tardan/TardanNavbar'
import Link from 'next/link'
import firebase from '../../lib/auth/firebase'

const Tardan = ({ data }) => {
  return(
    <Layout menuKey="/tardan" title="Mercadito Qro - Tardan">
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
          <Row style={{ width: "90%", backgroundColor: "white", margin: "0 auto", borderRadius: "0.5rem", zIndex: "990" }}>
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

          <div style={{ width: "90%", margin: "2rem auto" }}>
            <div>
              <h3 style={{ margin: "0", letterSpacing: "-1px", fontWeight: "bold" }}>Etiqueta</h3>
            </div>

            <div style={{ margin: "1rem 0", display: "flex" }}>
              <Card
                hoverable
                cover={<img alt="Boina" src="/boina.jpg" style={{ width: "90%", margin: "0 auto" }} />}
                style={{ width: "240px" }}
              >
                <p style={{ letterSpacing: "-1px" }}>BILBAO LINO BEIGE RÚSTICO</p>
                <p style={{ fontWeight: "bold", letterSpacing: "-1px" }}>$750.00</p>
                <Button type="primary" style={{ margin: "0 auto", borderRadius: "0.5rem" }}>Agregar</Button>
              </Card>

              <Card
                hoverable
                cover={<img alt="Boina" src="/2.jpg" style={{ width: "90%", margin: "0 auto" }} />}
                style={{ width: "240px", marginLeft: "1rem", display: "flex", flexWrap: "wrap", alignContent: "space-between" }}
              >
                <div /* style={{ display: "flex", alignItems: "stretch", backgroundColor: "red" }} */>
                  <div>
                    <p style={{ letterSpacing: "-1px" }}>BILBAO LINO BEIGE RÚSTICO</p>
                    <p style={{ fontWeight: "bold", letterSpacing: "-1px" }}>$750.00</p>
                    <Button type="primary" style={{ margin: "0 auto", borderRadius: "0.5rem" }}>Agregar</Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>

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