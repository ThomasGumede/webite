import React from 'react'

function Account() {
    return (
        <div data-aos="fade-up" className="flex space-y-8 flex-col md:flex-row items-center justify-between bg-[#f6f3f9] py-16 px-14 my-14 rounded-md">
            <div className="space-y-3 md:w-[400px]">
                <h1 className="text-[#1e2472] font-bold text-3xl">Get An Account Now</h1>
                <p className="text-base text-gray-500 font-normal sm:font-medium">
                    I had the pleasure of working for a few years on the IBM Design team in Austin, Texas
                </p>
            </div>

            {/* <a href="#home" className='btn'>Get an account</a>
            <a href="#home" className='btn2'>Book a demo</a> */}

            <div className="flex space-x-6 items-center justify-between md:justify-start">
                    <a href="#home" className="btn">Get an account </a>
                    <a href="#home" className="btn2">Book a demo</a>
                </div>
        </div>
    )
}

export default Account
