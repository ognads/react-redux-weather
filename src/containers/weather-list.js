import React, { Component } from 'react'

import { connect } from 'react-redux'
import Chart from '../components/chart';

export class WeatherList extends Component {
    renderWeather(data){
        const name = data.city.name;
        const temps = data.list.map(weather=>weather.main.temp);
        const pressures = data.list.map(weather=>weather.main.pressure);
        const humidities = data.list.map(weather=>weather.main.humidity);
        return (
            <tr key={name}>
                <td>{name}</td>
                <td><Chart color="red" data={temps}/></td>
                <td><Chart color="orange" data={pressures}/></td>
                <td><Chart color="blue" data={humidities}/></td>
            </tr>
        )
    }
  render() {;
    return (
      <div>
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>City</th>
                    <th>Temperture</th>
                    <th>Pressure</th>
                    <th>Humidity</th>
                </tr>
            </thead>
            <tbody>
                {this.props.weather.map(this.renderWeather)}
            </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    //in index.js file we combined the reducerWeather(data got from api) to weather(state.weather) key
    weather:state.weather
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherList)
