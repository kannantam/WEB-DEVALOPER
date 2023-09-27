//import logo from './logo.svg';  
import './App.css';      
import axios from 'axios'  
import { useState, useEffect } from 'react';

function Weather() {

  const [city, setCity] = useState([]);
  const [weatherData, setWeatherData] = useState();

  const APIKey = '0f22b0918c6718fb2b0e13c0575f776c'; 
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`; 

  const getData = () => {
    
    axios.get(url)
    .then(res =>{
      let out = document.getElementById("results")
      out.style.display="block"
      setWeatherData(res.data)})    
      .catch(err => {
          if(err.response.data.cod == "404"){

            alert(err.response.data.message)
            document.location.reload()
          }
          console.log(err)
      })      
  }
  //console.log(weatherData.data)
  useEffect(() => {
    getData();             
    document.getElementById("weatherInput").focus();
  },[])
 // console.log([])
    

  const handleSearch = (e) => {
    setCity(e.target.value);
  }

  const handleSubmit = (event) => {
 getData(); 
   
  }

  const handleKeypress = e => {
    //it triggers by pressing the enter key
    if (e.charCode === 13) {
      getData();
    }
  };
     
  const name = weatherData ? weatherData.name : 'name';   
  const country = weatherData ? weatherData.sys.country : 'country';  
  const humidity = weatherData ? weatherData.main.humidity : 'humidity'; 
  const pressure = weatherData ? weatherData.main.pressure : 'pressure';
  const temp = weatherData ? weatherData.main.temp : 'temp'; 
  const weather = weatherData ? weatherData.weather[0].description : 'weather';
  const iconcode = weatherData ? weatherData.weather[0].icon : 'iconcode'; 
  console.log(iconcode[0])

  const d = new Date();
                     
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    //console.log(days[2])
        
  const month = new Array();
  month[0] = "January";     
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";

 //console.log(month[1])
  let time = d.toLocaleString([],{
      hour : '2-digit',
      minute:'2-digit',
      second:'2-digit'
  });
  return (
   
    <div className="Weather"> 
      <header className="Weather-header">
        <div className="weather">
          <input id="weatherInput" type="text"  name="city" placeholder="City Name" 
            onChange={handleSearch}
           onKeyPress={handleKeypress}
            
          />
          <button onClick={handleSubmit}>Search</button>
        </div>

        <div className="results" id='results' style={styles.results}>
          <div style={{ fontSize: 25 }}>{name}, {country}</div>

          <div style={{ color: 'yellow', fontSize: 18 }}>{days[d.getDay()]}, {month[d.getMonth()]} {d.getDate()}, {d.getFullYear()}</div>
          {time}
          <div style={{ fontSize: 54, fontWeight: 'bold',color:'blue' }}>{Math.round(temp)}&deg;C</div>

          <img src={`http://openweathermap.org/img/w/${iconcode}.png`} alt="Weather icon"/> 
         

          <div style={{ textTransform: 'capitalize', marginBottom: 20 }}>{weather}</div>

          <div>Humidity : {humidity}%</div>
          <div>Pressure : {pressure} hPa</div>
        </div>
      </header>

    </div>
  );

  }
 const styles = {
  results: {
    border: '1px solid  red',
    borderRadius: 35,
    backgroundColor: 'blueviolet',
    padding: '3rem',
    margin: '1.5rem',
    boxShadow: 'rgb(84 179 207 / 50%) 3px 3px 2px 0px'
  }
 }

export default Weather;