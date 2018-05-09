import React, { Component } from 'react';



class Welcome extends Component {
  render() {
    return (
    <div className="row">
      <div className="col s12 m12">     
         <div className="card">
              <div className="card-content">
                <span className="card-title">Oil Details</span>
                  <div className="row">
                      <form className="col s12">
                          <div className="row">
                              <div className="input-field col s12">
                                  <input placeholder="Placeholder" id="oil_name" type="text" className="validate" />
                                  <label htmlFor="oil_name">Oil Name</label>
                              </div>
                              <div className="input-field col s12">
                                  <input id="oil_desc" type="text" className="validate" />
                                  <label htmlFor="oil_desc">Oil Description</label>
                              </div>
                          </div>
                          <div className="row">
                              <div className="input-field col s12 ">
                                  <div className="switch">
                                      <label>
                                          Blend
                                          <input type="checkbox" />
                                          <span className="lever"></span>
                                          Single
                                      </label>
                                  </div>
                              </div>
                          </div>
  
  
                          <div className="row">
                              <div className="input-field col s12">
                                  <div className="file-field input-field">
                                      <div className="btn">
                                          <span>File</span>
                                          <input type="file" multiple/>
                                      </div>
                                      <div className="file-path-wrapper">
                                          <input className="file-path validate" type="text" placeholder="Upload one or more files" />
                                      </div>
                                  </div>
  
                              </div>
                          </div>
  
                          <div className="row">
                              <div className="input-field col s12">
                                  <label htmlFor="blending-dt">Blending Details</label>
                              </div>
                              <div className="input-field col s6">
                                  <input id="oil1" type="text" className="validate" />
                                  <label htmlFor="oil1">Oil 1</label>
                              </div>
                              <div className="input-field col s6">
                                  <input id="qty1" type="text" className="validate" />
                                  <label htmlFor="qty1">ml</label>
                              </div>
                              <div className="input-field col s6">
                                  <input id="oil2" type="text" className="validate" />
                                  <label htmlFor="oil2">Oil 2</label>
                              </div>
  
                              <div className="input-field col s6">
                                  <input id="qty2" type="text" className="validate" />
                                  <label htmlFor="qty2">ml</label>
                              </div>
                              <div className="input-field col s6">
                                  <input id="oil3" type="text" className="validate" />
                                  <label htmlFor="oil3">Oil 3</label>
                              </div>
  
                              <div className="input-field col s6">
                                  <input id="qty3" type="text" className="validate" />
                                  <label htmlFor="qty3">ml</label>
                              </div>
  
                          </div>
                          <div className="row">
                              <div className="input-field col s12">
                                  <input id="other-dtls" type="text" className="validate" />
                                  <label htmlFor="other-dtls">Other Details</label>
                              </div>
                          </div>
                          <div className="row">
                              <div className="input-field col s12">
                                  <label htmlFor="methods">Methods:</label>
                              </div>
                          </div>
                          <div className="row">
                              <div className="input-field col s12">
                                  <input id="mthd-dtls" type="text" className="validate" />
                                  <label htmlFor="methd-dtls">Method</label>
                              </div>
                          </div>
                          <div className="row">
                              <div className="input-field col s12">
                                  <input id="dtls" type="text" className="validate" />
                                  <label htmlFor="dtls">Other Details</label>
                              </div>
                          </div>
  
                      </form>
                    
                  </div>
  
              </div>
              <div className="card-action">
                  <div className="input-field col m12">
                      <a href="#">Submit</a>
                   </div>
               </div>
          </div>
      
  </div>
  </div>
    );
  }
}

export default Welcome;