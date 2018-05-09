import React, { Component } from 'react';



class APIList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            oilList: [],
        };
    }
    componentDidMount() { 
        fetch('http://localhost:8080/oilList',{
    
            mode: 'no-cors', // no-cors, cors, *same-origin
            
          }).then(function(res) {
              console.log("response >>>",res.body);
            return res;
        })
          
          

    }
 
    render() {
        return(
            <div>
          <h4>{this.props.name}</h4>
<ul>list</ul>
</div>
        )  
    }
}

export default APIList;
