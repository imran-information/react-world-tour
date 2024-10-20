import { useEffect } from "react";
import { useState } from "react";
import Country from "./country/Country";
import './Countries.css'

const Countries = () => {
    const [country, setCountry] = useState([])
    const [markedCountry, setMarkedCountry] = useState([])
    const [fvFlags, setFvFlags] = useState([])


    useEffect(() => {
        const allCountryDataLoad = async () => {
            const res = await fetch('https://restcountries.com/v3.1/all');
            const data = await res.json()
            setCountry(data)
        }
        allCountryDataLoad()
    }, []);

    const handleMarkVisited = country => {
        const newMarkVisited = [...markedCountry, country]
        setMarkedCountry(newMarkVisited)
    }

    const handleFvFlags = flags => {
        const newFvFlags = [...fvFlags, flags]
        setFvFlags(newFvFlags)
    }
    console.log(fvFlags);


    return (
        <div>
            <h2>Countries: {country.length}</h2>
            <h3>Mark Visit Country: {markedCountry.length}</h3>
            <div className="mark-country-container">
                <ol className="marked-country">
                    {
                        markedCountry.map((markCountry, index) => <li key={index}>{markCountry.name.common}</li>)
                    }
                </ol>
                <div className="fv-flags">
                    {
                        fvFlags.map((fvFlags, index) => <img key={index} src={fvFlags.png}></img>)
                    }
                </div>
            </div>
            <div className="country-container">
                {
                    country.map((country, index) => <Country
                        key={index}
                        country={country}
                        handleMarkVisited={handleMarkVisited}
                        handleFvFlags={handleFvFlags}>
                    </Country>)
                }
            </div>
        </div>
    );
};

export default Countries;