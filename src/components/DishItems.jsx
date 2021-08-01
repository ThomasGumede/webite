const DishItems = ({children, href}) => {
    return (
        <div className="flex items-center justify-center space-x-2 w-max m-2 rounded-full p-1 shadow-xl transition-all duration-500 ease-linear hover:animate-bounce">
            <img src="/Dishes/dish3.png" alt="" className='w-[35px] h-[35px]'/>
            <a href="#home" className='text-sm text-gray-700 font-semibold'>Dishes</a>
        </div>
    )
}

export default DishItems
