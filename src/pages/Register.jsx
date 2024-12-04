// import { useState } from 'react';
import { Button, Form, Input } from 'antd';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import Cart from './Cart';

const Register = () => {

  const navigate = useNavigate();
  const { register} = useAuth();

  const onFinish = (values)=>{
    // setUsers((prevAuthUser)=> [...prevAuthUser ,{
    //   username: values.username,
    //   email: values.email,
    //   password: values.password,
    //   cart:[]
    // }]);
    register(values)
    
    navigate('/login');
    console.log(values);
    
  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className='login '>
    <div className="">
      <h1>Register</h1>
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
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              type: 'email',
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
      <h3>New to E-commerce? <Link className='' to="/login">Sing In</Link> </h3>    
    </div>
  </div>
  )
}

export default Register