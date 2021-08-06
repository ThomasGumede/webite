const FeedBackCard = ({name, src}) => {
    return (
        <div className='flex flex-col items-center w-[240px] sm:w-[290px] m-2 bg-[#fffcf7] cursor-pointer rounded-2xl group h-[360px] space-y-7 hover:shadow-xl p-4'>
            <div data-aos='fade-down'>
                <p className="text-lg text-gray-600">
                    "This place is great! Atmosphere is chill 
                    and cool but the staff is also really friendly. 
                    They know what they're doing and what they're talking about"
                </p>  
            </div>
            <div data-aos='fade-down' data-aos-delay='200' className="self-start space-y-3">
                <div>
                    <img src={`${src}`} alt="" className='w-[70px] h-[70px] rounded-full' />
                </div>
                <h3 className="text-xl text-[#472b20] font-bold font-sans2">
                    {name}
                </h3>
            </div>
        </div>
    )
}

export default FeedBackCard
