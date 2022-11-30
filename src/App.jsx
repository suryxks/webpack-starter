import React, { useState } from 'react';
import './style.css';
export const App = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <div className='container'>
            <button onClick={()=>setToggle(prev=>!prev)}>
            {`Click to ${toggle?'hide':'show'} info`}
            </button>
            {toggle?<h1 className='info'>React Starter</h1>:''}
            <h1 className='content'>
                Welcome Dev
            </h1>
    </div>)
}