import { Col, Row } from 'antd';

// import { productCategories } from "../assets/data"
import image1 from '../assets/images/img1.jpg'

const productCategories = [
    {
      key: '1',
      image: image1,
      title: 'Laptop'
    },
    {
      key: '2',
      title: 'Smart Phone'
    },
    {
      key: '3',
      title: 'Headset'
    }
  ]
  

const ProductCategories = () => {
  return (
    <div className='block productCategories'>
        <h2>Product Categories</h2>
        <Row gutter={24} className='flex-row'>
            {
                productCategories.map(productCategory => (
                   <Col lg={4} key={productCategory.key}>
                    <div className="content">
                        <div className="image">
                            <img src={productCategory.image} alt={productCategory.title} />
                        </div>
                        <h3>{productCategory.title}</h3>
                    </div>
                    </Col>
                ))
            }
         
        </Row>
    </div>
  )
}

export default ProductCategories