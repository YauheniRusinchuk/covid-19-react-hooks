import React, {useContext} from 'react'
import {AppContext} from '../../context/item-context'
import './main.css'
import Spinner from '../spinner';
import { ListItems } from '../list-items/list-items';



function Main() {
  const {items, loading} = useContext(AppContext);

  console.log("ITEMS : ", items);

  if (loading) {
    return <Spinner />
  }
  
  return (
    <div className='main'>
      {items && <ListItems items={items}/>}
    </div>
  )
}

export default Main;