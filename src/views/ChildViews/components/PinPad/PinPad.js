import React from 'react';
import PinInput from "react-pin-input"; 
import {BsBackspace} from "react-icons/bs";
import '../../styles/PinPad.css'

const PinPad = () => {

  return (
    <div className='PinPad'>
        <form>
        <div className='PinInput'>
            <PinInput 
            length={4}
            inputMode='numeric'
            secret
            />
            <div>
                <button className='PinButton'>1</button>
                <button className='PinButton'>2</button>
                <button className='PinButton'>3</button>
            </div>
            <div className='PinContainer'>
            <div>
                <button className='PinButton'>4</button>
                <button className='PinButton'>5</button>
                <button className='PinButton'>6</button>
            </div>
            <div>
                <button className='PinButton'>7</button>
                <button className='PinButton'>8</button>
                <button className='PinButton'>9</button>
            </div>
            <div>
                <button className='PinButtonCancel'>cancel</button>
                <button className='PinButton'>0</button>
                <button className='PinButtonBack'>{<BsBackspace size={35} />}</button>
            </div>
        </div>
        </div>
      </form>
    </div>
  )
}




export default PinPad;