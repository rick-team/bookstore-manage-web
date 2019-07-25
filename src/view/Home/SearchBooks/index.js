import React , { Component } from 'react'
import { Input, Select } from 'antd'

const { Search } = Input
const { Option } = Select;

class SearchBooks extends Component {

  goHome= () => {
    this.props.history.push('/home')
  }

  get selectBefore() {
    return (
      <Select defaultValue="books" style={{ width: 80 }}>
        <Option value="books">书名</Option>
        <Option value="anthor">作者</Option>
      </Select>
    )
  }

  render() {
    return (
      <div>
        <Search
          placeholder="输入书籍名称"
          enterButton="Search"
          size="large"
          addonBefore={this.selectBefore} 
          onSearch={value => console.log(value)}
        />
      </div>
    )
  }
}

export default SearchBooks