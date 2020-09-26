import { Modal, Row, Col } from 'antd'
import { useState } from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup, ButtonFirst, ImageWithZoom } from 'pure-react-carousel';
import ReactImageMagnify from 'react-image-magnify';

const TardanModal = ({ visible, setModalVisible, imageHats, nameHat, priceHat, nicknameHat, sizesHat }) => {
  const [quantity, setQuantity] = useState(0)
 
  return (
    <Modal
      visible={visible}
      onCancel={() => setModalVisible(false)}
    >
      <div>
<CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={3}
      >
        <Slider>
          <Slide index={0}>I am the first Slide.</Slide>
          <Slide index={1}>I am the second Slide.</Slide>
          <Slide index={2}>
            <ReactImageMagnify {...{
              smallImage: {
                  alt: 'https://firebasestorage.googleapis.com/v0/b/mercadito-qro.appspot.com/o/tardan%2FBILBAO-LINO-BEIGE-RUSTICO-2785.jpg?alt=media',
                  isFluidWidth: true,
                  src: 'https://firebasestorage.googleapis.com/v0/b/mercadito-qro.appspot.com/o/tardan%2FBILBAO-LINO-BEIGE-RUSTICO-2785.jpg?alt=media'
              },
              largeImage: {
                  src: 'https://firebasestorage.googleapis.com/v0/b/mercadito-qro.appspot.com/o/tardan%2FBILBAO-LINO-BEIGE-RUSTICO-2785.jpg?alt=media',
                  width: 1000,
                  height: 1000
              },
              isHintEnabled: true,
              shouldHideHintAfterFirstActivation: false,
              enlargedImagePosition: 'over',
              hintTextMouse: "Pasa el raton por encima para zoom",
              hintTextTouch: "Manten precionado para zoom"
            }} />
          </Slide>
          {/* <Slide style={{   textAlign: ""}} index={3}><ImageWithZoom style={{ width: "200px", textAlign: "center" }} src="https://firebasestorage.googleapis.com/v0/b/mercadito-qro.appspot.com/o/tardan%2FBILBAO-LINO-BEIGE-RUSTICO-2785.jpg?alt=media" /></Slide> */}
          {/* <Slide index={3}><ImageWithZoom style={{ width: "100%" }} src="https://firebasestorage.googleapis.com/v0/b/mercadito-qro.appspot.com/o/tardan%2FBILBAO-LINO-BEIGE-RUSTICO-2785.jpg?alt=media" /></Slide> */}
          {/* <Slide index={3}><ImageWithZoom src="https://firebasestorage.googleapis.com/v0/b/mercadito-qro.appspot.com/o/tardan%2FBILBAO-LINO-BEIGE-RUSTICO-2785.jpg?alt=media" style={{ width: "100%", margin: "0 auto" }} /></Slide> */}
        </Slider>
        
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
        
      </CarouselProvider>
      </div>
    </Modal>
  )
}

export default TardanModal