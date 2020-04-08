import React from 'react'
import PropTypes from 'prop-types'

import './list-items.css'

const Item = ({country, todayDeaths}) => {
  return (
    <div className='item'>
      <h2 className='item-country'>{country}</h2>
      <p className='item-deadths'>died today : <span>{todayDeaths}</span></p>
    </div>
  )
}

Item.propTypes = {
  country: PropTypes.string.isRequired
}



export const ListItems = ({items}) => {
  return (
    <div className='list-items'>
      {items.map((item) => {
        const {country, todayDeaths} = item
        return (
          <Item 
            key={country}
            country={country}
            todayDeaths={todayDeaths}
          />
        )
      })}
    </div>
  )
}


ListItems.propTypes = {
  items: PropTypes.array.isRequired
}
