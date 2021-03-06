import React, { useState } from 'react'
import { Form, Input, Button } from 'antd'
import { useHistory } from 'react-router'
import { auth } from '../../config/firebase'
import { errorMessage, successMessage } from '../../components/Message'

const Login = () => {
  const Router = useHistory()
  const [loading, setLoading] = useState(false)

  const handleSubmit = (value: any) => {
    setLoading(true)
    auth
      .signInWithEmailAndPassword(value.email, value.password)
      .then((data) => {
        successMessage("Login success")
        Router.push("/")
      })
      .catch((err) => {
        errorMessage(err)
      })
    setLoading(false)
  }

  return (
    <div className="bg-white h-screen w-screen flex justify-center items-center">
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={handleSubmit}
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
