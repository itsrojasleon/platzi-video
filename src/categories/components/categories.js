import React from 'react'
import Category from './category'
import './categories.css'
import Search from '../../widgets/containers/search'

const Categories = (props) => {
  return (
    <div className="categories">
      <Search />
      {props.categories.map(item => {
        return <Category
          key={item.id}
          {...item}
          handleOpenModal={props.handleOpenModal}
        />
      })}
    </div>
  )
}
export default Categories
