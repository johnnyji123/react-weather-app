import React, { Component } from "react";
import styles from "./App.module.scss";
import Titles from "../../Component/Titles"
import Form from "../../Component/Form/Form";
import Weather from "../../Component/Weather";
import { async } from "q";
import { throws } from "assert";
const Api_key = "ff5dd56508e67c163c95b7ed93bbc5dcb"
class App extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault()
    const city = e.target.elements.city.value
    const country = e.target.elements.country.value
    const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=f5dd56508e67c163c95b7ed93bbc5dcb`)
    const convertDataToJson = await apiCall.json();
    console.log(convertDataToJson);
    if (city && country) {
      this.setState({
        temperature: convertDataToJson.main.temp,
        city: convertDataToJson.name,
        country: convertDataToJson.sys.country,
        humidity: convertDataToJson.main.humidity,
        description: convertDataToJson.weather[0].description,
        error: ""
      })
    }else {
        this.setState({
          temperature: undefined,
          city: undefined,
          country: undefined,
          humidity: undefined,
          description: undefined,
          error: "please complete the fields"
        })
      }
    }
  render() {
    return (
      // <div className = {styles.wrapper}>

  <div className = {styles.wrapper}>
    <div className = {styles.main}>
      <div className = {styles.container}>
        <div className = {styles.row}>
          <div className="col-xs-5 title-container"></div>
          <Titles  />
          </div>
          <div className ="col-xs-7-form-container"></div>
          <Form getWeather={this.getWeather} />
        <div className = {styles.insideWrapper}>
        
        
        <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidtity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
        />
        </div>
        </div>
      </div>
      </div>
    )
  }
}
export default App;