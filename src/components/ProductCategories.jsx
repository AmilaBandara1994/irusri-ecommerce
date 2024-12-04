import { Col, Row } from 'antd';

import { images } from '../assets/images/images';

const productCategories = [
    {
      key: '1',
      image: images.laplogo,
      title: 'Laptop'
    },
    {
      key: '2',
      image: images.phoneLogo,
      title: 'Smart Phone'
    },
    {
      key: '3',
      image: images.headsetlogo,
      title: 'Headsets'
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