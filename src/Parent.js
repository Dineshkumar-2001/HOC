import React, { Component } from "react";
import Home from "./Home";
import { withRouter } from "./HOC";
import { Link, Navigate } from "react-router-dom";

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: [''],
      username:[]
    };
  }

  handleClick() {
    const navigate = this.props.router.navigate;
    console.log("navigate", this.props);
    navigate("/Home", { state: this.state.name });
  }
  // handleClick_1 = () =>{
  //   const user = {
  //     name:this.state.name
  //   }
  //   this.setState({
  //     username:[...this.state.username,user],
       
  //   })
  // }
  render() {
    console.log('user',this.state.username)
    console.log('PROPS',this.props)
    return (
      <div>
        <div>
        
          <label>NAME :</label>
          <input value={this.state.name}  type='text'
           onChange={(e)=>{
            this.setState({
              name:e.target.value
            })
          }}
          />
          <Link to="/Home" state={this.state.name}>
          <button onClick={this.handleClick_1}>Click</button>
          </Link>
        </div>
        {/* <Link to="/Home" state={this.state.name}>
          <button
            onClick={() => {
              this.handleClick_1();
            }}
          >
            CLICK
          </button>
        </Link> */}
      </div>
    );
  }
}

export default withRouter(Parent);
