import React from 'react'

function CardFans({descr, img, fullname, work}) {
    return (
        <div data-aos="zoom-out" className='space-y-4 p-4 w-[300px] h-[300px] bg-white shadow-2xl'>
            <p className="text-base text-gray-500 font-normal sm:font-medium">
                {`"${descr}"`}            
            </p>
            <hr />
            <div className="flex items-center space-x-4 pt-6">
                <img src={img} alt="" className="rounded-full w-[50px] h-[50px]" />
                <div className="space-y-2">
                    <p className="text-lg font-semibold text-gray-800">
                        {fullname}
                    </p>
                    <p className="text-sm font-semibold text-gray-500">
                        {work}
                    </p>

                </div>
            </div>
        </div>
    )
}

export default CardFans
