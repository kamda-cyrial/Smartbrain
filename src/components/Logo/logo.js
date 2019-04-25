import React from 'react';
import Tilt from 'react-tilt';
import './logo.css';
import brain from './logo.png'
const logo = () => {
  return(
       <div className='ma4 mt0'>
       <Tilt className="Tilt ma4 br2 shadow-2  " options={{ max : 50 }} style={{ height: 150, width: 150 }} >
 <div className="Tilt-inner pa4"><img style={{paddingTop: '5px', width:'90%'}} src={brain} alt='smartbrainslogo'/></div>
</Tilt>
       </div>
  );
}

export default logo;