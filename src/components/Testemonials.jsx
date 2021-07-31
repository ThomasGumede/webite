import React from 'react'
import CardFans from './CardFans'



function Testemonials() {

    const state = [
        {
            "id": 1,
            "fullname": "Wanda Qwabe",
            "descr": "I literally couldn't do my job or even manage all the business of being a fully functioning parent and spouse without Todoist.",
            "img": "/img/team-rafiki.svg",
            "work": "CEO Founder @ Huli"
        },
        {
            "id": 2,
            "fullname": "Londiwe Mngenge",
            "descr": "I literally couldn't do my job or even manage all the business of being a fully functioning parent and spouse without Todoist.",
            "img": "/img/team-rafiki.svg",
            "work": "Teach Lead Founder @ Teom"
        }
    ]



    return (
        <div className='flex flex-col md:flex-row justify-between items-center space-y-4 my-16 py-16'>
            <div className="flex flex-col space-y-4">
                
                <h2 data-aos="fade-right" className='bg-[#ebe7ff] py-2 px-4 font-semibold text-base w-max text-[#8a6eff] rounded-md'>Testemonials</h2>

                <div data-aos="fade-right"data-aos="fade-right" className="space-y-3 md:w-[300px]">
                    <h1 className="text-[#1e2472] font-bold text-3xl">See What They Say About Us</h1>
                    <p className="text-base text-gray-500 font-normal sm:font-medium">
                        Create custom application forms for rach role, allowing you.
                    </p>
                </div>
            </div>

            <div className="space-y-5 md:space-x-6 sm:space-y-0 md:flex items-center justify-center">
                {
                    state.map((stat) => (
                        <CardFans  key={stat.id} descr={stat.descr} fullname={stat.fullname} work={stat.work} img={stat.img}/>
                    ))
                }
            </div>


            
        </div>
    )
}

export default Testemonials
