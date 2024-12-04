import { Col, Row } from 'antd';

import huawei from '../assets/images/Huawei-Logo.png';
import lenovo from '../assets/images/Lenovo-Logo.png';
import samsung from '../assets/images/samsung-brand.png';
import apple from '../assets/images/Apple-Logo.png';

const brands = [
    {
      key: '1',
      image: huawei,
    },
    {
      key: '2',
      image: lenovo,
    },
    {
      key: '3',
      image: samsung,
    },
    {
      key: '4',
      image: apple,
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