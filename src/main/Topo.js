import React from "react";
import lobo from "../../img/leao3.png";
import styled from 'styled-components'
import Link from '../../styled-topo/styledtopo'





export default function Topo() {
  return (
    <Header>
        <Img src={lobo} alt="logotipo" />
        <Link to='/'>Home</Link>
        <Link to='/sobre'>Sobre</Link>
        <Link to='/Fotos'>Fotos</Link>
        <Link to='/Contato'>Contatos</Link>
        <Link to='/Cadastro'>Cadastros</Link>
   </Header>
  );
}

const Header = styled.header `
  background: rgb(248, 208, 215);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

`;

const Img = styled.img `
  max-width: 100px;
  max-height:100px;
`;

