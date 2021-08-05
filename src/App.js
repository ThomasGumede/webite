import { FoodList } from "./stateManager/stateContext"; 
import Aos from "aos";
import 'aos/dist/aos.css'

import About from "./components/About";
import Food from "./components/Food";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import PopularFood from "./components/PopularFood";
import Reservation from './components/Reservation';
import Chefs from "./components/Chefs";

function App() {

  Aos.init({
    offset:30
  })

  return (
    <FoodList>
      <div className='mx-4 sm:mx-9 md:mx-12'>
        <Navbar />
        <Home />
        <PopularFood />
        <About />
        <Food />
        <Reservation />
        <Chefs />
      </div>
    </FoodList>
    
  );
}

export default App;
