import { HiOutlineArrowNarrowRight, HiOutlineArrowNarrowLeft } from 'react-icons/hi'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper.min.css'
import Card from './Card';

const PopularFood = ({state}) => {

    SwiperCore.use([Navigation])

    return (
        <div className='space-y-6 w-full my-8'>
            <div className="flex items-center justify-between">
                <h2>Popular Dishes</h2>
                <div className="flex items-center space-x-6">
                    <HiOutlineArrowNarrowLeft className='btnIcon prev' />
                    <HiOutlineArrowNarrowRight className='btnIcon next' />
                </div>
            </div>

            <Swiper
                 spaceBetween={1}
                 slidesPerView={1}
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
                        slidesPerView: 5
                    },

                    1700: {
                        slidesPerView: 6
                    },

                    1800: {
                        slidesPerView: 7
                    }
                 }}
            >
                
                 {
                     state.map((stat) => (
                        
                            stat.data.map((da) => (
                                <SwiperSlide key={stat.id}>
                                    <Card key={da.id} name={da.name} descr={da.descr} src={da.src} price={da.price} href={da.name}/>
                                </SwiperSlide>
                            ))
                         
                     ))
                 }

            </Swiper>
            
            
        </div>
    )
}

export default PopularFood
