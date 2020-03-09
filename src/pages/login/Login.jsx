import React, { Component } from 'react'
import { Form, Input, Button } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import './Login.less'
import logo from './images/logo512.png'

export default class Login extends Component {
 
  render() {
    return (
      <div className="login">
        <div className="login-header">
          <img src={logo} alt="logo"/>
          <h1>后台管理系统</h1>
        </div>
        <div className="login-content">
          <h1>用户登陆</h1>
          <Form name="normal_login" className="login-form"
          initialValues={{ remember: true,}} >
            <Form.Item name="username">
              <Input prefix={<UserOutlined type="site-form-item-icon" />} placeholder="用户名" />
            </Form.Item>
            <Form.Item name="password">
              <Input prefix={<LockOutlined type="site-form-item-icon" />} type="password" placeholder="密码"/>
            </Form.Item>
            <Form.Item>
             <Button type="primary" htmlType="submit" className="login-form-button">登 陆</Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    )
  }
}

