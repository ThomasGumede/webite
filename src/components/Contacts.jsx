import React from 'react'

function Contacts() {
    return (
        <div className='bg-[#a28aff] text-white md:flex items-center my-16 py-8 md:space-x-6 px-11'>
            <img data-aos="fade-right" src='/img/contact.svg' alt="" className="w-[400px] h-[400px] md:w-[500px] md:h-[500px]" />

            <div data-aos="fade-left" className="flex flex-wrap space-y-6">
                <h1 className="font-bold text-3xl">Get Started With Free Trial</h1>

                <p className="text-base font-normal sm:font-medium">
                    You're just a minute away from never having to pay a bill manually again           
                </p>

                
                <div className="flex flex-col md:flex-row flex-wrap justify-between items-center">
                    <input type="email" name="email" id="text" placeholder='Enter Your Email...' className='input'/>
                    <a href="#home" className='w-max h-[50px] p-3 rounded-md text-lg ml-5 text-white bg-[#fe9200]'>Get Stated</a>  
                </div>

                <p className="text-sm font-normal">
                free 14-day trial . Easy setup . Cancel any time. Check out <a href="#home">Terms of Use</a>   
                </p>
                
            </div>
            
        </div>
    )
}

export default Contacts
