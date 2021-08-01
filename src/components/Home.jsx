import DishItems from "./DishItems"

const Home = () => {
    return (
        <div className='relative space-y-6 w-full my-11 sm:flex items-center sm:justify-between'>
            <div className="text-start space-y-5 w-[300px] xsm:w- md:w-[500px]">
                <h1 className="font-bold font-sans2 text-3xl md:text-5xl">
                    We Serve The Food You Love
                </h1>
                <p className="text-sm text-gray-400 md:text-base">
                    This is type of restaurant which typically serves 
                    food and drinks in addition to light 
                    refreshments such as baked goods or snacks
                </p>
                <div className="space-x-6 md:space-y-10">
                    <a href="#home" className='btn'>Explore Food</a>
                    <a href="#home" className='btn2'>Search</a>
                </div>
            </div>
            
                <img src="/Dishes/dish3.png" alt="" className='sm:w-[300px] sm:h-[300px] md:w-auto md:h-auto'/>

                <div className="space-y-1 hidden md:block">
                    <DishItems />
                    <DishItems />
                    <DishItems />
                    <DishItems />

                </div>
            
            
        </div>
    )
}

export default Home
