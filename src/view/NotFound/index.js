import React , { Component } from 'react'
import { Result, Button } from 'antd'

class NotFound extends Component {

  goHome= () => {
    this.props.history.push('/home')
  }

  render() {
    return (
      <Result
        status="404"
        title="404"
        subTitle="页面没找到."
        extra={<Button type="primary" onClick={ this.goHome }>返回首页</Button>}
      />
    )
  }
}

export default NotFound