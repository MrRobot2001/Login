import React from 'react'
import './Alert1.css'
export function Alert1({msg,handleShow,bg}) {
  const buttonx = () => {
    document.getElementById('buttonx').style.display = "none";
    handleShow();
  }
  return (
    <div className="modal" id="buttonx" style={{'backgroundColor':`${bg}`}}>
      <strong className="login1">Alert</strong>
      <small className="buttonx"  onClick={buttonx}>X</small>
      <div className="modal-body">
        {msg.body}
      </div>
    </div>
  )
}
export default Alert1;