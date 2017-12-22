import React from 'react'
import './video-player-controls.css'

const Controls = (props) => (
  <div className="video-player-controls">
    {props.children}
  </div>
)
export default Controls
