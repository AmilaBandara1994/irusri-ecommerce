import {  Button,  Form, Input,  Select } from "antd";

const { Option } = Select;
const prefixSelector = (
  <Form.Item name="prefix" noStyle>
    <Select
      style={{
        width: 70,
      }}
    >
      <Option value="86">+86</Option>
      <Option value="87">+87</Option>
      <Option value="94">+87</Option>
    </Select>
  </Form.Item>
);
const Contact = () => {
  return (
    <div className="block ">
      <div className="container">
        <h2>Contact</h2>
      <Form 
        name="basic"
       
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        layout="vertical"
        autoComplete="off"
        size="large"
      >
        <Form.Item
          label="Fullname"
          name="fullname"
          rules={[
            {
              required: true,
              message: 'Please input your fullname!',
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
              message: 'Please input your email!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
        name="phone"
        label="Phone"
        rules={[
          {
            required: true,
            message: 'Please input your phone number!',
          },
        ]}
      >
        <Input
          addonBefore={prefixSelector}
          style={{
            width: '100%',
          }}
        />
      </Form.Item>
      <Form.Item
        name="message"
        label="Message"
        rules={[
          {
            required: true,
            message: 'Please input Message',
          },
        ]}
      >
        <Input.TextArea showCount maxLength={200} />
      </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      </div>
    </div>
  )
}

export default Contact