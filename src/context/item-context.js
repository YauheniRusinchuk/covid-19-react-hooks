import React from 'react'
import {useHttp} from '../hooks/useHttp'


export const AppContext = React.createContext(null);

export const AppContextProvider = ({children}) => {

  const {
    items,
    loading,
    getItemsInfofmation,
    searchBuCountry
  } = useHttp();

  return (
    <AppContext.Provider value={{
      items: items, 
      getData: getItemsInfofmation, 
      loading: loading,
      searchBuCountry: searchBuCountry
      }}>
      {children}
    </AppContext.Provider>    
  )
}