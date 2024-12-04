import { Col, Row } from 'antd';
import { images, products } from '../assets/data';
import { Button } from 'antd';
import { useAuth } from '../context/AuthContext';

// const products = [
//     {
//       key: '1',
//       image: images.quantom,
//       title: 'Fairy Clean & Fresh Washing Up Liquid Pomegranate &amp; Honeysuckle 520 ml',
//       price: '4002.00'
//     },
//     {
//       key: '2',
//       image: images.headsetlogo,
//       title: 'Fairy Clean & Fresh Washing Up Liquid Pomegranate &amp; Honeysuckle 520 ml00ml',
//       price: '1200.50'
//     },
//     {
//       key: '3',
//       image: images.galaxyBook,
//       title: 'Breeze Toilet Tissue Soft White 24 Roll',
//       price: '1500.70'
//     },
//     {
//       key: '4',
//       image: images.macpro,
//       title: 'Comfort intense Fresh Sky Fabric Conditioner Liquid 60 Wash 900 ML',
//       price: '1400.50'
//     }
//   ]


const RecentProducts = () => {
  const {  addToCart} = useAuth();

  const addToCartfn = (value) => {
    addToCart(value)
  }
  return (
    <div className="block products">
         <h2>Recent Products</h2>
        <Row gutter={[24, 24]}>
            {
              products.filter(product => product.tag.includes('new'))
              .map( product => (
                    <Col xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 6 }} key={product.key} >
                        <div className="content">
                            <div className="image">
                                <img src={product.image} alt="product" />
                            </div>
                            <h3 className='productTitle'>{product.title}</h3>
                            <p className='productDesc'>{product.description}</p>
                            <div className="price">
                                ${product.price}
                            </div>
                            <Button type="primary" onClick={() => addToCartfn(product)}>Add to Cart</Button>
                        </div>
                    </Col>
                ))
            }

            
        </Row>
    </div>
  )
}

export default RecentProducts