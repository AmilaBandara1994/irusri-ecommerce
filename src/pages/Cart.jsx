import { Col, Row ,Button, Dropdown} from 'antd';
import image1 from '../assets/images/img1.jpg';
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

const items = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        Featured
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        Price: Low to High
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        Price: High to Low
      </a>
    ),
  },
];
const Cart = () => {
  return (
    <div className="block products shopPage">
        <div className="container">
          <div className="titleHolder">
            <h2>shop</h2>
            <Dropdown menu={{ items, }}
              placement="bottom"
              arrow
            >
            <Button>Short by</Button>
            </Dropdown>
          </div>
        <Row gutter={24} >
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
    </div>
  )
}

export default Cart