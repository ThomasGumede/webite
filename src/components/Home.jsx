import { useContext } from "react"
import DishItems from "./SharedComponets/DishItems"
import {stateContext} from '../stateManager/stateContext'

const Home = () => {

    const state = useContext(stateContext)

    return (
        <div id='#home' className='relative space-y-6 w-full sm:flex items-center justify-between my-16'>
            <div data-aos='zoom-in' data-aos-duration='1000' className="text-start space-y-5 sm:w-[500px]">
                <h2>
                    We Serve The Food You Love
                </h2>
                <p className="text-sm text-gray-400 md:text-base">
                    This is type of restaurant which typically serves 
                    food and drinks in addition to light 
                    refreshments such as baked goods or snacks
                </p>
                <div className="space-x-6 flex items-center">
                    <a href="#home" className='btn'>Explore Food</a>
                    <a href="#home" className='btn2'>Search</a>
                </div>
            </div>

            <div data-aos='zoom-in' data-aos-duration='1000'>
                <img src="/Dishes/d3.png" alt="" className='sm:w-[300px] sm:h-[300px] md:w-auto md:h-auto'/>
            </div>

            <div className="space-y-1 hidden md:block">
                    {/* Map through state and get name, image uri and id */}
                {
                    state.map((stat) => (
                        <DishItems key={stat.id} name={stat.name} src={stat.src} href={state.name}/>
                    ))
                }

            </div>
            
            
        </div>
    )
}

export default Home
