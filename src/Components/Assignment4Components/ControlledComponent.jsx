// 3.Create a component with controlled input field and a button. When the user enters a specific value into the input (e.g., "show"), 
// a new component should be rendered below the input, displaying a message. Otherwise, nothing should be displayed.
"use client"

import React, { useState } from 'react'
import ShowMessage from './ShowMessage';

function ControlledComponent() {

    const [input, setInput]= useState("");
    const [showMessage,SetshowMesage] = useState(false);


    function changeHandler(e){
        setInput(e.target.value);
    }

    function verifyHandler(){
        if(input=="show"){
            SetshowMesage(true);
        }
    }

  return (
    <div>
        <input
        type='text'
        value={input}
        onChange={changeHandler}
        placeholder="Enter show to display a message"
        />

        <button onClick={verifyHandler} >Check</button>

        {showMessage && <ShowMessage/>}
    </div>
  )
}

export default ControlledComponent