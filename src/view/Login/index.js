import React , { Component } from 'react'
import { Form, Icon, Input, Button, message } from 'antd'
import store from '@/store'

class LoginContainer extends Component {
  onSubmit = e => {
    e.preventDefault()
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        if(values.username === 'admin' && values.passworld === 'admin') {
          const action = {
            type: 'loginChange',
            value: true
          } 
          store.dispatch(action)
          this.props.history.push('/home')
          message.success('登陆成功')
        }else {
          message.error('密码错误，登陆失败')
        }
      }
    })
  }
  
  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div className='login'>
        <Form onSubmit={this.onSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: '请输入用户名!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="请输入用户名"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('passworld', {
              rules: [{ required: true, message: '请输入密码!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="请输入密码"
              />,
            )}
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

const Login = Form.create({ name: 'normal_login' })(LoginContainer);

export default Login