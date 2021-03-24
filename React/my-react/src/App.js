// import React from 'react' //COM CLASS
import React from "react";
import Title from "./Title"
import { useState } from 'react'; // useState
import logo from './logo.svg';
import './App.css';

//COM FUNCTION:
function App() {
  const [title, setTitle] = useState("Título"); //com useState
  // title = value; subTitle = function;
  const [showTitle, setShowTitle] = useState(false);

  const handleClick = () => {
    setTitle("Novo Título");
    setShowTitle(!showTitle);
  };


  return (
    <div className="App">
      <header className="App-header">
        {showTitle && <Title text={title} />}
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
          Learn React
        </a>
        <button onClick={handleClick}>Mostra título</button>

      </header>
    </div >
  );
}

//COM CLASS
// class App extends React.Component {

//   render() { //return substituído por render
//     return (
//       <div className="App">
//         <header className="App-header">
//           <h1>Título 1</h1>
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//         </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//         </a>
//         </header>
//       </div>
//     );
//   }
// }
export default App;
