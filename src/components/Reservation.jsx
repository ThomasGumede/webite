const Reservation = () => {
    return (
        <div className='space-y-6 w-full sm:flex items-center justify-between my-11 p-4 sm:p-11 md:p-20'>
            <div data-aos="fade-down" className="text-start space-y-7 sm:w-[600px]">
                <h2>
                    Do You Have Any Dinner Plan Today? Reserve Your Table
                </h2>
                <p className="text-sm text-gray-400 md:text-base">
                    Make online reservations, read resraurant reviews from diners, 
                    and earn points towards free meals. OpenTable is a real-time online reservation
                </p>
                <div>
                    <a href="#home" className="btn">Make Reservation</a>
                </div>
            </div>
            
            <div data-aos="fade-up">
                <img src="/Dishes/d2.png" alt="" className='sm:w-[300px] sm:h-[300px] md:w-auto md:h-auto'/>
            </div>
        </div>
    )
}

export default Reservation
