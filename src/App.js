import React , { Component } from 'react'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'

import Home from '@/view/Home'
import { mainRouter } from '@/routes'
import store from '@/store'

class App extends Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    return (
      <Router>
        <Switch>

          {
            mainRouter.map(route=> {
              console.log(route)
              return <Route key={route.pathName} path={route.pathName} component={route.component} />
            })
          }
          <Route render={(homeProps)=> {
            const loginState = store.getState().isLogin
            console.log(loginState)
            if(!loginState) {
              homeProps.history.push('/login')
              return null
            }
            return <Home { ...homeProps } />
          }} path='/' />
         
          <Redirect from='/' exact to='/home'/>
          <Redirect  to='/404'/>
        </Switch>
      </Router>
    )
  }
}

export default App