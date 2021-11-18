import React, { useState } from "react";

//API
const api = {
    key: "1d6c7c44ae81123ebb605a08ca817ee5",
    base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
    //Querys
    const [query, setQuery] = useState("");
    const [weather, setWeather] = useState({});

    //Catch the data with search
    const search = (evt) => {
        if (evt.key === "Enter") {
            fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
                .then((res) => res.json())
                .then((result) => {
                    setWeather(result);
                    setQuery("");
                    console.log(result);
                });
        }
    };

    //Array date months
    const dateShow = (d) => {
        let months = [
            "Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo",
            "Junio",
            "Julio",
            "Agosto",
            "Septiembre",
            "Octubre",
            "Noviembre",
            "Diciembre",
        ];
        let days = [
            "Domingo",
            "Lunes",
            "Martes",
            "Miércoles",
            "Jueves",
            "Viernes",
            "Sabado",
        ];

        //Catch the dates
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day} ${date} ${month} ${year}`;
    };

    return (
        <div className="app">
            <main>
                <div className="search__box">
                    <input
                        type="text"
                        className="search__bar"
                        placeholder="Search.."
                        onChange={(e) => setQuery(e.target.value)}
                        value={query}
                        onKeyPress={search}
                    />
                </div>
                {typeof weather.main != "undefined" ? (
                    <div>
                        <div className="location__box">
                            <div className="location">
                                {weather.name}, {weather.sys.country}
                            </div>
                            <div className="date">{dateShow(new Date())}</div>
                        </div>
                        <div className="weather__box">
                            <div className="temp">{Math.round(weather.main.temp)}°C</div>
                            <div className="humidity">{Math.round(weather.main.humidity)}%</div>
                            <div className="pressure">{Math.round(weather.main.pressure)} hpa</div>
                            <div className="weather">{weather.weather[0].main}</div>
                        </div>
                    </div>
                ) : ("")}
            </main>
        </div>
    );
}

export default App;
