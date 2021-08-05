import { HiOutlineArrowNarrowRight, HiOutlineArrowNarrowLeft } from 'react-icons/hi'
import {Swiper } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper.min.css'


const HorizontalSlider = ({ children, title }) => {

    SwiperCore.use([Navigation])

    return (
        <div className='space-y-6 w-full my-16 md:my-32'>
            <div className="flex items-center justify-between">
                <h2>{title}</h2>
                <div className="flex items-center space-x-6">
                    <HiOutlineArrowNarrowLeft className='btnIcon prev' />
                    <HiOutlineArrowNarrowRight className='btnIcon next' />
                </div>
            </div>

            <Swiper
                 spaceBetween={1}
                 slidesPerView={1.3}
                 navigation={{
                     prevEl: '.prev',
                     nextEl: '.next'
                 }}
                 breakpoints={{
                    540: {
                        slidesPerView: 2,
                        spaceBetween: 3
                    },

                    1000: {
                        slidesPerView: 3
                    },

                    1200: {
                        slidesPerView: 4
                    },

                    1400: {
                        slidesPerView: 4.5
                    },

                    1700: {
                        slidesPerView: 5
                    },

                    1800: {
                        slidesPerView: 5.5
                    }
                 }}
            >
                {children}
            </Swiper>
            
            
        </div>
    )
}

export default HorizontalSlider
