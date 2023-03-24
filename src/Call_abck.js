import React, { Component } from 'react'

export default class Call_abck extends Component {
    constructor(){
        super();
        this.state={

        }
    }
    done(){
        console.log('DOne')
    }
    click_1 = () =>{
        this.done()
    }
  render() {
    return (
      <div>
        <h1>DONE</h1>
        <button onClick={this.click_1}>CLICK</button>
      </div>
    )
  }
}
