import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"
import {useState } from "react";
import './App.css';

function App() {

  const apiKey = "386e1c0bcb9f1a3a8088aba8de97b3c9"
  const [inputCity, setInputCity] = useState("")
  const [data, setData] = useState({})

  const getWetherDetails = (cityName) => {
    if (!cityName) return
    const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey
    axios.get(apiURL).then((res) => {
      console.log("response", res.data)
      setData(res.data)
    }).catch((err) => {
      console.log("err", err)
      alert("City Not Found.")
    })
  }

  const handleChangeInput = (e) => {
    console.log("value", e.target.value)
    setInputCity(e.target.value)
  }

  const handleSearch = () => {
    if(inputCity==0){
      alert("Please Enter City Name.")
    }
    else {
    getWetherDetails(inputCity)}
  }

  return (
    <div className="col-md-10">
      <div className="wetherBg">
        <h1 className="heading">Weather App</h1>

        <div className="d-grid gap-3 col-2 mt-3">
          <input type="text" className="form-control"
            value={inputCity}
            onChange={handleChangeInput} />
          <button className="btn btn-primary" type="button"
            onClick={handleSearch}
          >Search</button>
        </div>
      </div>

      {Object.keys(data).length > 0 &&
        <div className="col-md-12 text-center mt-5">
          <div className="shadow rounded wetherResultBox">
            <img className="weathorIcon"
              src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png" />

              {/* to print the output data */}

            <h5 className="weathorCity">
              {data?.name}
            </h5>
            <h6 className="weatherTemp">{((data?.main?.temp) - 273.15).toFixed(0)}°C</h6>
          </div>
        </div>
      }
    </div>
  );
}
export default App;