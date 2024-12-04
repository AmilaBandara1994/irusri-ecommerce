import { Col, Row } from 'antd';
import { Carousel } from 'antd';
import { images } from '../assets/data';

import {TruckFilled ,CustomerServiceFilled,MoneyCollectFilled } from '@ant-design/icons';



const Hero = () => {
  return (
    <div className='heroBlock '>
        <Row gutter={[24, 24]}>
            {/* Carousel */}
            <Col xs={24} md={18}>
                <Carousel autoplay>
                    <div>
                        <img src={images.carousel} alt="" />
                    </div>
                    <div>
                        <img src={images.banner2} alt="" />
                    </div>
                    <div>
                        <img src={images.estore} alt="" />
                    </div>
                    <div>
                        <img src={images.estore2} alt="" />
                    </div>
                    <div>
                        <img src={images.banner2} alt="" />
                    </div>
                </Carousel>
            </Col>
            {/* Information Block */}
            <Col xs={24} md={6}>
                <div className="heroBlocks">
                    <div className="holder">
                        <div className="icon">
                        <TruckFilled />
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
                        <CustomerServiceFilled />
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
                        <MoneyCollectFilled />
                        </div>
                        <div className="content">
                            <h3>Money Back Guarantee </h3>
                            <p>100% Money back guarantee</p>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    </div>
  )
}

export default Hero