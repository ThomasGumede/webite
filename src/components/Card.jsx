const Card = ({name, src, descr, price, href}) => {
    return (
        <div className='block w-[250px] bg-white my-4 cursor-pointer text-center h-[300px] space-y-4 shadow-xl p-2'>
            <div className="flex flex-col items-center">
                <img src={`${src}`} alt="" className='w-[120px] h-[120px]'/>
            </div>
            <h3 className="text-xl text-[#472b20] font-bold font-sans2">
                {name}
            </h3>
            <p className="text-sm truncate text-gray-600">
                {descr}
            </p>
            <div className="flex items-center justify-between">
                <a href={`#${href}`} className="text-lg text-[#472b20] font-sans2 font-semibold">{price}</a>
                <a href={`#${href}`} className="text-base border-2 border-[#f3bc58] py-2 px-3 rounded-full transition-all duration-500 ease-in hover:bg-[#f3bc58]">Add to cart</a>
            </div>
        </div>
    )
}

export default Card
