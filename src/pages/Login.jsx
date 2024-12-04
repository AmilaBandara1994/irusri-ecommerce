import { useState } from 'react';
import { Button, Form, Input } from 'antd';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
const Login = () => {
  const [error, setError] =useState("");
  const navigate = useNavigate();
  const {  users,login, setAuthUser, isLoggedIn, setIsLoggedIn} = useAuth();

  const onFinish = (values)=>{
    // users.map((user) =>{
    //         if(user.email === values.email && user.password === values.password){
    //           setAuthUser({
    //             username: user.username,
    //             email: user.email,
    //             password: user.password,
    //             cart: user.cart
    //           })
    //           setIsLoggedIn(true);
    //           navigate('/home');
    //         }
            
    //         if(isLoggedIn){
    //           setError("")
    //         }else{
    //           setError("Login failed!. Username or Password incorrect.")
    //         }
    //       })    
    login(values.email, values.password)
  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className='login '>
      <div className="">

          <h1>Login</h1>


        { error !== "" ?<h3 className='error'>{error}</h3> : ""}
        <Form
          name="basic"
          
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout='vertical'
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your Email!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item label={null}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form> 

        <h3>New to E-commerce? <Link className='' to="/register">Register</Link> </h3>         
      </div>
    </div>
  )
}

export default Login