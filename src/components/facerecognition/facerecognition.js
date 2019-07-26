import React from "react";
import './facerecognition.css';

const facerecognition = ({imageurl,box,viewport}) =>{
    const leg = viewport;
    console.log("finalbox",box);

    if(box.length===1){
        return(
            <div className="center ma la tc">
            <div className=" mt2 absolute center  finalme tc" style={{left:leg}}>
            <img id="inputimage" src={imageurl} alt={'trial term'} className='tc'  width="500px" height="auto" />
            <div className='bounding-box'>No face has been detected</div>
            </div>
            </div> 
        );
    }
    else if(box.length===2){

    return(
        <div className="center ma la tc">
        <div className=" mt2 absolute center  finalme tc" style={{left:leg}}>
        <img id="inputimage" src={imageurl} alt={'trial term'} className='tc'  width="500px" height="auto" /> 
        <div className='bounding-box' style={{top:box[0].toprow, right:box[0].rightcol, bottom:box[0].bottomrow, left:box[0].leftcol}}></div>
        <div className='bounding-box' style={{top:box[1].toprow, right:box[1].rightcol, bottom:box[1].bottomrow, left:box[1].leftcol}}></div>
        </div>
        
        </div> 
    );
}
else if(box.length===3){

    return(
        <div className="center ma la tc">
        <div className=" mt2 absolute center  finalme tc" style={{left:leg}}>
        <img id="inputimage" src={imageurl} alt={'trial term'} className='tc'  width="500px" height="auto" /> 
        <div className='bounding-box' style={{top:box[0].toprow, right:box[0].rightcol, bottom:box[0].bottomrow, left:box[0].leftcol}}></div>
        <div className='bounding-box' style={{top:box[1].toprow, right:box[1].rightcol, bottom:box[1].bottomrow, left:box[1].leftcol}}></div>
        <div className='bounding-box' style={{top:box[2].toprow, right:box[2].rightcol, bottom:box[2].bottomrow, left:box[2].leftcol}}></div>
        </div>
        
        </div> 
    );
}

else if(box.length===4){

    return(
        <div className="center ma la tc">
        <div className=" mt2 absolute center  finalme tc" style={{left:leg}}>
        <img id="inputimage" src={imageurl} alt={'trial term'} className='tc'  width="500px" height="auto" /> 
        <div className='bounding-box' style={{top:box[0].toprow, right:box[0].rightcol, bottom:box[0].bottomrow, left:box[0].leftcol}}></div>
        <div className='bounding-box' style={{top:box[1].toprow, right:box[1].rightcol, bottom:box[1].bottomrow, left:box[1].leftcol}}></div>
        <div className='bounding-box' style={{top:box[2].toprow, right:box[2].rightcol, bottom:box[2].bottomrow, left:box[2].leftcol}}></div>
        <div className='bounding-box' style={{top:box[3].toprow, right:box[3].rightcol, bottom:box[3].bottomrow, left:box[3].leftcol}}></div>
        </div>
        
        </div> 
    );
}

else if(box.length===5){

    return(
        <div className="center ma la tc">
        <div className=" mt2 absolute center  finalme tc" style={{left:leg}}>
        <img id="inputimage" src={imageurl} alt={'trial term'} className='tc'  width="500px" height="auto" /> 
        <div className='bounding-box' style={{top:box[0].toprow, right:box[0].rightcol, bottom:box[0].bottomrow, left:box[0].leftcol}}></div>
        <div className='bounding-box' style={{top:box[1].toprow, right:box[1].rightcol, bottom:box[1].bottomrow, left:box[1].leftcol}}></div>
        <div className='bounding-box' style={{top:box[2].toprow, right:box[2].rightcol, bottom:box[2].bottomrow, left:box[2].leftcol}}></div>
        <div className='bounding-box' style={{top:box[3].toprow, right:box[3].rightcol, bottom:box[3].bottomrow, left:box[3].leftcol}}></div>
        <div className='bounding-box' style={{top:box[4].toprow, right:box[4].rightcol, bottom:box[4].bottomrow, left:box[4].leftcol}}></div>
        </div>
        
        </div> 
    );
}

else if(box.length===6){

    return(
        <div className="center ma la tc">
        <div className=" mt2 absolute center  finalme tc" style={{left:leg}}>
        <img id="inputimage" src={imageurl} alt={'trial term'} className='tc'  width="500px" height="auto" /> 
        <div className='bounding-box' style={{top:box[0].toprow, right:box[0].rightcol, bottom:box[0].bottomrow, left:box[0].leftcol}}></div>
        <div className='bounding-box' style={{top:box[1].toprow, right:box[1].rightcol, bottom:box[1].bottomrow, left:box[1].leftcol}}></div>
        <div className='bounding-box' style={{top:box[2].toprow, right:box[2].rightcol, bottom:box[2].bottomrow, left:box[2].leftcol}}></div>
        <div className='bounding-box' style={{top:box[3].toprow, right:box[3].rightcol, bottom:box[3].bottomrow, left:box[3].leftcol}}></div>
        <div className='bounding-box' style={{top:box[4].toprow, right:box[4].rightcol, bottom:box[4].bottomrow, left:box[4].leftcol}}></div>
        <div className='bounding-box' style={{top:box[5].toprow, right:box[5].rightcol, bottom:box[5].bottomrow, left:box[5].leftcol}}></div>
        </div>
        
        </div> 
    );
}

else if(box.length===7){

    return(
        <div className="center ma la tc">
        <div className=" mt2 absolute center  finalme tc" style={{left:leg}}>
        <img id="inputimage" src={imageurl} alt={'trial term'} className='tc'  width="500px" height="auto" /> 
        <div className='bounding-box' style={{top:box[0].toprow, right:box[0].rightcol, bottom:box[0].bottomrow, left:box[0].leftcol}}></div>
        <div className='bounding-box' style={{top:box[1].toprow, right:box[1].rightcol, bottom:box[1].bottomrow, left:box[1].leftcol}}></div>
        <div className='bounding-box' style={{top:box[2].toprow, right:box[2].rightcol, bottom:box[2].bottomrow, left:box[2].leftcol}}></div>
        <div className='bounding-box' style={{top:box[3].toprow, right:box[3].rightcol, bottom:box[3].bottomrow, left:box[3].leftcol}}></div>
        <div className='bounding-box' style={{top:box[4].toprow, right:box[4].rightcol, bottom:box[4].bottomrow, left:box[4].leftcol}}></div>
        <div className='bounding-box' style={{top:box[5].toprow, right:box[5].rightcol, bottom:box[5].bottomrow, left:box[5].leftcol}}></div>
        <div className='bounding-box' style={{top:box[6].toprow, right:box[6].rightcol, bottom:box[6].bottomrow, left:box[6].leftcol}}></div>
        
        </div>
        
        </div> 
    );
}
else if(box.length===8){

    return(
        <div className="center ma la tc">
        <div className=" mt2 absolute center  finalme tc" style={{left:leg}}>
        <img id="inputimage" src={imageurl} alt={'trial term'} className='tc'  width="500px" height="auto" /> 
        <div className='bounding-box' style={{top:box[0].toprow, right:box[0].rightcol, bottom:box[0].bottomrow, left:box[0].leftcol}}></div>
        <div className='bounding-box' style={{top:box[1].toprow, right:box[1].rightcol, bottom:box[1].bottomrow, left:box[1].leftcol}}></div>
        <div className='bounding-box' style={{top:box[2].toprow, right:box[2].rightcol, bottom:box[2].bottomrow, left:box[2].leftcol}}></div>
        <div className='bounding-box' style={{top:box[3].toprow, right:box[3].rightcol, bottom:box[3].bottomrow, left:box[3].leftcol}}></div>
        <div className='bounding-box' style={{top:box[4].toprow, right:box[4].rightcol, bottom:box[4].bottomrow, left:box[4].leftcol}}></div>
        <div className='bounding-box' style={{top:box[5].toprow, right:box[5].rightcol, bottom:box[5].bottomrow, left:box[5].leftcol}}></div>
        <div className='bounding-box' style={{top:box[6].toprow, right:box[6].rightcol, bottom:box[6].bottomrow, left:box[6].leftcol}}></div>
        <div className='bounding-box' style={{top:box[7].toprow, right:box[7].rightcol, bottom:box[7].bottomrow, left:box[7].leftcol}}></div>
        </div>
        
        </div> 
    );
}
else if(box.length===9){

    return(
        <div className="center ma la tc">
        <div className=" mt2 absolute center  finalme tc" style={{left:leg}}>
        <img id="inputimage" src={imageurl} alt={'trial term'} className='tc'  width="500px" height="auto" /> 
        <div className='bounding-box' style={{top:box[0].toprow, right:box[0].rightcol, bottom:box[0].bottomrow, left:box[0].leftcol}}></div>
        <div className='bounding-box' style={{top:box[1].toprow, right:box[1].rightcol, bottom:box[1].bottomrow, left:box[1].leftcol}}></div>
        <div className='bounding-box' style={{top:box[2].toprow, right:box[2].rightcol, bottom:box[2].bottomrow, left:box[2].leftcol}}></div>
        <div className='bounding-box' style={{top:box[3].toprow, right:box[3].rightcol, bottom:box[3].bottomrow, left:box[3].leftcol}}></div>
        <div className='bounding-box' style={{top:box[4].toprow, right:box[4].rightcol, bottom:box[4].bottomrow, left:box[4].leftcol}}></div>
        <div className='bounding-box' style={{top:box[5].toprow, right:box[5].rightcol, bottom:box[5].bottomrow, left:box[5].leftcol}}></div>
        <div className='bounding-box' style={{top:box[6].toprow, right:box[6].rightcol, bottom:box[6].bottomrow, left:box[6].leftcol}}></div>
        <div className='bounding-box' style={{top:box[7].toprow, right:box[7].rightcol, bottom:box[7].bottomrow, left:box[7].leftcol}}></div>
        <div className='bounding-box' style={{top:box[8].toprow, right:box[8].rightcol, bottom:box[8].bottomrow, left:box[8].leftcol}}></div>
        </div>
        
        </div> 
    );
}

else if(box.length===10){

    return(
        <div className="center ma la tc">
        <div className=" mt2 absolute center  finalme tc" style={{left:leg}}>
        <img id="inputimage" src={imageurl} alt={'trial term'} className='tc'  width="500px" height="auto" /> 
        <div className='bounding-box' style={{top:box[0].toprow, right:box[0].rightcol, bottom:box[0].bottomrow, left:box[0].leftcol}}></div>
        <div className='bounding-box' style={{top:box[1].toprow, right:box[1].rightcol, bottom:box[1].bottomrow, left:box[1].leftcol}}></div>
        <div className='bounding-box' style={{top:box[2].toprow, right:box[2].rightcol, bottom:box[2].bottomrow, left:box[2].leftcol}}></div>
        <div className='bounding-box' style={{top:box[3].toprow, right:box[3].rightcol, bottom:box[3].bottomrow, left:box[3].leftcol}}></div>
        <div className='bounding-box' style={{top:box[4].toprow, right:box[4].rightcol, bottom:box[4].bottomrow, left:box[4].leftcol}}></div>
        <div className='bounding-box' style={{top:box[5].toprow, right:box[5].rightcol, bottom:box[5].bottomrow, left:box[5].leftcol}}></div>
        <div className='bounding-box' style={{top:box[6].toprow, right:box[6].rightcol, bottom:box[6].bottomrow, left:box[6].leftcol}}></div>
        <div className='bounding-box' style={{top:box[7].toprow, right:box[7].rightcol, bottom:box[7].bottomrow, left:box[7].leftcol}}></div>
        <div className='bounding-box' style={{top:box[8].toprow, right:box[8].rightcol, bottom:box[8].bottomrow, left:box[8].leftcol}}></div>
        <div className='bounding-box' style={{top:box[9].toprow, right:box[9].rightcol, bottom:box[9].bottomrow, left:box[9].leftcol}}></div>
        </div>
        
        </div> 
    );
}
else if(box.length>10){

    return(
        <div className="center ma la tc">
        <div className=" mt2 absolute center  finalme tc" style={{left:leg}}>
        <img id="inputimage" src={imageurl} alt={'trial term'} className='tc'  width="500px" height="auto" /> 
        <div className='bounding-box' style={{top:box[0].toprow, right:box[0].rightcol, bottom:box[0].bottomrow, left:box[0].leftcol}}></div>
        <div className='bounding-box' style={{top:box[1].toprow, right:box[1].rightcol, bottom:box[1].bottomrow, left:box[1].leftcol}}></div>
        <div className='bounding-box' style={{top:box[2].toprow, right:box[2].rightcol, bottom:box[2].bottomrow, left:box[2].leftcol}}></div>
        <div className='bounding-box' style={{top:box[3].toprow, right:box[3].rightcol, bottom:box[3].bottomrow, left:box[3].leftcol}}></div>
        <div className='bounding-box' style={{top:box[4].toprow, right:box[4].rightcol, bottom:box[4].bottomrow, left:box[4].leftcol}}></div>
        <div className='bounding-box' style={{top:box[5].toprow, right:box[5].rightcol, bottom:box[5].bottomrow, left:box[5].leftcol}}></div>
        <div className='bounding-box' style={{top:box[6].toprow, right:box[6].rightcol, bottom:box[6].bottomrow, left:box[6].leftcol}}></div>
        <div className='bounding-box' style={{top:box[7].toprow, right:box[7].rightcol, bottom:box[7].bottomrow, left:box[7].leftcol}}></div>
        <div className='bounding-box' style={{top:box[8].toprow, right:box[8].rightcol, bottom:box[8].bottomrow, left:box[8].leftcol}}></div>
        <div className='bounding-box' style={{top:box[9].toprow, right:box[9].rightcol, bottom:box[9].bottomrow, left:box[9].leftcol}}></div>
        </div>
        <div>I am sorry but we cannot currently recognise morethan 10 faces.</div>
        </div> 
    );
}
    
}
export default facerecognition;
