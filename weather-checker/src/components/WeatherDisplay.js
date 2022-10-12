import React from 'react';
import styles from './WeatherDisplay.module.css';


const WeatherDisplay = ({data}) => {

  console.log(data)

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <img alt='icon' src={data.current.condition.icon} style={{width:'75px', height:'75px'}} />
        <h2>Weather Display</h2>
        <img alt='icon' src={data.current.condition.icon} style={{width:'75px', height:'75px'}} />
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.leftInfo}>
          <div>
            <h3>Location</h3>
            <h4>{data.location.name}</h4>
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
        <div className={styles.rightInfo}>
          <div>
            <h3>Weather</h3>
            <h4>{data.current.condition.text}</h4>
          </div>
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
    </div>
  )
}

export default WeatherDisplay;