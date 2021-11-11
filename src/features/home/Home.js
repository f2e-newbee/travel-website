import React from 'react'
import Slider from "react-slick";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { HotelCardItem } from './HotelCardItem';
import { ReactComponent as SceneTitle } from '../../assets/title/subtitle-1.svg'
import { ReactComponent as FoodTitle } from '../../assets/title/subtitle-2.svg'
import { ReactComponent as RoomTitle } from '../../assets/title/subtitle-3.svg'

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const PrevArrow = (props) =>{
    const { onClick } = props;

    return(
        <div className="w-32 h-auto absolute top-2/4 -left-24 transform -translate-y-2/4 cursor-pointer md:block hidden" onClick={onClick}>
            <ArrowBackIosNewIcon />
        </div>
    )
}

const NextArrow = (props) =>{
    const { onClick } = props;

    return(
        <div className="w-32 h-auto absolute top-2/4 -right-24 transform -translate-y-2/4 cursor-pointer md:block hidden" onClick={onClick}>
            <ArrowForwardIosIcon />
        </div>
    )
}


export const Home = () => {
    const liveSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };

    const SceneSettings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 1500,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };

    return (
        <div>
            <div className="w-screen h-screen main-banner"></div>
            <section className="text-center max-w-screen-xl my-0 mx-auto my-36 pb-40 border-b border-gray-200">
                <SceneTitle className="my-0 mx-auto mb-10"/>
                <div className="sm:px-20 px-6">
                    <Slider {...SceneSettings}>
                    <div>
                        <div className="w-full h-auto px-4">
                            <img src="/assets/img/bg.jpg" alt="風景" />
                        </div>
                    </div>
                    <div>
                        <div className="w-full h-auto px-4">
                            <img src="/assets/img/bg.jpg" alt="風景" />
                        </div>
                    </div>
                    <div>
                        <div className="w-full h-auto px-4">
                            <img src="/assets/img/bg.jpg" alt="風景" />
                        </div>
                    </div>
                    <div>
                        <div className="w-full h-auto px-4">
                            <img src="/assets/img/bg.jpg" alt="風景" />
                        </div>
                    </div>
                    <div>
                        <div className="w-full h-auto px-4">
                            <img src="/assets/img/bg.jpg" alt="風景" />
                        </div>
                    </div>
                    <div>
                        <div className="w-full h-auto px-4">
                            <img src="/assets/img/bg.jpg" alt="風景" />
                        </div>
                    </div>
                    <div>
                        <div className="w-full h-auto px-4">
                            <img src="/assets/img/bg.jpg" alt="風景" />
                        </div>                   
                    </div>
                    <div>
                        <div className="w-full h-auto px-4">
                            <img src="/assets/img/bg.jpg" alt="風景" />
                        </div>                    
                    </div>
                    <div>
                        <div className="w-full h-auto px-4">
                            <img src="/assets/img/bg.jpg" alt="風景" />
                        </div>                    
                    </div>
                    </Slider>
                </div> 
                <div class="w-full mt-16">
                  <a class="flex align-center justify-center" href="/attractionlist">
                    <p className="font-bold text-secondary">看更多景點</p>
                      <ArrowRightIcon  className="text-secondary"/>
                  </a>
                </div>
            </section>
            <section className="text-center max-w-screen-xl my-0 mx-auto my-36 pb-40 border-b border-gray-200">
                <FoodTitle className="my-0 mx-auto mb-10"/>
                <div className="w-full grid grid-rows-7 grid-cols-4 gap-4 sm:px-20 px-6">
                  <div className="row-span-3 lg:col-span-2 col-span-4">
                    <img className="lg:h-full lg:w-full w-full h-auto"  src="/assets/img/food-4.png" alt="food-1" />
                  </div>
                  <div className="row-span-2 lg:col-span-1 col-span-2">
                    <img className="lg:h-full lg:w-full w-full h-auto" src="/assets/img/food-1.png" alt="food-2" />
                  </div>
                  <div className="row-span-2 lg:col-span-1 col-span-2">
                    <img className="lg:h-full lg:w-full w-full h-auto" src="/assets/img/food-2.png" alt="food-3" />
                  </div>
                  <div className="row-span-3 lg:col-span-2 col-span-4">
                    <img className="lg:h-full lg:w-full w-full h-auto" src="/assets/img/food-3.png" alt="food-4" />
                  </div>
                  <div className="row-span-5 lg:col-span-2 col-span-4">
                    <img className="lg:h-full lg:w-full w-full h-auto" src="/assets/img/food-5.png" alt="food-5" />
                  </div>
                  <a  href="/foodlist" className="lg:row-span-3 row-span-6 lg:col-span-2 col-span-4 bg-secondary flex  justify-center items-center">
                    <div class="flex">
                      <p className="font-bold text-gray-50">看更多景點</p>
                        <ArrowRightIcon  className="text-gray-50"/>
                    </div>
                  </a>
                </div>
            </section>
            <section className="text-center max-w-screen-xl my-0 mx-auto my-36 pb-40">                
                <RoomTitle  className="my-0 mx-auto mb-10"/>
                <div className="sm:px-20 px-6">
                    <Slider className="flex items-center" {...liveSettings}>
                    <div>
                        <HotelCardItem/>
                    </div>
                    <div>
                        <HotelCardItem/>
                    </div>
                    <div>
                        <HotelCardItem/>
                    </div>
                    <div>
                        <HotelCardItem/>
                    </div>
                    <div>
                        <HotelCardItem/>
                    </div>
                    <div>
                        <HotelCardItem/>
                    </div>
                    <div>
                        <HotelCardItem/>
                    </div>
                    <div>
                        <HotelCardItem/>
                    </div>
                    <div>
                        <HotelCardItem/>
                    </div>
                    </Slider>
                </div>
            </section>
        </div>
    )
}
