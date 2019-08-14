import React , { Component } from 'react'
import { Menu, Icon, Avatar, Button } from 'antd'
import { Link, withRouter, Route, Redirect, Switch } from 'react-router-dom'
import store from '@/store'
import logo from '@/assets/img/logo.jpg'

import { homeRouter } from '@/routes'

const { SubMenu } = Menu

class Home extends Component {
  constructor(props) {
    super(props)
    this.state= {

    }
  }

  render() {
    const HeaderComponent = withRouter(Header)
    return (
      <div className='home'>
        <HeaderComponent />
        <div className='content'>
          <aside className='content-left'>
            <HomeNav />
          </aside>
          <section className='content-right'>
            <Switch>
              {
                homeRouter.map(route=> <Route key={route.pathName} path={route.pathName} component={route.component} />)
              }
              <Redirect from='/home' exact to='/home/SearchBooks'/>
              <Redirect to='/404'/>
            </Switch>
          </section>
        </div>
      </div>
    )
  }
}

class Header extends Component {
  constructor (props) {
    super(props)
    this.state= {
      hours: 0
    }
    this.quit = this.quit.bind(this)
  }

  componentWillMount() {
    const time= new Date()
    const hours= time.getHours()
    this.setState({
      hours: hours
    })
  }

  get nowTime() {
    const houer = this.state.hours
    return (houer > 19 || houer < 6) ?'晚上': houer > 14?'下午': houer > 12?'中午': houer > 9?'上午': '早上'
  }

  quit() {
    const action = {
      type: 'loginChange',
      value: false
    } 
    store.dispatch(action)
    this.props.history.push('/login')
  }

  render() {
    return (
      <div className='homeHeader'>
        <Avatar size={40} src={logo} />
        <span className='title'>小小甜书店后台管理系统</span>
        <div className='Admin'>
          <span>{this.nowTime + '好, '}admin</span>
          <Button onClick={this.quit}>退出登陆</Button>
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
        style={{ width: 256, height: 'calc(100vh - 51px)'}}
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
          <Menu.Item key="1"><Link to='/home/SearchBooks'>书籍查询</Link></Menu.Item>
          <Menu.Item key="2"><Link to='/home/AddBook'>添加书籍</Link></Menu.Item>
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
          <Menu.Item key="3">人员查询</Menu.Item>
          <Menu.Item key="4">添加用户</Menu.Item>
        </SubMenu>
      </Menu>
    )
  }
}

export default Home