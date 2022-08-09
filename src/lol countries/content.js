import React from 'react'
import Country from './countries'

const Content = ({ countries, setcountries }) => {
    console.log('lol content chal raha')
    if (countries.length > 10) {
        return (
            <p>
                Too many matches, specify another filter
            </p>
        )
    } else if ((countries.length > 2 && countries.length < 10) || countries.length === 0) {
        return (
            <ul>
                {countries.map((country, i) =>
                    <li key={i}> {country.name} <button onClick={() => setcountries([country])}>show</button></li>
                )}
            </ul>
        )
    } else {
        return (
            <Country countries={countries[0]} />
        )
    }
}

export default Content