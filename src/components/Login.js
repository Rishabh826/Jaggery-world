import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Login extends Component {
  render() {
    return (
      <div className='bg-dark'>
      <div className="p-3 mb-2 bg-warning text-dark" style={{height:'80vh'}}>
      <div className="d-flex justify-content-center">
        <div className="row justify-content-center" style={{ width: '900px', marginTop: '20px'}}>
          <div className="col-md-6">
            <div className="login-container" id="loginContainer">
              <div className="card" id="card"  style={{backgroundImage:'url(https://images.unsplash.com/photo-1599209692026-1d9e12b923bc?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YW1hem9uJTIwZm9yZXN0fGVufDB8fDB8fHww)'}}>
                <div className="login-title bg-primary"><strong>Login</strong></div>
             <hr />
                <form>
                  <div className="form-group mx-3">
                    <input type="text" className="form-control login-input" placeholder="Username or e-mail"  />
                  </div>
                  <div className="form-group mx-3 my-3">
                    <input type="password" className="form-control login-input" placeholder="Password"  />
                  </div>
                  <button type="submit" className="btn btn-primary login-button mx-3 my-2 " style={{width:'390px'}}>Continue</button>
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
   <footer className="bg-dark text-light text-center py-3">
          <p>&copy; 2024 Juggery world. All Rights Reserved.</p>
        </footer>
</div>

    );
  }
}
