import React from 'react';
import './imagelinkform.css'

const imagelinkform = ({oninputchange, onButtonsubmit}) => {
    return(
    <div>
        <p>
            {'This Magic Brain will detect faces in your pictures. Give it a try'}
        </p>
        <div className="center">
        <div className="w-40-l w-80-m w-100 center form pa4 br3 shadow-5">
            <input type="text" className="f4 pa2 w-70 center" onChange={oninputchange} />
            <button className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"onClick={onButtonsubmit} >Detect</button>
        </div>
        </div>
    </div>
        );
}
export default imagelinkform;