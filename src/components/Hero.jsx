import { Col, Row } from 'antd';
import { Carousel } from 'antd';

// import carousel_1 from '../assets/images/carousel-1.webp';
import carousel_1 from '../assets/images/black-friday.avif';
import carousel_2 from '../assets/images/carousel-2.jpg';

const Hero = () => {
  return (
    <>
        <Row gutter={[24, 24]}>
            {/* Carousel */}
            <Col xs={24} md={18}>
                <Carousel autoplay>
                    <div>
                        <img src={carousel_1} alt="" />
                    </div>
                    <div>
                    <img src={carousel_2} alt="" />
                    </div>
                </Carousel>
            </Col>
            {/* Information Block */}
            <Col xs={24} md={6}>
                <div className="heroBlocks">
                    <div className="holder">
                        <div className="icon">
                            <i className='fa-solid fa-truck'></i>
                        </div>
                        <div className="content">
                            <h3>Free Shipping &ap; Return </h3>
                            <p>Free shipping on above $100</p>
                        </div>
                    </div>
                </div>
                <div className="heroBlocks">
                    <div className="holder">
                        <div className="icon">
                            <i className='fa-solid fa-sack-dollar'> </i>
                        </div>
                        <div className="content">
                            <h3>24 Hour Support </h3>
                            <p>Our Customer support team always ready for your help</p>
                        </div>
                    </div>
                </div>
                <div className="heroBlocks">
                    <div className="holder">
                        <div className="icon">
                            <i className='fa-solid fa-dollar'> </i>
                        </div>
                        <div className="content">
                            <h3>Money Back Guarantee </h3>
                            <p>100% Money back guarantee</p>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    </>
  )
}

export default Hero