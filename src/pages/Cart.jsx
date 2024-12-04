import { Col, Row, Button, Dropdown } from 'antd';
import { useAuth } from '../context/AuthContext';
import { useEffect, useState } from 'react';
import {
  CloseCircleOutlined
} from '@ant-design/icons';
const Cart = () => {
  const { removeFromCart ,authUser } = useAuth();
  const [product, setProduct] = useState([...authUser.cart]);

  const lowToHigh = () => {
    const sorted = [...product].sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    setProduct(sorted);
  };

  const highToLow = () => {
    const sorted = [...product].sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    setProduct(sorted);
  };

  const items = [
    {
      key: '1',
      label: (
        <span onClick={lowToHigh}>
          Price: Low to High
        </span>
      ),
    },
    {
      key: '2',
      label: (
        <span onClick={highToLow}>
          Price: High to Low
        </span>
      ),
    },
  ];

  const remove = (key)=>{
    removeFromCart(key);
  }

  // Initialize products on component load
  useEffect(() => {
    setProduct([...authUser.cart]);
  }, [authUser.cart]);

  return (
    <div className="block products shopPage">
      <div className="container">
        <div className="titleHolder">
          <h2>Shop</h2>
          <Dropdown menu={{ items }} placement="bottom" arrow>
            <Button>Sort by</Button>
          </Dropdown>
        </div>
        <Row gutter={24}>
          {product.map((product) => (
            <Col lg={4} key={product.key}>
              <div className="content">
                <span className='close'onClick={() => remove(product.key)}><CloseCircleOutlined /></span>
                <div className="image">
                  <img src={product.image} alt={product.title} />
                </div>
                <h3>{product.title}</h3>
                <p>${product.price}</p>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Cart;
