import React, { Component } from 'react'

export default class Signup extends Component {
  render() {
    return (
        <div style={{justifyContent:'center'}}>
      <div className="p-3 mb-2 bg-info text-white " style={{height:'79vh'}}>
        <div className="col-md-6 my-10" >
            <div className="card rotate" id="cardBack"  style={{backgroundImage:'url(https://c4.wallpaperflare.com/wallpaper/67/573/246/waterfall-amazon-nature-water-wallpaper-preview.jpg)'}}>
              <div className="login-title bg-success "><strong> Sign Up</strong></div>
              <hr />
              <form>
                <div className="form-group mx-3" style={{color:'white'}}>
                  <label><strong>Full name</strong></label>
                  <input type="text" className="form-control login-input" placeholder="Full Name" required />
                </div>
                <div className="form-group mx-3 my-1"  style={{color:'white'}}>
                  <label> <strong>Username</strong></label>
                  <input type="text" className="form-control login-input" placeholder="Username" required />
                </div>
                <div className="form-group mx-3 my-1"  style={{color:'white'}}>
                  <label><strong>Phone Number</strong></label>
                  <input
                    type="tel"
                    className="form-control login-input"
                    placeholder="Enter phone number"
                    pattern="[0-9]{10}"
                    title="Please enter a valid 10-digit phone number"
                    required
                  />

                </div>
                <div className="form-group mx-3 my-1"  style={{color:'white'}}>
                  <label><strong>E-mail address</strong></label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                  <small id="emailHelp"  className="form-text text-muted" >We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group mx-3 my-1"  style={{color:'white'}}>
                  <label><strong>Choose Password</strong></label>
                  <input type="password" className="form-control login-input" placeholder="Password" required />
                </div>
                <div className="form-group mx-3 my-1"  style={{color:'white'}}>
                  <label><strong>Re-enter password</strong></label>
                  <input type="password" className="form-control login-input" placeholder="Same as password" required />
                </div>
                <button type="submit" className="btn btn-success login-button mx-3 my-2">Sign Up</button>
              </form>
            </div>
            
          </div>
         
      </div>
      
      <footer className="bg-dark text-light text-center py-3">
          <p>&copy; 2024 Juggery world. All Rights Reserved.</p>
        </footer>
      </div>
    )
  }
}
