import { Card, Row, Col, Button } from 'antd'

const TardanCard = ({ hats }) => {
  return(
    <div>
      <Row gutter={[8, 8]}>
        {hats.map((hat, i) => {
          return(
            <Col key={i} xs={12} sm={10} md={8} xl={6} style={{ margin: "0 auto" }}>
              <div>
              <Card
                hoverable
                cover={<img alt={hat.name} src={hat.photos[0].photos[0].url} style={{ width: "90%", margin: "0 auto" }} />}
                style={{ display: "flex", flexWrap: "wrap", alignContent: "space-between" }}
              >
                <div>
                  <div>
                    <p style={{ letterSpacing: "-1px" }}>{hat.name}</p>
                    <p style={{ fontWeight: "bold", letterSpacing: "-1px" }}>{`$${hat.price}.00`}</p>
                    <Button type="primary" style={{ margin: "0 auto", borderRadius: "0.5rem" }} onClick={() => {
                        console.log(hat.id)
                    }}>Agregar</Button>
                  </div>
                </div>
            </Card>
              </div>
          </Col>
          )
        })}
      </Row>
    </div>
  )
}

export default TardanCard