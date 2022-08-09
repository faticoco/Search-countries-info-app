import React from 'react'
import Country from './countries'


const Content = ({ countries, setcountries }) => {
    console.log('lol content chal raha')
    const [showCountry, setShowCountry] = React.useState(false)
    const [showIndex, setIndex] = React.useState(null)
    const storeIndex = (index) => setIndex(index)
    const onClick = (val) => setShowCountry(val)
    if (countries.length > 10) {
        return (
            <p>
                Too many matches, specify another filter
            </p>
        )
    }
    else if ((countries.length > 2 && countries.length < 10) || countries.length === 0)
    {
        if (!showCountry) {
            return (
                <div>
                    {
                        countries.map((country , index) => {
                            return (
                                <div key={country.name.common}>
                                    <p>name: {country.name.common}</p>
                                    <button onClick=
                                    {
                                        () =>
                                        {
                                            onClick(true)
                                                storeIndex(index)
                                        }
                                    }>open</button>
                                </div>
                            )
                        })}
                </div>
            )
        } else
        {
            return (
                <div>

                    <Country country={countries[showIndex]} />
                    <button onClick={() => {
                        onClick()
                        console.log(showCountry)
                    }}>close</button>
                </div>
            )
        }
    }
    else {
        return (
            <div>
                <Country country={countries[0]} />

            </div>
        )
      
    }
}

export default Content

