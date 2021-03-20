import { BasicElement } from "./Components/BasicElement/BasicElement";
import "./styles.css";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

import { useState } from "react";

import axios from "axios";

export default function App() {
  const [clicked, setClicked] = useState(false);
  const [data, setData] = useState({});
  const [fetched, setFetched] = useState(false);

  /*
    Non mettere axios direttamente sotto App().
    Quando arriva il risultato, App () viene eseguito nuovamente. 
    In pratica, viene eseguito axios in loop. 
  */

  const fetchData = function () {
    axios
      .get("https://random-data-api.com/api/cannabis/random_cannabis")
      .then(function (response) {
        // handle success
        console.log(response);
        setFetched(true);
        setData(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };

  const handleClick = function () {
    setClicked(!clicked);
  };

  if (!fetched) {
    fetchData();
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <BasicElement />
      <BasicElement />
      <AwesomeButton type="primary" onPress={handleClick}>
        Button
      </AwesomeButton>
      {clicked ? <div> Clicked = true </div> : <div> Clicked = false</div>}
      <div>{JSON.stringify(data)}</div>
    </div>
  );
}
