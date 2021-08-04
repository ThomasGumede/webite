import { useState } from "react"

import Card from "./Card"

function Food({state}) {

    const [slug, setSlug] = useState('Burgers')

    // useEffect(() => (
    //     onSetSlug
    // ), [slug])

    // const onSetSlug = (params) => {
    //     setSlug(params)
    // }

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

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-6 p-3">
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
