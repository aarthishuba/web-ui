import React, { Component } from 'react';



class APIList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            oilList: [],
        };
    }
    componentDidMount() { 
        fetch('http://localhost:8080/oilList').then(res=>res.json()).then(res=>{
           this.setState({
               oilList:res.result
           })
        })
    }
 
    render() {
       const {oilList}=this.state
        return(
            <div>
          <h4>{this.props.name}</h4>
            <ul className="collection">
                { oilList && oilList.length>0 &&  oilList.map(oil=>{

                  return(  <li className="collection-item">
                  {oil.name}
                  
                  </li>)
                })

                }

            </ul>
          </div>
        )  
    }
}

export default APIList;
