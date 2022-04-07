import React, { useState } from "react";
import styled from "styled-components";
import Axios from "axios";
import CityComponent from "./components/CityComponent";
import WeatherComponent from "./components/weatherinfo";

export const WeatherIcons = {
  "01d": "./Icons/sunny.svg",
  "01n": "./Icons/night.svg",
  "02d": "./Icons/day.svg",
  "02n": "./Icons/cloudy-night.svg",
  "03d": "./Icons/cloudy.svg",
  "03n": "./Icons/cloudy.svg",
  "04d": "./Icons/perfect-day.svg",
  "04n": "./Icons/cloudy-night.svg",
  "09d": "./Icons/rain.svg",
  "09n": "./Icons/rain-night.svg",
  "10d": "./Icons/rain.svg",
  "10n": "./Icons/rain-night.svg",
  "11d": "./Icons/storm.svg",
  "11n": "./Icons/storm.svg",
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  padding: 20px 10px;
  margin: auto;
  border-radius: 4px;
  box-shadow: 0 3px 6px 0 #555;
  background:lavender;
  font-family: Montserrat;
  margin-top:30px;
  
`;

const AppLabel = styled.span`
  color: black;
  margin: 20px auto;
  font-size: 18px;
  font-weight: bold;
`;
const CloseButton = styled.span`
  padding: 2px 3px;
  background-color: black;
  border-radius: 50%;
  color: white;
  position: absolute;
`;

function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();
  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=17731b7a23b8ba7df8b9080f4bc1968b`,



    );
    updateWeather(response.data);
  };
  return (
    <Container>
      <AppLabel>React Weather App</AppLabel>
      {city && weather ? (
        <WeatherComponent weather={weather} city={city} />
      ) : (
        <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
      )}
    </Container>
  );
}

export default App;