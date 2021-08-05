import { useContext } from "react"
import {  SwiperSlide } from 'swiper/react';

import HorizontalSlider from './SharedComponets/HorizontalSlider'
import Card from './SharedComponets/Card';
import {stateContext} from '../stateManager/stateContext'

const PopularFood = () => {
    const state = useContext(stateContext)

    return (
        
        <HorizontalSlider title="Popular Dishes">
            {
                state.map((stat) => (
                        
                    stat.data.map((da) => (
                        <SwiperSlide key={da.id}>
                            <Card anim='zoom-in' name={da.name} descr={da.descr} src={da.src} price={da.price} href={da.name}/>
                        </SwiperSlide>
                    ))
                         
                ))
            }
        </HorizontalSlider>
    )
}

export default PopularFood
