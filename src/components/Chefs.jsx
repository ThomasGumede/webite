import ChefsCard from "./SharedComponets/ChefsCard";
import HorizontalSlider from './SharedComponets/HorizontalSlider'
import {  SwiperSlide } from 'swiper/react';


const Chefs = () => {
    return (
        <HorizontalSlider title="Meet Our Chefs">
            <SwiperSlide>
                <ChefsCard src='/Chefs/chef.png' fullName="Unknown Man" />
            </SwiperSlide>
            <SwiperSlide>
                <ChefsCard src='/Chefs/chef2.jpg' fullName="Google Cheffy" />
            </SwiperSlide>
            <SwiperSlide>
                <ChefsCard src='/Chefs/chef1.jpg' fullName="Amazon Cheffy" />
            </SwiperSlide>
            <SwiperSlide>
                <ChefsCard src='/Chefs/chef3.jpg' fullName="Moodle Zozo" />
            </SwiperSlide>
            <SwiperSlide>
                <ChefsCard src='/Chefs/chef4.jpg' fullName="Zim Dollar" />
            </SwiperSlide>
            <SwiperSlide>
                <ChefsCard src='/Chefs/chef5.jpg' fullName="Izzy Ezzy" />
            </SwiperSlide>
            <SwiperSlide>
                <ChefsCard src='/Chefs/chef6.jpg' fullName="Zoom Flesh" />
            </SwiperSlide>
            <SwiperSlide>
                <ChefsCard src='/Chefs/chef7.jpg' fullName="Zeyn Blumber" />
            </SwiperSlide>
            <SwiperSlide>
                <ChefsCard src='/Chefs/chef8.jpg' fullName="Gudji Johnny" />
            </SwiperSlide>
        </HorizontalSlider>
    )
}

export default Chefs
