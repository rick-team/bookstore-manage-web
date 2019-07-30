import React , { Component } from 'react'
import { Form, Input, Icon, Button, Upload } from 'antd'

const { TextArea } = Input

class AddBookContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      loading: false,
      imageUrl: ''
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

  thumbnailUpload = info => {
    console.log(info)
    var reader = new FileReader();
    reader.readAsDataURL(info.file);
    reader.onload = data => {
      console.log(reader.result)
      this.setState({
        imageUrl: reader.result
      })
    }
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

    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">Upload</div>
      </div>
    )

    const { imageUrl } = this.state

    console.log(imageUrl)

    return (
      <div>
        <Form onSubmit={this.submitForm} style={{width: 800}} labelCol={{ span: 5 }} wrapperCol={{ span: 12 }}>
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
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="请输入作者名称"
              />,
            )}
          </Form.Item>
          <Form.Item label="书籍缩略图">
            <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              customRequest={this.thumbnailUpload}
            >
              {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
            </Upload>
          </Form.Item>
          <Form.Item label="书籍数量">
            {getFieldDecorator('num', {
              rules: [{ required: true, message: '请输入书籍数量!' }],
            })(
              <Input
                prefix={<Icon type="number" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="请输入书籍数量"
              />,
            )}
          </Form.Item>
          <Form.Item label="租赁价格">
            {getFieldDecorator('price', {
              rules: [{ required: true, message: '请输入价格!' }],
            })(
              <Input
                prefix={<Icon type="money-collect" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="请输入价格"
              />,
            )}
          </Form.Item>
          <Form.Item label="租赁积分/次">
            {getFieldDecorator('sketch', {
              rules: [{ required: true, message: '请输入租赁积分!' }],
            })(
              <Input
                prefix={<Icon type="sketch" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="请输入租赁积分"
              />,
            )}
          </Form.Item>
          <Form.Item label="作品简介">
            {getFieldDecorator('sketch', {
              rules: [{ required: true, message: '请输入作品简介!' }],
            })(
              <TextArea
                placeholder="请输入作品简介"
                autosize={{ minRows: 2, maxRows: 6 }}
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