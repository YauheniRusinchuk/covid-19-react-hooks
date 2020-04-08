import React, {useContext} from 'react'
import './header.css'
import { Button } from '../../shared/Button/button'

import {AppContext} from '../../context/item-context'


function Header() {
  const {getData} = useContext(AppContext)

  const handleClickForGetData = (e) => {
    e.preventDefault();
    getData();
  }

  return (
    <div className='header'>
      <h3>WELCOME TO THE SITE WHERE YOU CAN SEE COVID-19 INFORMATION</h3>
      <Button name='CLICK HERE' onClick={handleClickForGetData} className='default-btn'/>
    </div>
  )
}

export default Header;