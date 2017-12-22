import React from 'react'
import './search-container.css'

const SearchContainer = (props) => (
  <form onSubmit={props.handleSubmit} className="search">
    <input
      ref={props.setRef}
      placeholder="Busca tu video favorito"
      className="search-input"
      type="text"
      name="search"
      onChange={props.handleChange}
      value={props.value}
    />
  </form>
)
export default SearchContainer
