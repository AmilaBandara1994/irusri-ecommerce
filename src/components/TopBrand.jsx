import { Col, Row } from 'antd';
import { images } from '../assets/images/images';

const brands = [
    {
      key: '1',
      image: images.huawei,
    },
    {
      key: '2',
      image: images.lenovo,
    },
    {
      key: '3',
      image: images.samsung,
    },
    {
      key: '4',
      image: images.apple,
    }
  ]


const TopBrand = () => {
  return (
    <div className="block topBrand">
        <h2>Top Brands</h2>
        <Row gutter={[24, 24]} className='flex-row'>
            {
                brands.map( brand => (
                    <Col xs={{ span: 12 }} sm={{ span: 6 }} key={brand.key} >
                        <div className="content">
                            <div className="image">
                                <img src={brand.image} alt="product" />
                            </div>
                            <h3>{brand.title}</h3>
                        </div>
                    </Col>
                ))
            }          
        </Row>
    </div>
  )
}

export default TopBrand