import React , { Component } from 'react'
import { Form, Input, Icon, Button } from 'antd';

class AddBookContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ''
    }
  }

  submitForm = e => {
    e.preventDefault()
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    }
    return (
      <div>
        <Form onSubmit={this.submitForm} style={{width: 500}} labelCol={{ span: 5 }} wrapperCol={{ span: 12 }}>
          <Form.Item label="书籍名称">
            {getFieldDecorator('name', {
              rules: [{ required: true, message: '请输入书籍名称!' }],
            })(
              <Input
                prefix={<Icon type="book" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="请输入书籍名称"
              />,
            )}
          </Form.Item>
          <Form.Item label="作者">
            {getFieldDecorator('anthor', {
              rules: [{ required: true, message: '请输入作者名称!' }],
            })(
              <Input
                prefix={<Icon type="book" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="请输入作者名称"
              />,
            )}
          </Form.Item>
          <Form.Item label="书籍缩略图">
            {getFieldDecorator('anthor', {
              rules: [{ required: true, message: '请输入作者名称!' }],
            })(
              <Input
                prefix={<Icon type="book" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="请输入作者名称"
              />,
            )}
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit" className="login-form-button">
              提交书籍
            </Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

const AddBook = Form.create({ name: 'normal_login' })(AddBookContainer);

export default AddBook