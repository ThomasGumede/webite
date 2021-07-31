import { RiSendPlaneFill, RiContactsFill } from "react-icons/ri";
import { GrPersonalComputer } from "react-icons/gr";


function Collab() {
    return (
        <div className="md:flex justify-between items-center space-y-9 my-16">
            <img data-aos="fade-right" src='/img/Telecommuting-amico.svg' alt="" className="w-[400px] h-[400px] md:w-[500px] md:h-[500px]" />

            <div className="space-y-6">
                <h2 data-aos="fade-left" className='bg-[#ebe7ff] py-2 px-4 font-semibold text-base w-max text-[#8a6eff] rounded-md'>Collaborate Better</h2>
                <h1 data-aos="fade-left" className="text-[#1e2472] font-bold text-3xl">There are lot of feature insights</h1>

                <div data-aos="fade-left" className="space-y-3 w-[300px] md:w-[400px]">
                    <div className="flex items-center space-x-4">
                        <GrPersonalComputer className='cardIcon'/>
                        <h3 className="collab">
                            Note that important stuff
                        </h3>
                    </div>
                    <p className="text-base text-gray-500 font-normal sm:font-medium">
                        Access Google's unique insights and machine learning capabilies
                    </p>    
                </div>
                <div data-aos="fade-left" className="space-y-3 w-[300px] md:w-[400px]">
                    <div className="flex items-center space-x-4">
                        <RiContactsFill className='cardIcon'/>
                        <h3 className="collab">
                            Manage Users with life State
                        </h3>
                    </div>
                    <p className="text-base text-gray-500 font-normal sm:font-medium">
                        Process and share your data queckly with easy to use interface and shareable reports
                    </p>    
                </div>
                <div data-aos="fade-left" className="space-y-3 w-[300px] md:w-[400px]">
                    <div className="flex items-center space-x-4">
                        <RiSendPlaneFill className='cardIcon'/>
                        <h3 className="collab">
                            Assign tasks & track progress
                        </h3>
                    </div>
                    <p className="text-base text-gray-500 font-normal sm:font-medium">
                        Assign each task to an owner and follow task progress until completion
                    </p>    
                </div>
            </div>
            
        </div>
    )
}

export default Collab
