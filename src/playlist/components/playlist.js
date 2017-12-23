import React from 'react'
import Media from './media'
import './playlist.css'

const Playlist = (props) => {
  return (
    <div className="playlist">
      {props.playlist.map(item => {
        return <Media
          key={item.id}
          {...item}
          openModal={props.handleOpenModal}
        />
      })}
    </div>
  )
}
export default Playlist
