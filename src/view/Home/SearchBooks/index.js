import React , { Component } from 'react'
import { Select, Table, Input } from 'antd'

const { Search } = Input
const { Option } = Select;

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <span className='fontActive'>{text}</span>,
  },
  {
    title: 'Anthor',
    dataIndex: 'anthor',
    key: 'anthor',
  },
  {
    title: 'LeasePrice',
    key: 'leasePrice',
    dataIndex: 'leasePrice',
  },
  {
    title: 'LeaseTime',
    key: 'leaseTime',
    dataIndex: 'leaseTime',
  },
];

const bookList = [{
  key: '1',
  name: '挪威的森林',
  anthor: '春上',
  leasePrice: 20,
  leaseTime: '5',
},{
  key: '2',
  name: '绣春刀',
  anthor: '唐朝大诗人',
  leasePrice: 20,
  leaseTime: '5',
}]

class SearchBooks extends Component {
  constructor(props) {
    super(props)
    this.state = {
      columns: [...columns,{
        title: 'Action',
        key: 'action',
        render: (text) => (
          <span className='fontActive' onClick={() => {this.tableAction(text)}}>租赁</span>
        ),
      }],
      bookList: bookList,
      type: 'books',
    }
  }

  goHome= () => {
    this.props.history.push('/home')
  }

  changeSearchBookType= value => {
    console.log(value)
    this.setState={
      type: value
    }
  }

  searchBookSubmit= value => {
    console.log(value)
  }

  changeBookPage= page => {
    console.log(page)
  }

  tableAction= (text)=> {
    console.log(text)
  }

  get selectBefore() {
    return (
      <Select defaultValue="books" className='inputSelect' style={{ width: 80 }} onChange={this.changeSearchBookType}>
        <Option value="books">书 名</Option>
        <Option value="anthor">作 者</Option>
        <Option value="type">类 别</Option>
      </Select>
    )
  }

  render() {
    return (
      <div>
        <Search
          className='searchInput'
          placeholder="输入搜索内容"
          enterButton="Search"
          size="large"
          addonBefore={this.selectBefore} 
          onSearch={this.searchBookSubmit}
        />
        <Table columns={this.state.columns} pagination={{
          defaultCurrent:1,
          total:50,
          onChange: this.changeBookPage
        }} dataSource={this.state.bookList} />,  
      </div>
    )
  }
}

export default SearchBooks