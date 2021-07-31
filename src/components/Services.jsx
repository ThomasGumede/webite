import React from 'react'
import Card from './Card'

function Services() {
    return (
        <div className="space-y-5 mt-11">
            <h2 className='bg-[#ebe7ff] py-2 px-4 font-semibold text-base w-max text-[#8a6eff] rounded-md'>Services</h2>
            <div className="flex flex-col space-y-4 md:flex-row md:justify-between">
                <div className="space-y-3 md:w-[400px]">
                    <h1 className="text-[#1e2472] font-bold text-3xl">Our Special Services</h1>
                    <p className="text-base text-gray-500 font-normal sm:font-medium">
                        Bring Everyone together at the same time.
                        Brainstorm, map-out experiances, and drop in feedback -all in one space
                    </p>
                </div>

                <h2 className="py-2 px-4 text-center font-semibold text-base w-max h-11 text-[#8a6eff] rounded-md border-2 border-[#8a6eff]">Explore More</h2>
            </div>

            <div className="flex flex-col justify-between sm:flex-row flex-wrap items-center">
                <Card />
            </div>
        </div>
    )
}

export default Services
