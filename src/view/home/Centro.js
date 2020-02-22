import React from 'react'
import styled from 'styled-components'

import leao1 from "../../../img/01.jpeg";
import leao2 from "../../../img/2.jpeg";
import leao3 from "../../../img/3.jpeg";
import leao4 from "../../../img/4.jpeg";
import leao5 from "../../../img/5.jpeg";
import leao6 from "../../../img/6.jpg";

export default function Centro(){
  return(
    <Aside>

        <Img src={leao1} />

        <Img src={leao2} />

        <Img src={leao3} />

        <Img src={leao4} />

        <Img src={leao5} />

        <Img src={leao6} />
    </Aside>
  )
}

const Aside = styled.aside `
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin:20px;
`;

const Img = styled.img `
  width: 200px;
  height: 300px;
  margin: 20px;
  background: pink;
`;
