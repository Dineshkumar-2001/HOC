import React, { Component } from 'react'
import { withRouter } from './HOC'

// const Updateval = withRouter(Home)
class Home extends Component {
    constructor(props){
        super(props);
        this.state={
           count:[this.props.router.location.state]
        }
    }
  render() {
       console.log('home',this.props.router.location.state)
       console.log('propssss',this.props)
    return (
      <div>Home
        {/* <Updateval/> */}
        {
            this.state.count.map((val)=>{
                return(
                    <div>
                        <h1>{val}</h1>
                    </div>
                )
            })
        }
      </div>
      
    )
  }
}

export default withRouter(Home)
