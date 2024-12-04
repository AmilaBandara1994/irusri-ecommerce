import {MobileOutlined,ShoppingCartOutlined , MailOutlined,FacebookFilled, InstagramFilled,YoutubeFilled, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Button, Dropdown, Badge  } from 'antd';
import { useAuth } from '../../context/AuthContext';




const AppHeader = () => {
  const { isLoggedIn,logout, authUser } = useAuth();

  const logOut = () => {
    logout();
  }

  const items = [
    {
      key: '1',
      label: (
        <span onClick={logOut}>
          log out
        </span>
      ),
    },
    {
      key: '2',
      label: (
         <span>Profile</span>      ),
    },
    {
      key: '3',
      label: (
        <span>Dashboard</span>   
      ),
    },
  ];
  return (
    <div className="container">
      <div className="topBar">
        <div className="contactInfo">
          <ul>
            <li><MobileOutlined /><a href="tel:+94701251421"><span>+9470 1251 421</span></a></li>
            <li><MailOutlined /><a href="mailto:amilaprasadbandara1994@gmail.com"><span>contact@ecommerce.com</span></a></li>
          </ul>
        </div>
        <div className="otherInfo">
          <ul className="socialMedia">
            <li><a href="https://www.facebook.com"><FacebookFilled /></a></li>
            <li><a href="https://www.instergram.com"><InstagramFilled /></a></li>
            <li><a href="https://www.youtube.com"><YoutubeFilled /></a></li>
            <li><Link to="/cart"> 
            
             <Badge count={authUser ? authUser.cart.length : 0} overflowCount={99}>
                <ShoppingCartOutlined style={{ fontSize: '35px', color: 'white' }} />
             </Badge>

            </Link></li>
            {/* <li><Link to="/cart"><ShoppingCartOutlined  style={{ fontSize: '40px', }} /><span>{'0'}</span></Link></li> */}
          {/* <ShoppingCartOutlined  style={{ fontSize: '40px', }} /> */}
          </ul>
          <div className='alignCenter'>
            <Dropdown
              menu={{
                items,
              }}
              placement="bottomRight"
              arrow
            >
      
              <Button><UserOutlined />  { isLoggedIn ? authUser.username :"user"      }</Button>
          </Dropdown>
      </div>
        </div>
      </div>
              <div className="header separator">
        <div className="logo"> <Link to="/home"> E-Commerce </Link></div>

        <nav>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
      
    </div>
  )
}

export default AppHeader