import HorizontalSlider from "./SharedComponets/HorizontalSlider";
import FeedBackCard from "./SharedComponets/FeedBackCard";
import {  SwiperSlide } from 'swiper/react';

const Testemonials = () => {
    return (
        <HorizontalSlider src="/Dishes/d3.png" title='What Our Customer Say'>
            <SwiperSlide>
                <FeedBackCard src="/Dishes/d3.png" name='Lolly Pops' />
            </SwiperSlide>
            <SwiperSlide>
                <FeedBackCard src="/Dishes/d3.png" name='Hommy Blond' />
            </SwiperSlide>
            <SwiperSlide>
                <FeedBackCard src="/Dishes/d3.png" name='Zimy Dolly' />
            </SwiperSlide>
            <SwiperSlide>
                <FeedBackCard src="/Dishes/d3.png" name='Sozs Fessings'/>
            </SwiperSlide>
            <SwiperSlide>
                <FeedBackCard src="/Dishes/d3.png" name='Azzy Gasddy'/>
            </SwiperSlide>
            <SwiperSlide>
                <FeedBackCard src="/Dishes/d3.png" name='Assisy Azzille' />
            </SwiperSlide>
            <SwiperSlide>
                <FeedBackCard src="/Dishes/d3.png" name='Assisy Azzy' />
            </SwiperSlide>
            <SwiperSlide>
                <FeedBackCard src="/Dishes/d3.png" name='Resapons Devs' />
            </SwiperSlide>
            
        </HorizontalSlider>
    )
}

export default Testemonials
