/* Components */
import Infos from './Infos';
import Item from "./Item/Item"

/* Styles */
import './Carousel.scss'
import CarouselStyle from './CarouselStyle';

/* Slider */
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css/autoplay"




const Carousel = () => {
  
  const style = CarouselStyle()

  const infos = Infos()

  return(
    <section className={ style.Container }>


      <Swiper
        modules={[  Navigation, Pagination, Autoplay  ]}
        navigation={  true  }
        pagination={{  clickable: true  }}
        autoplay={{  delay: '7500'  }}
        loop={  true  }
        slidesPerView={  1  }
        spaceBetween={ 50 }
        className={" mySwiper " + style.Swiper}
      >

        {infos.map( values => {
          return(
            <SwiperSlide 
              key={ values.id }
              className={ style.SwiperSlide }
            >


              <Item 
                url={ values.url }
                tittle={ values.tittle }
                text={ values.text } 
              />
              

            </SwiperSlide>
          )
        })}

      </Swiper>


    </section>
  )
}

export default Carousel;