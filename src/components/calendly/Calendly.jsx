import React from 'react'
import './Calendly.css'
import { PopupWidget } from "react-calendly";

const Calendly = () => {
  return (
    <div className='calendlyWidget'>
        <PopupWidget
        url="https://calendly.com/nathangusky13/30min?month=2022-07"
        rootElement={document.getElementById("root")}
        text="Schedule With Me!"
        textColor="#000"
        color="#00ff00"
      />
    </div>
  )
}

export default Calendly