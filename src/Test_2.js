import React, { Component } from 'react'

export default class Test_2 extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }
  render() {
    console.log('mm',this.props.value)
    return (
      <div>
        mm
        <div>
          {this.props.value.amount}
        </div>
      </div>
    )
  }
}
