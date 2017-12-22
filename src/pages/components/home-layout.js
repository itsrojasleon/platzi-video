import React from 'react'
import './home-layout.css'

const HomeLayout = (props) => {
  return (
    <section className="home-layout">
      {props.children}
    </section>
  )
}
export default HomeLayout
