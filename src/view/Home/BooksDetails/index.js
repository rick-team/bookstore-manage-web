import React , { Component } from 'react'

class BooksDetails extends Component {
  constructor(props) {
    super(props)
    console.log(this.props)
    this.state= {
      //id: this.props.match.params.id
    }
  }
  render() {
    return (
      <div>书籍详情{this.props.match.params.id}</div>
    )
  }
}

export default BooksDetails