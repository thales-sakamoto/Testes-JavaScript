import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

function Teste() {
  return <>
  <h1 className="class1">Olá Thales</h1>
  <h1>Minha primeira página {2**3} </h1> 
    <p className="class1">Aqui é só um teste</p>
    <ul className="class2">Aqui é uma lista</ul>
    <ul>Aqui é uma lista</ul>
    <ul>Aqui é uma lista</ul>

    <li>Aqui é uma lista ord</li>
    <li>Aqui é uma lista ord</li>
    <li>Aqui é uma lista ord</li>

    <p> </p>

    <td>Coluna1</td>
    <tr>Aqui é uma tabela</tr>
    <tr>Aqui é uma tabela</tr>
    <tr>Aqui é uma tabela</tr>
  
  
  </>;
}

ReactDOM.render(<Teste/>,document.querySelector('#root'));