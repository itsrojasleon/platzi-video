import React, { Component } from 'react'
import SearchContainer from '../components/search-container'

class Search extends Component {
  state = {
    value: 'Luis Fonsi'
  }
  handleSubmit = event => {
    event.preventDefault()
    console.log(this.input.value)
  }
  setInputRef = element => {
    this.input = element
  }
  handleChange = event => {
    this.setState({
      value: event.target.value.replace(' ', '-')
    })
  }

  render() {
    return (
      <SearchContainer
        handleSubmit={this.handleSubmit}
        setRef={this.setInputRef}
        handleChange={this.handleChange}
        value={this.state.value}
      />
    )
  }
}
export default Search
