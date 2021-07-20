import React, { useEffect } from 'react'
import { Form, Input, Button } from 'antd'
import { useHistory } from 'react-router'

const Login = () => {
  const history = useHistory()


  const onFinishFailed = () => {
    console.log('FINISHFAILED')
  }

  return (
    <div className="bg-white h-screen w-screen flex justify-center items-center">
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
          <Input placeholder="Email" disabled={false} />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password placeholder="Password" disabled={false} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="w-full" loading={false}>
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Login
