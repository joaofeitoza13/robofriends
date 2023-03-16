import React from 'react';
import './scroll.css'


const Scroll = (props) =>{
    return(
        <div id = 'scroll'>
            {props.children}
        </div>
    )
}
export default Scroll;