import { useState, useEffect } from 'react'
import axios from 'axios'
import Country from './countries'
import Filter from './filter'
import Content from  './content'
import ReactDOM from 'react-dom/client'

const App=()=> {
    const [Allcountries, SetAllCountries] = useState([])
    const [countries, setcountries] = useState([])
    const [newFilter, setNewFilter] = useState('')

    useEffect(() => {
        axios
            .get('https://restcountries.com/v3.1/all')
            .then(response => {
                console.log('promise fulfilled')
                SetAllCountries(response.data)
            })
    }, [])


    const handleFilterChange = (event) => {
        event.preventDefault()
        setNewFilter(event.target.value)
        if (newFilter) {
            const regex = new RegExp(newFilter, 'i');
            const filteredCountries = () => Allcountries.filter(countries => countries.name.match(regex))
            setcountries(filteredCountries)
        }
    }


  return (
      <div >
          <h1>Name</h1>
          <ul>
              {countries.map(country =>
                  <Country key={country.id} country={country} />
              )}
          </ul>
          <Filter value={newFilter} onChange={handleFilterChange} />
          <Content countries={countries} setcountries ={setcountries} />

    </div>
  );
}

export default App
