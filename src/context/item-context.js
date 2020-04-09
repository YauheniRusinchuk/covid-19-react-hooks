import React, {useState} from 'react'


export const AppContext = React.createContext(null);

export const AppContextProvider = ({children}) => {

  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);

  const getItemsInfofmation = async () => {
    setLoading(true)
    const response = await fetch('https://coronavirus-19-api.herokuapp.com/countries');
    const data = await response.json();
    setItems(data);
    setLoading(false);
  }


  const searchBuCountry = async (country) => {
    setLoading(true)
    const response = await fetch(`https://coronavirus-19-api.herokuapp.com/countries/${country}`);
    const data = await response.json();
    console.log(data);
    setItems([
      data
    ]);
    setLoading(false);
  }


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