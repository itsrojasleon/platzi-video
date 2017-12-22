import React from 'react'
import { render } from 'react-dom'
import Home from '../pages/containers/home'
import data from '../api.json'

render(
  <Home data={data} />,
  document.getElementById('home-container')
)
