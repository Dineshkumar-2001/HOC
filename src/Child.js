import React, { Component } from 'react'
import { Link, Navigate } from "react-router-dom";
import { withRouter } from './HOC';
import Parent from './Parent';

 class Child extends Component {
    constructor(props){
        super(props);
        this.state={
            name: "ragu",
        }
    }
  render() {
    // console.log('ll',this.props)
    return (
      <div>
       
         <div>
         <Link to='/Parent' state={this.state.name}>
            Child_1
            </Link>

            {/* <Parent value={this.state.name}/> */}
            </div>
      </div>
    )
  }
}

export default withRouter(Child)