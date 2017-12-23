import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './media.css'

class Media extends Component {

  handleClick = (event) => {
    this.props.openModal(this.props)
  }

  render() {
    return (
      <div className="media" onClick={this.handleClick}>
        <div className="media-cover">
          <img className="media-image" src={`${this.props.cover}`} alt={`media`} width={240} height={160}/>
          <h3 className="media-title">{this.props.title}</h3>
          <p className="media-author">{this.props.author}</p>
        </div>
      </div>
    )
  }
}

Media.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  type: PropTypes.oneOf(['video', 'audio'])
  //PropTypes.isRequired
}
export default Media
