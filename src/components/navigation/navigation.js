import React from 'react';

const navigation = ({reinit}) => {
  return(
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
            <p className="f3 link dim black underline pa3 pointer" onClick={()=>{reinit()}}>Sign-OUT</p>
        </nav>
  );
}

export default navigation;