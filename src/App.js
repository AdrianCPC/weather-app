import React from "react";


function App() {

  //API
  const API = {
    key: "58437faae46eb76976e992c93648ec1a",
    base: "https://api.openweathermap.org/data/2.5/"
  }
  return (
    <div className="app">
      <main>
        <div className="search__box">
          <input type="text" className="search__bar" placeholder="Search.."/>
        </div>
      </main>
    </div>
  );
}

export default App;
