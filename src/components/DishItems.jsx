const DishItems = ({name, href, src}) => {
    return (
        <div className="flex items-center justify-center space-x-2 w-max my-2 rounded-full p-1 shadow-xl transition-all duration-500 ease-linear hover:animate-bounce">
            <img src={`${src}`} alt="" className='w-[35px] h-[35px]'/>
            <a href={`#${href}`} className='text-sm text-gray-700 font-semibold'>{name}</a>
        </div>
    )
}

export default DishItems
