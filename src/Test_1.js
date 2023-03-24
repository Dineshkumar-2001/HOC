import React, { Component } from 'react'
import Test_2 from './Test_2';

export default class Test_1 extends Component {
    constructor(){
        super();
        this.state={
            name:'',
            amount:''
        }
    }
  render() {
    return (
      <div>
        <div>
            <lable>NAME :</lable>
            <input onChange={(e)=>this.setState({
                name:e.target.value
            })}/>
        </div>
        <div>
            <lable>AMOUNT :</lable>
            <input onChange={(e)=>this.setState({
                amount:e.target.value
            })}/>
        </div>
        <div>
            <Test_2 value = {this.state}/>
        </div>
      </div>
    )
  }
}
