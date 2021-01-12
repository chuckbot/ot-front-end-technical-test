import React, { useState, useEffect } from "react";
import "./App.css";

import { getData } from "./services/getData"

const URL = "https://demo6922545.mockable.io/";

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    getData(URL).then((response) => {
      if (response) {
        console.log(response);
        setData(response);
      }
    }).catch(e => {
      console.log(e)
    })
  }, [])

  return (
    <div className="App">
      <p>
        Feel free to edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
  );
}

export default App;
