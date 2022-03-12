import React from 'react'
import './Testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'


// import Swiper core and required modules
import {Navigation, Pagination} from 'swiper';


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/navigation';
import 'swiper/css';
import 'swiper/css/pagination';


const data=[
  {
    avatar:AVTR1,
    name:"Tina",
    review:"Lorem bla bla"

  },
  {
    avatar:AVTR1,
    name:"Tina",
    review:"Lorem bla bla"

  },
  {
    avatar:AVTR1,
    name:"Tina",
    review:"Lorem bla bla"

  },
]

function Testimonials() {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container test__container"
      modules={[Navigation,Pagination]}
      // navigation
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
      {
        data.map(({avatar,name,review},index)=>{
          return(
            <SwiperSlide key={{index}} className="test">
          <div className="client__avatar">
            <img src={avatar} alt="Avatar One" />
          </div>
            <h5 className='client__name'>{name}</h5>
            <small className='client__review'>{review}</small>
          
        </SwiperSlide>

          )

        })
      }


        
      </Swiper>

    </section>
  )
}

export default Testimonials