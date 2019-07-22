import React , { Component } from 'react'
import { Menu, Icon, Avatar, Button  } from 'antd'
import store from '../store'
import logo from '../assets/img/logo.jpg'

const { SubMenu } = Menu

class Home extends Component {
  constructor(props) {
    super(props)
  }
  
  componentWillMount(){
    console.log(store.getState().isLogin)
    if(!store.getState().isLogin) {
      this.props.history.push('/login')
    }
  }

  render() {
    return (
      <div className='home'>
        <Header />
        <HomeNav />
      </div>
    )
  }
}

class Header extends Component {
  constructor (props) {
    super(props);
    this.state= {
      hours: 0
    }
  }

  componentWillMount() {
    const time= new Date();
    const hours= time.getHours()
    console.log(hours)
    this.setState({
      hours: hours
    })
  }

  get nowTime() {
    const houer = this.state.hours
    if(houer > 19 || houer < 6) {
      return '晚上'
    }

    if(houer > 14) {
      return '下午'
    }

    if(houer > 12) {
      return '中午'
    }

    if(houer > 9) {
      return '上午'
    }

    if(houer > 6) {
      return '早上'
    }
  }

  render() {
    return (
      <div className='homeHeader'>
        <Avatar size={40} src={logo} />
        <span className='title'>小小甜书店后台管理系统</span>
        <div className='Admin'>
          <span>{this.nowTime + '好,'}admin</span>
          <Button>退出登陆</Button>
        </div>
      </div>
    )
  }
}

class HomeNav extends Component {
  render() {
    return (
      <Menu
        onClick={this.handleClick}
        style={{ width: 256, height: 'calc(100vh - 51px'}}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <SubMenu
          key="sub1"
          title={
            <span>
              <Icon type="book" />
              <span>书籍管理</span>
            </span>
          }
        >
          <Menu.Item key="1">书籍查询</Menu.Item>
          <Menu.Item key="2">添加书籍</Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub2"
          title={
            <span>
              <Icon type="user" />
              <span>人员管理</span>
            </span>
          }
        >
          <Menu.Item key="5">人员查询</Menu.Item>
          <Menu.Item key="6">添加用户</Menu.Item>
        </SubMenu>
      </Menu>
    )
  }
}

export default Home