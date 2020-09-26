import { Card, Row, Col, Button } from 'antd'

const TardanCard = ({ hats, setModalVisible, setImageHats, setNameHat, setPriceHat, setNicknameHat, setSizesHats }) => {
  return(
    <div>
      <Row gutter={[8, 8]}>
        {hats.map((hat, i) => {
          return(
            <Col key={i} xs={12} sm={10} md={8} xl={6} /* style={{ margin: "0 auto" }} */>
              <div>
              <Card
                hoverable
                cover={<img alt={hat.name} src={hat.photos[0].photos[0].url} style={{ width: "90%", margin: "0 auto" }} />}
                style={{ display: "flex", flexWrap: "wrap", alignContent: "space-between" }}
              >
                <p style={{ letterSpacing: "-1px", width: "100%" }}>{hat.name}</p>
                <p style={{ fontWeight: "bold", letterSpacing: "-1px" }}>{`$${hat.price}.00`}</p>
                <Button type="primary" style={{ borderRadius: "0.5rem" }} onClick={() => {
                  setImageHats(hat.photos)
                  setNameHat(hat.name)
                  setPriceHat(hat.price)
                  setNicknameHat(hat.nickname)
                  setSizesHats(hat.size)
                  setModalVisible(true)
                }}>Agregar</Button>
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