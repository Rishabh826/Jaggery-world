import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Login extends Component {
  render() {
    return (
      <div className='bg-dark' style={{backgroundImage:'url(https://images.unsplash.com/photo-1618774491942-b6d0c9717426?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="p-3 mb-2 text-dark" style={{height:'91vh',borderColor:'white'}}>
          <div className="d-flex justify-content-center">
            <div className="row justify-content-center" style={{ width: '900px', marginTop: '20px'}}>
              <div className="col-md-6">
                <div className="login-container" id="loginContainer">
                  <div className="card bg-transparent" id="card" >
                    <div className="login-title " style={{color:'black',backgroundColor:'transparent'}}><strong>Login</strong></div>
                    <hr />
                    <form>
                      <div className="form-group mx-3" >
                        <input type="text" className="form-control login-input" placeholder="Username or e-mail"  />
                      </div>
                      <div className="form-group mx-3 my-3">
                        <input type="password" className="form-control login-input" placeholder="Password"  />
                      </div>
                      <button type="submit" className="btn btn-primary login-button mx-3 my-2 " style={{width:'390px',color:'black',backgroundColor:'white',borderRadius:'100px'}}><strong>Continue</strong></button>
                      <hr />
                      <p style={{color:'white' , marginLeft:'15px'}}>By Continue, you agree to jaggery world's <strong>Terms and  conditions</strong></p>
                      <div className="d-flex justify-content-center" style={{color:'white'}}>
                        <p>New to Jaggery world?</p>
                      </div>
                      <Link className="d-flex justify-content-center" to="/Signup">
                        <button type="submit" className="btn btn-primary login-button mx-3 my-2 " style={{width:'390px'}}>Create your new Jaggery account</button>
                      </Link>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
