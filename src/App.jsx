import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from "react"
import Navbar from './Components/Navbar/Navbar';
import Login from './Components/Login/Login';
import Routes from "./Routes"


function App() {
  return (
  <div className="App">
        <div>
          <Navbar />
          {Routes}
        </div>
    </div>
  );
}

export default App;
