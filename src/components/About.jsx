import DishItems from "./DishItems"

const About = ({state}) => {
    return (
        <div className='space-y-6 my-16 md:my-20 flex flex-col sm:flex-row space-x-8 justify-between items-center sm:space-y-0 lg:m-20'>
            <img src="/Salads/Chef.jpg" alt="" className='w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-2xl sm:rounded-full' />
            <div className="space-y-6 sm:w-[300px] md:w-[500px]">
                <h2>
                    We are more than multiple Services
                </h2>
                <p className="text-sm text-gray-400 md:text-base">
                    This is type of restaurant which typically serves 
                    food and drinks in addition to light 
                    refreshments such as baked goods or snacks
                </p>

                <div className="grid grid-cols-2">
                    {
                        state.map((stat) => (
                            <DishItems key={stat.id} name={stat.name} src={stat.src} href={state.name}/>
                        ))
                    }
                </div>
                <div className="block">
                    <a href="#home" className="btn">About Us</a>
                </div>
                
            </div>
        </div>
    )
}

export default About
