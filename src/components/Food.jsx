import { useState, useContext } from "react"

import Card from "./SharedComponets/Card"
import {stateContext} from '../stateManager/stateContext'

function Food() {

    const state = useContext(stateContext)

    //first: slug state for pagination or for displaying different food based on user click
    const [slug, setSlug] = useState('Burgers')

    //Creates ana array of food based on slug provided by the user
    const slugFilteredState = state.filter((stat) => stat.name === slug)
  
 

    return (
        <div className="flex flex-col space-y-6 items-center my-16">
            <h2 className="justify-self-center self-center">
                Our Regular Menu Pack
            </h2>

            <div className="justify-self-center self-center flex items-center space-x-11 w-11/12 md:w-auto overflow-x-auto">
                {
                    state.map((stat) => (
                        <a key={stat.id} href={`#${stat.name}`} className="foodnavbtn my-5" onClick={() => setSlug(stat.name)}>{stat.name}</a>
                    ))
                }
                
            </div>

            <div data-aos='zoom-out' data-aos-duration='2000' className="flex flex-col items-center xsm:grid overflow-auto h-[400px] w-full sm:h-[600px] xsm:grid-cols-2 md:grid-cols-3 lg:h-auto lg:grid-cols-4 2xl:grid-cols-5 gap-6 p-3">
                {
                       
                    slugFilteredState.map((stat) => (
                                
                        stat.data.map((da) => (
                            <Card key={da.id} name={da.name} descr={da.descr} src={da.src} price={da.price} href={da.name}/>
                        ))
                               
                    ))
                                            
                }
            </div>
            
        </div>
    )
}

export default Food
