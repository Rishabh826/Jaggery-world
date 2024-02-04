import React from 'react';
import Backgound from './Background.avif'; // Replace with the actual path to your image

const YourComponent = () => {
  const containerStyle = {
    backgroundImage: `url(${Backgound})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '90vh', 
    width: '100%',   
  };

  return (
    <div className="container-fluid" style={containerStyle}>
    
    </div>
  );
};

export default YourComponent;
