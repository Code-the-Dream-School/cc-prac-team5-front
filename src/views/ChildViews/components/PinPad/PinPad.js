import React from 'react';
import PinInput from "react-pin-input"; 

const PinPad = () => {

  return (
    <div>
        <div>
            <span>Enter your 4 digit pin to login</span>
        </div>
        <form>
        <div>
            <PinInput 
            length={4}
            inputMode='numeric'
            secret
            />
        </div>
      </form>
    </div>
  )
}




export default PinPad;