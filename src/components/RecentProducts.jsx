import { Col, Row } from 'antd';

import img from '../assets/images/img1.jpg';
import { Button } from 'antd';
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';

const products = [
    {
      key: '1',
    //   image: require('../../assets/images/img1.jpg'),
      title: 'Fairy Clean & Fresh Washing Up Liquid Pomegranate &amp; Honeysuckle 520 ml',
      price: '4002.00'
    },
    {
      key: '2',
    //   image: require('../../assets/images/img2.jpg'),
      title: 'Fairy Clean & Fresh Washing Up Liquid Pomegranate &amp; Honeysuckle 520 ml00ml',
      price: '1200.50'
    },
    {
      key: '3',
    //   image: require('../../assets/images/img3.jpg'),
      title: 'Breeze Toilet Tissue Soft White 24 Roll',
      price: '1500.70'
    },
    {
      key: '4',
    //   image: require('../../assets/images/img4.jpg'),
      title: 'Comfort intense Fresh Sky Fabric Conditioner Liquid 60 Wash 900 ML',
      price: '1400.50'
    }
  ]


const RecentProducts = () => {
  // const [error, setError] = useState("");
  const {  users, authUser, setAuthUser,setUsers, isLoggedIn, setIsLoggedIn} = useAuth();

  const addToCart = (value) => {
    // if(isLoggedIn){
    //   users.map((user) =>{
    //     if(user.email === authUser.email){
    //       setUsers({
    //         cart: [...user.cart,value]
    //       })
    //     }
    //   })
    // }else{
    //     alert("something went wrong");
    //     // alert()
    // }
  }
  return (
    <div className="block products">
         <h2>Recent Products</h2>
        <Row gutter={[24, 24]}>
            {
              products.map( product => (
                    <Col xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 6 }} key={product.key} >
                        <div className="content">
                            <div className="image">
                                <img src={img} alt="product" />
                            </div>
                            <h3>{product.title}</h3>
                            <div className="price">
                                ${product.price}
                            </div>
                            <Button type="primary" onClick={addToCart(product)}>Add to Cart</Button>
                        </div>
                    </Col>
                ))
            }

            
        </Row>
    </div>
  )
}

export default RecentProducts