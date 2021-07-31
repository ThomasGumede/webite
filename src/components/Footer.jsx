import React from 'react'

function Footer() {

    const state = [
        {
            "id": 1,
            "title": "Products",
            "items": ['Features', 'Pricing', 'Request a demo']
        },
        {
            "id": 2,
            "title": "Solutions",
            "items": ['Attract Candidates', 'Reduce HR Admin', 'Make Better Hire', 'Reduce HR speed']
        },
        {
            "id": 3,
            "title": "Support",
            "items": ['Live Chat', 'Contact Us', 'Help Guides']
        }
    ]

    return (
        <div className="space-y-6 my-16 py-11 px-7 flex flex-col justify-between">

            <div className="flex flex-col md:flex-row space-y-9 items-center justify-between">
                {
                    state.map((stat) => (
                        <div key={stat.id} className="space-y-5 text-left">
                            <h1 className="text-gray-700 font-bold text-xl">{stat.title}</h1>

                            {stat.items.map((item) => (
                                <p key={item} className="text-base text-gray-500 font-normal sm:font-medium">{item}</p>
                            ))}            
                        </div>
                    ))
                }
            </div>
            
            <div className="self-center justify-self-center flex flex-col md:flex-row items-center space-x-6">
                <a href="#home" className="text-[#1e2472] text-lg font-bold md:text-xl">Omnifesto.</a>
                <p className="text-sm text-gray-500">
                    @2020 Omnifesto.
                </p>
            </div>
        </div>
    )
}

export default Footer
