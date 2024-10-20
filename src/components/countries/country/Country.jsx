import { useState } from 'react';
import './Country.css'
const Country = ({ country, handleMarkVisited, handleFvFlags }) => {
    const { name, flags, area, region } = country;
    const [visited, setVisited] = useState(false)


    const handleVisitedCountry = () => {
        setVisited(!visited)
    }

    return (
        <div className="country-card">
            <h3>{name.common}</h3>
            <img src={flags.png} alt="" />
            <p className='details'><small>Area: {area}</small></p>
            <p className='details'><small>Region: {region}{area}</small></p>
            <p className='visited'><small>{visited ? "Tour complete the country." : "Got to the country Tour!"}</small></p>
            <button onClick={handleVisitedCountry} className='btn'>{visited ? "Visited" : "Visit Now"}</button>
            <button onClick={() => handleMarkVisited(country)} className='btn'>Mark Visit</button>
            <button onClick={() => handleFvFlags(flags)} className='btn'>Add FV flags</button>
        </div>
    );
};

export default Country;