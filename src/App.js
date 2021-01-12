import React, { useState, useEffect } from "react";
import "./App.css";

import { getData } from "./services/getData";
import { DataTable } from './components';

const URL = "https://demo6922545.mockable.io/";

function App() {
  const [testData, setTestData] = useState({});

  useEffect(() => {
    getData(URL).then((response) => {
      if (response) {
        setTestData(response);
      }
    }).catch(e => {
      console.log(e);
    });
  }, []);

  const content = testData.data ? <DataTable data={testData.data} /> : <div>Loading</div>;


  return (
    <div className="App">
      <h3>Genes associated with lung carcinoma</h3>
      {content}
    </div>
  );
}

export default App;
