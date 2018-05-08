import React, { Component } from 'react';



class OilLists extends Component{
      oils = [ { name: "Coconut"}, 
    { name: "Almond"},
    { name: "Lavendar"},
    { name: "Vegetable"},
    { name: "Olive"}];
 
   render() {
    const listOils = this.oils.map((oil) =>
        <li class="collection-item" key={oil.name}>{oil.name}</li> 
    );
    return (
      <div className="row">
          <div className="col s12 m12">
              <div className="card">
                  <div className="card-content">
                  <span class="card-title">Oil List</span>
                          <ul class="collection">
                              {listOils}
                          </ul>
                      
                  </div>
              </div>
          </div>
      </div>
    );
      
      
    
   }
}








export default OilLists;