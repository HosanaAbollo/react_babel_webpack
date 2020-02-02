import React,{ Component } from "react"
import WeatherCard from './components/WeatherCard/component'

class App extends Component {
    render(){
        return(
            <div>
                <h1>React manually basic configuration</h1>
                <WeatherCard />
            </div>
        )
    }
}
 
export default App;