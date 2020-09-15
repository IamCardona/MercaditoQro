import Layout from '../../components/layout/Layout'
import { Affix, Row, Col } from 'antd'
import { HomeOutlined, ShopOutlined, DownOutlined } from '@ant-design/icons'

const Tardan = () => {
  return(
    <Layout title="Mercadito Qro - Tardan" menuKey="/tardan">
      <div>

        {/** Header - Tardan */}
        <header>

          {/** Header - logo tardan */}
          <div style={{ textAlign: "center", margin: "2rem 0" }}>
            <img src="/logos/logo-tardan.png" alt="Logo Tardan" />
          </div>

          <div style={{ textAlign: "center", margin: "3rem 0" }}>
            <h3 style={{ color: "#93213e" }}>"DE SONORA A YUCATÁN SE USAN SOMBREROS TARDAN, SOMBREROS QUE TRANSFORMAN"</h3>
          </div>
        </header>

        <Affix offsetTop={60} onChange={e => console.log(e)}>
          <nav style={{ width: "100%", backgroundColor: "#93213e", padding: "1rem", display: "flex", justifyContent: "center" }}>
            <h3 style={{ color: "white", marginRight: "1rem" }} className="click">Inicio</h3>
            <h3 style={{ color: "white", marginLeft: "1rem" }} className="click">Catálogo <DownOutlined /></h3>
          </nav>
        </Affix>


          <Row style={{
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
          </Row>
      </div>
    </Layout>
  )
}

export default Tardan