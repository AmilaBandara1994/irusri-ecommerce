import { Col, Row } from 'antd';

import img from '../assets/images/img1.jpg';
import { Button } from 'antd';

const saleProducts = [
    {
      key: '1',
    //   image: require('../../assets/images/img1.jpg'),
      title: 'Fairy Clean & Fresh Washing Up Liquid Pomegranate &amp; Honeysuckle 520 ml',
      salePrice: '4502.00',
      price: '4002.00'
    },
    {
      key: '2',
    //   image: require('../../assets/images/img2.jpg'),
      title: 'Colgate Triple Action Toothpaste 100ml',
      salePrice: '1500.50',
      price: '1200.50'
    },
    {
      key: '3',
    //   image: require('../../assets/images/img3.jpg'),
      title: 'Breeze Toilet Tissue Soft White 24 Roll',
      salePrice: '1900.70',
      price: '1500.70'
    },
    {
      key: '4',
    //   image: require('../../assets/images/img4.jpg'),
      title: 'Comfort intense Fresh Sky Fabric Conditioner Liquid 60 Wash 900 ML',
      salePrice: '1700.50',
      price: '1400.50'
    }
  ]


const SaleProducts = () => {
  return (
    <div className="block products">
         <h2>Sale Products</h2>
        <Row gutter={[24, 24]}>
            {
                saleProducts.map( product => (
                    <Col xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 6 }} key={product.key} >
                        <div className="content">
                            <div className="image">
                                <img src={img} alt="product" />
                            </div>
                            <h3>{product.title}</h3>
                            <div className="price">
                              <span className='salePrice'>${product.salePrice}</span>
                                ${product.price}
                            </div>
                            <Button type="primary">Add to Cart</Button>
                        </div>
                    </Col>
                ))
            }          
        </Row>
    </div>
  )
}

export default SaleProducts