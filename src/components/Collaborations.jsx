import React from 'react'

function Collaborations() {

    const states = [
        {
            "id": 1,
            "name": "Collaboration",
            "title": "Team collaboration in real time",
            "descriptions": "Bring Everyone together at the same time. Brainstorm, map-out experiances, and drop in feedback -all in one space",
            "img": "/img/team-cuate.svg"
        },
        {
            "id": 2,
            "name": "Reporting",
            "title": "Right People, Right Tools",
            "descriptions": "Critical to success is ensuring you have the right people working to solve problems together. Traditionally this meant designers working alongside developers and product managers",
            "img": "/img/team-rafiki.svg",
            "flex": "flex-row-reverse"
        },
        {
            "id": 3,
            "name": "Insights",
            "title": "Ideating in a remote environment",
            "descriptions": "I had the pleasure of working for a few years on the  IBM Design team in Austin, Texas. If you haven't yet, I encourage you to watch The Loop, a film on the design program at the heart of IBM's design-lead transformation",
            "img": "/img/bro.svg"
        }
    ]

    return (
        <>

            {states.map((state) => (
            <div key={state.id} className={`md:flex ${state.flex} justify-between items-center space-y-9 my-16`}>
                <img data-aos="fade-right" src={`${state.img}`} alt="" className="w-[400px] h-[400px] md:w-[500px] md:h-[500px]" />

                
                <div data-aos="fade-left" className="flex flex-col space-y-4">

                    <h2 className='bg-[#ebe7ff] py-2 px-4 font-semibold text-base w-max text-[#8a6eff] rounded-md'>{state.name}</h2>

                    <div className="space-y-3 md:w-[400px]">
                        <h1 className="text-[#1e2472] font-bold text-3xl">{state.title}</h1>
                        <p className="text-base text-gray-500 font-normal sm:font-medium">
                            {state.descriptions}
                        </p>
                    </div>

                    <h2 className="py-2 px-4 text-center font-semibold text-base w-max h-11 text-white rounded-md border-2 bg-[#8a6eff]">Explore More</h2>
                </div>
            </div> 
            ))}
        
        </>
        
    )
}

export default Collaborations
