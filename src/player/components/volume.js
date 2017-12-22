import React from 'react'
import VolumenIcon from '../../icons/components/volume'
import './volume.css'

const Volume = (props) => {
  return (
    <button className="volume">
      <div onClick={props.handleResetVolume}>
        <VolumenIcon
          color="white"
          size={25}
        />
      </div>
      <div className="volume-range">
        <input
          type="range"
          min={0}
          max={1}
          step={.05}
          onChange={props.handleVolumeChange}
          value={props.volume}
        />
      </div>
    </button>
  )
}
export default Volume
