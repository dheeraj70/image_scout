
import { useState } from 'react';
import './App.css';
import Content from './components/Content';
import Navbar from './components/Navbar';

function App() {
  const [type,setType]=useState("recent");
  const [clicked,changeClick]=useState(false);
  return (
   <>
    <Navbar changeType={setType} click={clicked} cclick={changeClick}/>
    <Content type={type} click={clicked} cclick={changeClick}/>
   </>
  );
}

export default App;
