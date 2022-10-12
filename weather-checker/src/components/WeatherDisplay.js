import React from 'react';


const WeatherDisplay = ({data}) => {

  console.log(data)

  return (
    <div style={{marginTop:'1rem'}}>
      <div style={{display:'flex', justifyContent:'space-around', alignContent:'center'}}>
        <img alt='icon' src={data.current.condition.icon} style={{width:'75px', height:'75px'}} />
        <h2>Weather Display</h2>
        <img alt='icon' src={data.current.condition.icon} style={{width:'75px', height:'75px'}} />
      </div>
      <div>
        <h3>Location</h3>
        <div>{data.location.country}, {data.location.region}</div>
        <div>Lattitude: {data.location.lat} </div>
        <div>Longitude: {data.location.lon} </div>
        <div>Local Time: {data.location.localtime}</div>
      </div>
      <div>
        <div>
          <h3>Weather</h3>
        </div>
        <div>Condition: {data.current.condition.text}</div>
        <div>Temp: {data.current.temp_f} f</div>
        <div>Wind: {data.current.wind_mph} mph</div>
        <div>Visual Dist: {data.current.vis_miles} miles</div>
      </div>
    </div>
  )
}

export default WeatherDisplay;