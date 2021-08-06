const Card = ({name, src, descr, price, href, anim}) => {
    return (
        <div data-aos={`${anim}`} className='block w-[240px] sm:w-[290px] m-2 bg-white cursor-pointer group rounded-2xl text-center h-[360px] space-y-6 hover:shadow-xl p-2'>
            <div className="flex flex-col items-center">
                <img src={`${src}`} alt="" className='w-[120px] h-[110px]'/>
            </div>
            <h3 className="text-xl text-[#472b20] font-bold font-sans2">
                {name}
            </h3>
            <p className="text-sm text-gray-600">
                {descr}
            </p>
            <div className="flex items-center justify-between">
                <a href={`#${href}`} className="text-lg text-[#472b20] font-sans2 font-semibold">{price}</a>
                <a href={`#${href}`} className="text-base bg-[#f3bc58] p-2 rounded-full group-hover:shadow-xl">Add to cart</a>
            </div>
        </div>
    )
}

export default Card
