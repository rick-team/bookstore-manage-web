import React , { Component } from 'react'
import { Form, Icon, Input, Button, message } from 'antd';

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: '',
      password: ''
    }
    this.onSubmit= this.onSubmit.bind(this)
    this.changeUserName= this.changeUserName.bind(this)
    this.changePassword= this.changePassword.bind(this)
  }
  
  onSubmit(e) {
    e.preventDefault()
    if(this.state.userName === 'admin' && this.state.userName === 'admin') {
      message.success('登陆成功')
    }else {
      message.error('登陆失败')
    }
  }

  changeUserName(e) {
    this.setState({
      userName: e.target.value
    })
  }

  changePassword(e) {
    this.setState({
      password: e.target.value
    })
  }
  
  render() {
    return (
      <div className='login'>
        <Form onSubmit={this.onSubmit} className="login-form">
          <Form.Item>
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="用户名"
              value={this.state.userName}
              onChange={this.changeUserName}
            />
          </Form.Item>
          <Form.Item>
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              value={this.state.password}
              onChange={this.changePassword}
              placeholder="密码"
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              登 陆
            </Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

export default Login