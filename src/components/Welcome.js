import React, { Component } from 'react';



class Welcome extends Component {
  render() {
    return (
    <div className="row">
      <div className="col s12 m12">     
         <div className="card">
              <div className="card-content">
                <span class="card-title">Oil Details</span>
                  <div className="row">
                      <form className="col s12">
                          <div className="row">
                              <div className="input-field col s12">
                                  <input placeholder="Placeholder" id="oil_name" type="text" className="validate" />
                                  <label for="oil_name">Oil Name</label>
                              </div>
                              <div className="input-field col s12">
                                  <input id="oil_desc" type="text" className="validate" />
                                  <label for="oil_desc">Oil Description</label>
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
                                  <div class="file-field input-field">
                                      <div class="btn">
                                          <span>File</span>
                                          <input type="file" multiple/>
                                      </div>
                                      <div class="file-path-wrapper">
                                          <input class="file-path validate" type="text" placeholder="Upload one or more files" />
                                      </div>
                                  </div>
  
                              </div>
                          </div>
  
                          <div className="row">
                              <div className="input-field col s12">
                                  <label for="blending-dt">Blending Details</label>
                              </div>
                              <div className="input-field col s6">
                                  <input id="oil1" type="text" className="validate" />
                                  <label for="oil1">Oil 1</label>
                              </div>
                              <div className="input-field col s6">
                                  <input id="qty1" type="text" className="validate" />
                                  <label for="qty1">ml</label>
                              </div>
                              <div className="input-field col s6">
                                  <input id="oil2" type="text" className="validate" />
                                  <label for="oil2">Oil 2</label>
                              </div>
  
                              <div className="input-field col s6">
                                  <input id="qty2" type="text" className="validate" />
                                  <label for="qty2">ml</label>
                              </div>
                              <div className="input-field col s6">
                                  <input id="oil3" type="text" className="validate" />
                                  <label for="oil3">Oil 3</label>
                              </div>
  
                              <div className="input-field col s6">
                                  <input id="qty3" type="text" className="validate" />
                                  <label for="qty3">ml</label>
                              </div>
  
                          </div>
                          <div className="row">
                              <div className="input-field col s12">
                                  <input id="other-dtls" type="text" className="validate" />
                                  <label for="other-dtls">Other Details</label>
                              </div>
                          </div>
                          <div className="row">
                              <div className="input-field col s12">
                                  <label for="methods">Methods:</label>
                              </div>
                          </div>
                          <div className="row">
                              <div className="input-field col s12">
                                  <input id="mthd-dtls" type="text" className="validate" />
                                  <label for="methd-dtls">Method</label>
                              </div>
                          </div>
                          <div className="row">
                              <div className="input-field col s12">
                                  <input id="dtls" type="text" className="validate" />
                                  <label for="dtls">Other Details</label>
                              </div>
                          </div>
  
                      </form>
                    
                  </div>
  
              </div>
              <div class="card-action">
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