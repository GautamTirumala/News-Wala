import React, { Component } from 'react'

export default class Footer extends Component {
    year=new Date().getFullYear()
  render() {
    return (
      <div className='footer bg-light center'>Copyright {this.year}</div>
    )
  }
}
