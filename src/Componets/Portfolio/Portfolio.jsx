import React , { useContext } from 'react'
import './Portfolio.css'
import{Swiper,SwiperSlide} from 'swiper/react'
import Newsapp from "../../img/NewsApp.PNG"
import Spacesite from "../../img/Spacesite.PNG"
import Blogsite from "../../img/Blogsite.PNG"
import TravelSite from "../../img/travelsite.PNG"
import Portfolio1 from "../../img/Portfolio.PNG"
import 'swiper/css'
import { themeContext } from "../../Context"
const Portfolio = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

  return (
    <div className="portfolio" id='Portfolio'>
        {/* heading */}
        <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
        <span>Portfolio</span>

        {/* slider */}

        <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider'
        >
            <SwiperSlide>
                <a href="https://github.com/aditya-soni53/NewApp-React" rel="noreferrer" target='_blank' ><img src={Newsapp} alt="" /></a>
            </SwiperSlide>

            <SwiperSlide>
                <a href="https://aditya-soni53.github.io/SpaceSite/" rel="noreferrer" target='_blank' ><img src={Spacesite} alt="" /></a>
            </SwiperSlide>

            <SwiperSlide>
                <a href="https://aditya-soni53.github.io/BlogSIte/" rel="noreferrer" target='_blank'><img src={Blogsite} alt="" /></a>
            </SwiperSlide>

            <SwiperSlide>
                <a href="https://64f98facd7d999549c54ebde--golden-clafoutis-d20805.netlify.app/" rel="noreferrer" target='_blank' ><img src={TravelSite} alt="" /></a>
            </SwiperSlide>

            <SwiperSlide>
                <a href="https://aditya-soni53.github.io/Portfolio/" rel="noreferrer" target='_blank' ><img src={Portfolio1} alt="" /></a>
            </SwiperSlide>

        </Swiper>
    </div>
  )
}

export default Portfolio