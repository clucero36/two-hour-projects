import React from 'react';
import styles from './WeatherDisplay.module.css';


const WeatherDisplay = ({data}) => {

  console.log(data)

  return (
    <div style={{marginTop:'1rem', padding:'1rem'}}>
      <div style={{display:'flex', justifyContent:'space-around', alignContent:'center'}}>
        <img alt='icon' src={data.current.condition.icon} style={{width:'75px', height:'75px'}} />
        <h2>Weather Display</h2>
        <img alt='icon' src={data.current.condition.icon} style={{width:'75px', height:'75px'}} />
      </div>
      <div>
        <div style={{paddingBottom:'1rem'}}>
          <h3>Location</h3>
          <div>{data.location.name}</div>
          <div>{data.location.country}, {data.location.region}</div>
        </div>
        <div className={styles.info}>
          <div>Lattitude: </div>
          <div>{data.location.lat}</div>
        </div>
        <div className={styles.info}>
          <div>Longitude: </div>
          <div>{data.location.lon}</div>
        </div>
        <div className={styles.info}>
          <div>Local Time:</div>
          <div>{data.location.localtime}</div>
        </div>
      </div>
      <div>
        <div>
          <h3>Weather</h3>
        </div>
        <h4 style={{paddingLeft:'1rem'}}>{data.current.condition.text}</h4>
        <div className={styles.info}>
          <div>Temp:</div> 
          <div>{data.current.temp_f} f</div>
        </div>
        <div className={styles.info}>
          <div>Wind:</div>
          <div> {data.current.wind_mph} mph</div>
        </div>
        <div className={styles.info}>
          <div>Visual Dist: </div>
          <div>{data.current.vis_miles} miles</div>
        </div>
      </div>
    </div>
  )
}

export default WeatherDisplay;