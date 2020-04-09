import {useState} from 'react'

export const useHttp = () => {

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
    if(!country) {
      getItemsInfofmation();
      return;
    }
    setLoading(true)
    const response = await fetch(`https://coronavirus-19-api.herokuapp.com/countries/${country}`);
    const data = await response.json();
    setItems([
      data
    ]);
    setLoading(false);
  }

  return {
    items,
    loading,
    getItemsInfofmation,
    searchBuCountry
  }

}