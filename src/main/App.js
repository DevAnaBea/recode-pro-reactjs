import React from "react";
import styled from 'styled-components'
import{ BrowserRouter } from 'react-router-dom'

import Topo from './Topo';
import Routes from './Routes'
import Rodape from './Rodape'




export default function App() {
  return (
    <BrowserRouter>
      <Body>
        <Main>
          <Topo />
          <Routes/>
          <Rodape />
        </Main>
      </Body>
    </BrowserRouter>
  );
}

const Main = styled.main `
  width: 800px;
  text-align: center;
  font-family: sans-serif;
  margin: 0 auto;
  background: rgb(236, 168, 156);

`;

const Body = styled.body `
  color: #fff;
  background: #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

