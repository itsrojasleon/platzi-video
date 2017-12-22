import React from 'react'
import Playlist from '../../playlist/components/playlist'
import './category.css'

const Category = (props) => {
  return (
    <div className="category">
      <p className="category-description">{props.description}</p>
      <h2 className="category-title">{props.title}</h2>
      <Playlist
        handleOpenModal={props.handleOpenModal}
        playlist={props.playlist}
       />
    </div>
  )
}
export default Category
