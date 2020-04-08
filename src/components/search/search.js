import React, { useContext, useState } from 'react'
import { Input } from '../../shared/Input/input'

import './search.css'
import { AppContext } from '../../context/item-context'


function Search() {
  
  const [search, setSearch] = useState('');
  const {items, searchBuCountry} = useContext(AppContext);

  const handleSearch = (e) => {
    if(e.key === 'Enter') {
      searchBuCountry(search)
    }
  }


  return (
      items.length > 0 ? (
        <div className='search'>
          <Input 
            type='text'
            placeholder="Search ..."
            onChange={(e) => {setSearch(e.target.value)}}
            onKeyPress={e => handleSearch(e)}
            className="default-input"
            value={search}
          />
        </div>
      ) : ''
  )
}

export default Search;