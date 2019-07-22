import React , { Component } from 'react'

class Home extends Component {
  constructor(props) {
    super(props)
  }
  
  componentWillMount(){
    console.log('componentWillMount')
    this.props.history.push('/login')
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