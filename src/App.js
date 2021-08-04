import {useState, useEffect} from 'react'
import axios from 'axios'

import About from "./components/About";
import Food from "./components/Food";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import PopularFood from "./components/PopularFood";

function App() {

  const [state, setState] = useState([])

  // getting data from json file located on public folder
  useEffect( () => {
    axios.get('Data.json').then((response) => {
      setState(response.data)
    })
  }, [ ])


  
  return (
    <div className='mx-4 sm:mx-9 md:mx-12'>
      <Navbar />
      <Home state={state}/>
      <PopularFood state={state}/>
      <About state={state}/>
      <Food state={state}/>
    </div>
  );
}

export default App;
