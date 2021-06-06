import React from 'react'
import { Form, Input, Button } from 'antd'
import { useAuth } from '../../hook'

const Login = () => {
  const { signin, loading } = useAuth()

  const onFinish = async (values: any) => {
    signin(values.email, values.password)
  }

  const onFinishFailed = () => {
    console.log('FINISHFAILED')
  }

  return (
    <div className="bg-white h-screen w-screen flex justify-center items-center">
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
          <Input placeholder="Email" disabled={loading} />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password placeholder="Password" disabled={loading} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="w-full" loading={loading}>
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Login
