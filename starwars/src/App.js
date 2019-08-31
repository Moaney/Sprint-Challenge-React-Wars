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

  const H1 = styled.h1 `
  font-family: 'Russo One', sans-serif;

  `

  const H2 = styled.h2 `
  font-family: 'Saira', sans-serif;
  `
  const H3 = styled.h3 `
  font-family: 'Khand', sans-serif;
  `

  const P = styled.p `
  font-family: 'Bahianita', cursive;
  `

  return (
    <div className="App">
      <H1 className="Header">React Wars</H1>
        <H2>Star Wars Characters:</H2>
        <div>
          {data.map((person, index) => (
            <div key={index}>
              <H3>{person.name}</H3>
              <P>{person.birth_year}</P>
              </div>
          ))}
          </div>
        </div>
  );
}

export default App;
