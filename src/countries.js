
import axios from 'axios'
import { useState, useEffect } from 'react'

const Weather = ({ weather }) => {
    if (weather.length > 0) {
        return (
            <h1> {weather[0].main.temp}
                degree farenheit
                <p> {weather[0].weather[0].main}</p>
            </h1>
                  )
    }
        else{
        return (<div>hello</div>)
        }
    }

const Country = ({ country }) => {
    const [weather, setWeather] = useState({})
    console.log('lol country chal raha')
    
    useEffect(() => {
        const params = {
           
            lat: country.latlng[0],
            lon: country.latlng[1],
            appid: process.env.REACT_APP_API_KEY
        }
         
        axios
            .get('https://api.openweathermap.org/data/2.5/weather', { params })
            .then(response => {
                const apiResponse = response.data;
                setWeather([apiResponse])
                console.log(apiResponse)
                console.log('promise weather fullfilled')
                
            })
    }, country.latlng)

    return (
        <div>
            <h1>  {country.name.common}   </h1>
            <p>   capital: {country.capital}   </p>
            <p>  population: {country.population} </p>

            <h2> Spoken languages </h2>
            <div>
             
                {Object.keys(country.languages).map((val, k) => {
                    return (<h4 k={k}>{country.languages[val]}</h4>)    //mapping
                })
                }

            </div><img src={country.flags.png} alt="country flag">
            </img>

            <Weather weather={weather} />
            <hr></hr>
        </div>
       
    )
}

export default Country