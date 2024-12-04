import { Col, Row } from 'antd';

// import img from '../assets/images/img1.jpg';
import { Button } from 'antd';
import { images, products } from '../assets/data';
import { useAuth } from '../context/AuthContext';

// const saleProducts = [
//     {
//       key: '1',
//       image: images.galaxyBook,
//       title: "SAMSUNG Galaxy Note book",
//       salePrice: '4502.00',
//       price: '4002.00'
//     },
//     {
//       key: '2',
//       image: images.mac2016,
//       title: 'Apple MacBook Air - 2020',
//       salePrice: '1500.50',
//       price: '1200.50'
//     },
//     {
//       key: '3',
//       image: images.macpro,
//       title: 'Apple MacBook Pro - 2024',
//       salePrice: '1900.70',
//       price: '1500.70'
//     },
//     {
//       key: '4',
//       image: images.mca2024,
//       title: 'Apple MacBook Air - 2024',
//       salePrice: '1700.50',
//       price: '1400.50'
//     }
//   ]


const SaleProducts = () => {
  const {  addToCart} = useAuth();

  const addToCartfn = (value) => {
    addToCart(value)
  }
  return (
    <div className="block products">
         <h2>Sale Products</h2>
        <Row gutter={[24, 24]}>
            {
                products.filter(product => product.tag.includes('sale'))
                .map( product => (
                    <Col xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 6 }} key={product.key} >
                        <div className="content">
                            <div className="image">
                                <img src={product.image} alt="product" />
                            </div>
                            <h3>{product.title}</h3>
                            <div className="price">
                              <span className='salePrice'>${product.salePrice}</span>
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

export default SaleProducts