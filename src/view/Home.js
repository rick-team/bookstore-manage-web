import React , { Component } from 'react'
import store from '../store'

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
        home
      </div>
    )
  }
}

export default Home