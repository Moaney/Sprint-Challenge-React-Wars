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
        console.log(res.data.results);
        setData(res.data.results);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
        <h2>Star Wars Characters:</h2>
        <ol>
          {data.map((person, index) => (
            <div key={index}>
              <li>{person.name}</li>
              <p>{person.birth_year}</p>
              </div>
          ))}
          </ol>
        </div>
  );
}

export default App;
