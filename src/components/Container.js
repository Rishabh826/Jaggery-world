import React, { Component } from 'react'

export default class Container extends Component {
  render() {
    return (
      <div>
      <div className="d-flex flex-column bd-highlight mb-3">
      <div className="d-inline-flex p-2 bd-highlight">
         <div className="p-2 bd-highlight"  style={{backgroundImage:'url(https://pixewall.com/wp-content/uploads/2023/04/Night-Sky-Clouds-Sunset-Scenery-4k-Wallpapers-scaled.jpg)',backgroundRepeat:'no-repeat',  height:'90vh',width:'100vw'}}>

</div>
</div>
 
  <div className="p-2 bd-highlight" style={{backgroundImage:'url(https://wallpapercave.com/wp/wp3469892.jpg)', height:'90vh'}}></div>
  <div className="p-2 bd-highlight" style={{backgroundImage:'url(https://wallpaperaccess.com/full/25557.jpg)', height:'90vh'}}></div>
  <div className="p-2 bd-highlight" style={{backgroundImage:'url(https://wallpapercave.com/wp/wp3469892.jpg)', height:'90vh'}}>
  <div className="d-flex justify-content-center" style={{color:'white', backgroundColor:'black'}}>
    <h1>Founders of jaggery world</h1>
  
  </div>
  <hr />
  <div className="d-flex justify-content-around">
    <div className="card mx-2" style={{width:'18rem'}}>
      <img src="..." className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="/" className="btn btn-success">Profile</a>
      </div>
    </div>
    <div className="card mx-2" style={{width:'18rem'}}>
      <img src="..." className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="/" className="btn btn-success">Profile</a>
      </div>
    </div>
    <div className="card mx-2" style={{width:'18rem'}}>
      <img src="..." className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="/" className="btn btn-success">Profile</a>
      </div>
    </div>
  </div>
</div>

  <div className="p-2 bd-highlight" style={{backgroundImage:'url(https://wallpapers.com/images/featured/4k-nature-ztbad1qj8vdjqe0p.jpg)', height:'90vh'}}>
    
  </div>
  <footer className="footer mt-auto py-3 bg-dark text-white">
      <div className="container text-center">
        <span className="text-muted">This is the footer section</span>
      </div>
    </footer>
</div>

      </div>
    )
  }
}

