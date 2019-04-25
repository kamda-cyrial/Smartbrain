import React from "react";
import './facerecognition.css';

const facerecognition = ({imageurl,box,viewport}) =>{
    const leg = viewport;
    console.log(box);

    if(box.length===0){
        return(
            <div className="center ma la tc">
            <div className=" mt2 absolute center  finalme tc" style={{left:leg}}>
            <img id="inputimage" src={imageurl} alt={'trial term'} className='tc'  width="500px" height="auto" />
            <div className='bounding-box'>No face has been detected</div>
            </div>
            </div> 
        );
    }
    else{

    return(
        <div className="center ma la tc">
        <div className=" mt2 absolute center  finalme tc" style={{left:leg}}>
        <img id="inputimage" src={imageurl} alt={'trial term'} className='tc'  width="500px" height="auto" /> 
        <div className='bounding-box' style={{top:box[0].toprow, right:box[0].rightcol, bottom:box[0].bottomrow, left:box[0].leftcol}}></div>
        </div>
        
        </div> 
    );
}
}
export default facerecognition;
