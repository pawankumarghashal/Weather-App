import { useState } from "react";
import SearchBox from "./SearchBOx";
import InfoBox from "./infoBox";
import "./WeatherApp.css"

export default function WeatherApp(){
  const[weatherInfo,getWeatherInfo] = useState({
    city:"Delhi",
    feelslike:24.84,
    temp:25.05,
    tempMin:25.05,
    tempMax:25.05,
    humidity:47,
    weather:"haze",

  })

  let updateInfo = (newInfo) =>{
    getWeatherInfo(newInfo);
  }

    return(
        <div>
            <h2  className="WeatherApp">Weather App by teamJMD</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}