const ChefsCard = ({src, fullName}) => {
    return (
        <div className='flex flex-col items-center w-[240px] sm:w-[290px] m-2 bg-[#fffcf7] cursor-pointer rounded-2xl group h-[360px] space-y-4 hover:shadow-xl p-4'>
            <div data-aos='flip-left' data-aos-duration='3000' data-aos-duration='1000' className="rounded-xl">
                <img src={`${src}`} alt="" className='w-[220px] h-[280px] sm:w-[270px] rounded-2xl group-hover:shadow-xl'/>
            </div>
            <h3 data-aos='fade-down' className="text-2xl text-[#472b20] font-bold font-sans2 group-hover:shadow-xl">
                {fullName}
            </h3>
        </div>
    )
}

export default ChefsCard
