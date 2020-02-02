import React from "react"
import { Location } from './Location'
import soleil from '../../img/ensoleille.png'

const WeatherCard = (props) => {
    return ( 
        <div>
            <div>Weater Card</div>
            <Location />
            <img className="icon" src={soleil} alt="Weather Icon"/>
            <h1 className="temp">20 °c</h1>
            <h3>Cloudy</h3>
        </div>

     );
}
 
export default WeatherCard;