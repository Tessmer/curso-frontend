import React, { useState } from "react";
import Button from "./Button.js"
import logo from './logo.svg';
import './App.css';

function App() {
  const [content, setContent] = useState("Valor aqui");
  //content: valor, setContent: function que define o valor da variável
  const [conteudo, setConteudo] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {content}
        </a>

        <Button text="Clique aqui" handleClick={() => {
          setContent("Mudou o texto");
          console.log("Texto do anchor mudou! (:");
        }} />

        <Button text="Clique aqui 2" handleClick={() => {
          setConteudo(true)
        }} />
        {conteudo ? <h1>Título</h1> : ""}
      </header>
    </div>
  );
}

export default App;
