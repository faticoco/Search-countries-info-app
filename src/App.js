import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './filter'
import Content from './content'
import Country from './countries'

const App = () => {

    const key = process.env.REACT_APP_API_KEY
    console.log(key)

    const [Allcountries, SetAllCountries] = useState([])
    const [countries, setcountries] = useState([])
    const [newFilter, setNewFilter] = useState('')

    useEffect(() => {
        axios
            .get('https://restcountries.com/v3.1/all')
            .then(response => {
                console.log('promise fulfilled')
                console.log(response.data)
                SetAllCountries(response.data)
            })
    }, [])


    const handleFilterChange = (event) => {
        event.preventDefault()
        setNewFilter(event.target.value)
        if (newFilter) {
            const filteredCountries = Allcountries.filter(country => {
                return country.name.common.toLowerCase().includes(newFilter)
            });
            setcountries(filteredCountries)
        }
        console.log(countries)
    }


    return (
        <div >
            <h1>Name</h1>
           
               
             <Filter value={newFilter} onChange={handleFilterChange} />
             <Content countries={countries} setcountries ={setcountries} /> 
            {countries.map(country => {
                return (
                    <div key={country.name.common}>
                        <p>name: {country.name.common}</p>
                        <hr />
                    </div>
                );
            })}
           

        </div>
    );
}

export default App