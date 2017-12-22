import React from 'react'
import './modal.css'

const Modal = (props) => {
  return (
    <div className="modal">
      {props.children}
      <button onClick={props.handleClick}>Close</button>
    </div>
  )
}
export default Modal
