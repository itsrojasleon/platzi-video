import React from 'react'
import './modal.css'

const Modal = (props) => {
  return (
    <div className="modal">
      {props.children}
      <button className="modal-close" onClick={props.handleClick}></button>
    </div>
  )
}
export default Modal
