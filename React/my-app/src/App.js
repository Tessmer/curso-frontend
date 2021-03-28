// import React from 'react' //COM CLASS
// VAI P/ HOME: import React from "react";
// VAI P/ HOME: import Title from "./Title"
// import { useState } from 'react'; // useState
// VAI PARA A PÁGINA HOME:
// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import Home from "./Home";
import Comments from "./Comments";
import Comment from "./Comment";

//COM FUNCTION:
function App() {
  return <Router>
    <Switch>
      <Route path="/comments">
        <Comments />
      </Route>
      <Route path="/comment">
        <Comment />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
}

export default App;
