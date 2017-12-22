import React from 'react'
import './timer.css'

function leftPad(num) {
  const pad = '00'
  return pad.substring(0, pad.length - num.length) + num
}

function formatedTime(seg) {
  const minutes = parseInt(seg / 60, 10)
  const seconds = parseInt(seg % 60, 10)
  return `${leftPad(minutes)} : ${leftPad(seconds.toString())}`
}

const Timer = (props) => (
  <div className="timer">
    <p>
      <span>{formatedTime(props.currentTime)} / {formatedTime(props.duration)}</span>
    </p>
  </div>
)
export default Timer
