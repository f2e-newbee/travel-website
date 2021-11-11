import React from 'react'
import Slider from "react-slick";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import InfoIcon from '@mui/icons-material/Info';
import IconButton from '@mui/material/IconButton';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { HotelCardItem } from './HotelCardItem';
import { ReactComponent as SceneTitle } from '../../assets/title/subtitle-1.svg'
import { ReactComponent as FoodTitle } from '../../assets/title/subtitle-2.svg'
import { ReactComponent as RoomTitle } from '../../assets/title/subtitle-3.svg'
import { height } from '@mui/system';

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
        <div className="w-32 h-auto absolute top-2/4 -left-24 transform -translate-y-2/4 cursor-pointer" onClick={onClick}>
            <ArrowBackIosNewIcon />
        </div>
    )
}

const NextArrow = (props) =>{
    const { onClick } = props;

    return(
        <div className="w-32 h-auto absolute top-2/4 -right-24 transform -translate-y-2/4 cursor-pointer" onClick={onClick}>
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
            <img src="/assets/img/bg.jpg" alt="風景" />
            <section className="text-center max-w-screen-xl my-0 mx-auto my-36 pb-40 border-b border-gray-200">
                <SceneTitle className="my-0 mx-auto mb-10"/>
                <div className="px-20">
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
                        </div>                    </div>
                    <div>
                        <div className="w-full h-auto px-4">
                            <img src="/assets/img/bg.jpg" alt="風景" />
                        </div>                    </div>
                    <div>
                        <div className="w-full h-auto px-4">
                            <img src="/assets/img/bg.jpg" alt="風景" />
                        </div>                    </div>
                    </Slider>
                </div> 
            </section>
            <section className="text-center max-w-screen-xl my-0 mx-auto my-36 pb-40 border-b border-gray-200">
                <FoodTitle className="my-0 mx-auto mb-10"/>
                <div className="w-full grid grid-rows-7 grid-cols-4 gap-4 px-20">
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
                  <div className="row-span-3 lg:col-span-2 col-span-4 bg-blue-700"></div>
                </div>
            </section>
            <section className="text-center max-w-screen-xl my-0 mx-auto my-36 pb-40">                
                <RoomTitle  className="my-0 mx-auto mb-10"/>
                <div className="px-20">
                    <Slider className="flex align-item-center" {...liveSettings}>
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

const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
      rows: 1,
      cols: 1,
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
      author: '@arwinneil',
      rows: 4,
      cols: 4,
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
      cols: 2,
    },
  ];