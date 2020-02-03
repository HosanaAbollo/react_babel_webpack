import React, { Component } from "react"
import './style.css'
import soleil from '../../img/ensoleille.png'
import { Container, City, Country, Temp, Condition, Icon } from './style'

class WeatherCard extends Component{
    render(){
    return (         
            <Container>
                <City />
                <Country />
                <Icon src={soleil} />
                <Temp />
                <Condition />
            </Container>
     );
    }
}
 
export default WeatherCard;