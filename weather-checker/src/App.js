import React, { useState, useEffect } from 'react';
import WeatherDisplay from './components/WeatherDisplay';
import SearchBar from './components/SearchBar';
import weather from './apis/weather';


function App() {

  const [location, setLocation] = useState('Los Angeles')
  const [weatherData, setWeatherData] = useState(null)
  
  useEffect(() => {
    
    let search = async () => {
      const response = await weather.get('/current.json', {
        params: {
          q: location
        }
      })
      setWeatherData(response.data);
    }

    search();

  }, [location])

  if (weatherData === null) {
    return <div>Loading....</div>
  }
  else {
    return (
      <div style={{border:'1px solid black', width:'80%', margin:'0 auto'}}> 
        <SearchBar setLocation={setLocation} label={'City Location'}/>
        <WeatherDisplay data={weatherData} />
      </div>
    );
  }

}

export default App;
