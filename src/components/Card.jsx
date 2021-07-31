import React from 'react'
import {RiFileCopyFill} from 'react-icons/ri'
import {TiTick} from 'react-icons/ti'
import {FaFileSignature} from 'react-icons/fa'

function Card() {
    return (
        <>
        <div data-aos="fade-left" data-aos-delay='30' className='card'>
            <div className="w-max">
                <RiFileCopyFill className='cardIcon'  />
            </div>

            <h4 className="font-bold text-xl text-[#1e2472]">Fundamental Nature of collaboration</h4>

            <p className="text-base text-gray-500">psychological need to be more deliberate about building relationships</p>

            <p className="text-[#8a6eff] font-medium text-sm sm:text-base mt-5">Learn How</p>
        </div>

        <div data-aos="fade-left" data-aos-delay='80'  className='card'>
            <div className="w-max">
                <TiTick className='cardIcon'  />
            </div>

            <h4 className="font-bold text-xl text-[#1e2472]">Successful collaboration still depends on trust</h4>

            <p className="text-base text-gray-500">psychological need to be more deliberate about building relationships</p>

            <p className="text-[#8a6eff] font-medium text-sm sm:text-base mt-5">Learn How</p>
        </div>

        <div data-aos="fade-left" data-aos-delay='120' className='card'>
            <div className="w-max">
                <FaFileSignature className='cardIcon'  />
            </div>

            <h4 className="font-bold text-xl text-[#1e2472]">The improved work-life integration has enabled</h4>

            <p className="text-base text-gray-500">psychological need to be more deliberate about building relationships</p>

            <p className="text-[#8a6eff] font-medium text-sm sm:text-base mt-5">Learn How</p>
        </div>
        
        </>
    )
}

export default Card
