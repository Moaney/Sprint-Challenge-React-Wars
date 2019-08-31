import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import './App.css';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() =>{
    axios
      .get("https://swapi.co/api/people")
      .then(res => {
        console.log(res.data);
        setData(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
        <h2>Star Wars Characters:</h2>
        <div>
          {data.map((person) => (
              <h3>{person.name}</h3>
          ))}
          </div>
        </div>
  );
}

export default App;
