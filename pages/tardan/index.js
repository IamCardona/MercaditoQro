import Layout from '../../components/layout/Layout'
import { Affix, Row, Col, BackTop, Drawer, Divider, Collapse } from 'antd'
import { useState } from 'react'

const Tardan = () => {
  const [catalogo, setCatalogo] = useState(false)
  
  return(
    <Layout title="Mercadito Qro - Tardan" menuKey="/tardan">
      <BackTop />

      <Affix offsetTop={65} className="menu-shop-none">
        <nav style={{ width: "100%", height: "50px", display: "flex", justifyContent: "center" }} className="click">
          <div style={{ backgroundColor: "black", width: "110px", height: "40px", opacity: "0.6", borderRadius: "0.5rem", display: "flex", justifyContent: "center", alignItems: "center" }} onClick={() => {
            setCatalogo(!catalogo)
          }}>
            <img src="/icons/sombrero-blanco.svg" alt="menu" className="icon" />
            <p style={{ color: "white", margin: "0" }}>CATÁLOGO</p>
          </div>
        </nav>
      </Affix>

      <Drawer
        title={<img src="/logos/logo-tardan.png" alt="Logo Tardan" style={{ height: "50px" }} />}
        placement="top"
        closable={true}
        onClose={() => setCatalogo(!catalogo)}
        visible={catalogo}
        height={600}
      >
        <div>
          <div>
            <p style={{ fontWeight: "bold" }}>INICIO</p>
            <p style={{ fontWeight: "bold" }}>CONTACTO</p>
            <Divider plain orientation="left">CATÁLOGO</Divider>
            <Collapse ghost>
              <Collapse.Panel header="SOMBREROS" key="1">
                <div style={{ marginLeft: "2rem" }}>
                  <p style={{ fontWeight: "bold" }}>ETIQUETA</p>
                  <p style={{ fontWeight: "bold" }}>WESTERN</p>
                  <p style={{ fontWeight: "bold" }}>PLAYA</p>
                  <p style={{ fontWeight: "bold" }}>VESTIR</p>
                </div>
              </Collapse.Panel>
              <Collapse.Panel header="ACCESORIOS" key="2">
                <div style={{ marginLeft: "2rem" }}>
                  <p style={{ fontWeight: "bold" }}>PLUMAS</p>
                  <p style={{ fontWeight: "bold" }}>FUNDAS</p>
                </div>
              </Collapse.Panel>
            </Collapse>

          </div>
        </div>
      </Drawer>

      <div>
        <Row>
          <Col className="menu-shop-display" span={4}>
            <div className="menu-shop-display">
              <div>

                <div style={{ textAlign: "center", marginTop: "1rem" }}>
                  <img src="/logos/logo-tardan.png" alt="Logo Tardan" style={{ width: "80%" }} />
                </div>

                <div style={{ marginTop: "2rem" }}>
                  <div style={{ marginLeft: "1rem" }}>
                    <p style={{ fontWeight: "bold" }}>INICIO</p>
                    <p style={{ fontWeight: "bold" }}>CONTACTO</p>
                  </div>
                  <Divider plain orientation="left">CATÁLOGO</Divider>
                  <Collapse ghost>
                    <Collapse.Panel header="SOMBREROS" key="1">
                      <div style={{ marginLeft: "2rem" }}>
                        <p style={{ fontWeight: "bold" }}>ETIQUETA</p>
                        <p style={{ fontWeight: "bold" }}>WESTERN</p>
                        <p style={{ fontWeight: "bold" }}>PLAYA</p>
                        <p style={{ fontWeight: "bold" }}>VESTIR</p>
                      </div>
                    </Collapse.Panel>
                    <Collapse.Panel header="ACCESORIOS" key="2">
                      <div style={{ marginLeft: "2rem" }}>
                        <p style={{ fontWeight: "bold" }}>PLUMAS</p>
                        <p style={{ fontWeight: "bold" }}>FUNDAS</p>
                      </div>
                    </Collapse.Panel>
                  </Collapse>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={20} xl={20}>
            <div>
              <header>

                {/** Header - logo tardan */}
                <div style={{ textAlign: "center", margin: "2rem 0" }}>
                  <img src="/logos/logo-tardan.png" alt="Logo Tardan" />
                </div>

                <div style={{ textAlign: "center", margin: "3rem 0" }}>
                  <h3 style={{ color: "#93213e" }}>"DE SONORA A YUCATÁN SE USAN SOMBREROS TARDAN, SOMBREROS QUE TRANSFORMAN"</h3>
                </div>
              </header>
            </div>
          </Col>
        </Row>
      </div>
    </Layout>
  )
}

export default Tardan


{/** Header - Tardan */}



          {/* <Row style={{
            backgroundColor: "#43464c"
          }}>
            <Col xs={24} sm={24} md={24} xl={12}>
              <div style={{ color: "white", padding: "0rem 3rem 0 3rem" }}>
                <h3 style={{ color: "white" }}>NUESTROS SOMBREROS</h3>

                <p style={{ fontWeight: "100" }}>
                  Con una herencia bi-centenaria, siempre hemos procurado servir y halagar a nuestros clientes de México y el extranjero, ofreciéndoles atención oportuna y soluciones integrales con productos altamente competitivos y vanguardistas, para satisfacer plenamente sus necesidades contribuyendo así, a que disfruten de su gusto por la moda y el diseño. Somos una empresa mexicana innovadora, creativa y rentable, reconocida por brindar a todos sus clientes confiabilidad en diseño y moda de vanguardia. Cuidamos mucho la innovación constante, la honestidad, la responsabilidad y comunicación abierta con nuestros clientes no olvidando el respeto y calidez en el servicio. Sabemos que estos valores han permitido que TARDAN trascienda por más de 170 años en el mercado.
                </p>

                <div style={{ textAlign: "right" }}>
                  <a href="https://tardan.com.mx" style={{ color: "white" }}>Tardan Sitio Oficial</a>
                </div>
              </div>
            </Col>

            <Col xs={24} sm={24} md={24} xl={12}>
              <div style={{ textAlign: "center", padding: "3rem" }}>
                <img src="/fotos/tardan/empresa-dedicada.jpg" alt="Tardan Empresa dedicada" style={{ width: "100%", borderRadius: "1rem" }} />
              </div>
            </Col>
          </Row>

          <Row style={{
            backgroundColor: "#43464c"
          }}>
            <Col xs={24} sm={24} md={24} xl={12}>
              <div style={{ color: "white", padding: "3rem 3rem 0 3rem" }}>
                <h3 style={{ color: "white" }}>NUESTROS SOMBREROS</h3>

                <p style={{ fontWeight: "100" }}>
                  Con una herencia bi-centenaria, siempre hemos procurado servir y halagar a nuestros clientes de México y el extranjero, ofreciéndoles atención oportuna y soluciones integrales con productos altamente competitivos y vanguardistas, para satisfacer plenamente sus necesidades contribuyendo así, a que disfruten de su gusto por la moda y el diseño. Somos una empresa mexicana innovadora, creativa y rentable, reconocida por brindar a todos sus clientes confiabilidad en diseño y moda de vanguardia. Cuidamos mucho la innovación constante, la honestidad, la responsabilidad y comunicación abierta con nuestros clientes no olvidando el respeto y calidez en el servicio. Sabemos que estos valores han permitido que TARDAN trascienda por más de 170 años en el mercado.
                </p>

                <div style={{ textAlign: "right" }}>
                  <a href="https://tardan.com.mx" style={{ color: "white" }}>Tardan Sitio Oficial</a>
                </div>
              </div>
            </Col>

            <Col xs={24} sm={24} md={24} xl={12}>
              <div style={{ textAlign: "center", padding: "3rem" }}>
                <img src="/fotos/tardan/empresa-dedicada.jpg" alt="Tardan Empresa dedicada" style={{ width: "100%", borderRadius: "1rem" }} />
              </div>
            </Col>
          </Row> */}