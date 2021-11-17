import React from "react";

  //API
  const API = {
    key: "58437faae46eb76976e992c93648ec1a",
    base: "https://api.openweathermap.org/data/2.5/"
  }


function App() {

  //Array date months
  const dateShow = (d) => {
    let months = [
      "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", 
      "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];
    let days = [
      "Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sabado"
    ];

    //Catch the dates
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  return (
    <div className="app">
      <main>
        <div className="search__box">
          <input type="text" className="search__bar" placeholder="Search.."/>
        </div>
        <div className="location__box">
          <div className="location">Puerto Guzman, CO</div>
          <div className="date">{dateShow(new Date())}</div>
        </div>
        <div className="weather__box">
          <div className="temp">
            30°C
          </div>
          <div className="weather">Cloudy</div>
        </div>
      </main>
    </div>
  );
}

export default App;
