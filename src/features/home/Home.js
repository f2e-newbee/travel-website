import React, { useState , useEffect} from 'react'
import Slider from "react-slick";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { HotelCardItem } from './HotelCardItem';
import { ReactComponent as SceneTitle } from '../../assets/title/subtitle-1.svg'
import { ReactComponent as FoodTitle } from '../../assets/title/subtitle-2.svg'
import { ReactComponent as RoomTitle } from '../../assets/title/subtitle-3.svg'
import { useSpring, animated } from 'react-spring'
import { fetchApi } from "../../api";



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
  const [data, setData] = useState([]);
  useEffect(() => {
    // fetchApi("/v2/Tourism/ScenicSpot/Taichung", {
    //   $top: 12,
    // }).then((data) => {
    //   console.log(data);
    // });
    fetchData();
  }, []);

  function fetchData() {
    fetchApi("/v2/Tourism/Hotel/Taipei?$top=30&$filter=contains(Grade,'五星級')&$format=JSON").then((response) => {
      console.log(response.data);
      setData(response.data);
    });
  }

  /** React spring animation */
  const [fadeIn, api] = useSpring(()=>({
    opacity: 1,
    config: { duration: 600 },
    transform: "translate(0px, 0px)",
    from: { opacity: 0, transform: "translate(0, 300px)" },
    to: { opacity: 1, transform: "translate(0, 400px)" },
  }))

  const scrollToBanner = () => {
    if (window.scrollY < 10) {
      api.start({
        from: { opacity: 0, transform: "translate(0, 300px)" },
        to: { opacity: 1, transform: "translate(0, 400px)" }});
    } 
    else{
      api.stop();
    }
  }

  window.addEventListener('scroll', scrollToBanner);    
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
            <div className="w-full h-screen main-banner relative">
                <animated.div style={fadeIn}>
                  <div className="text-center text-gray-50 absolute top-2/4 left-2/4 transform -translate-y-2/4 -translate-x-2/4">
                    <h1 className="text-7xl main-title ">Welcome to Taiwan</h1>
                    <h3 className="text-4xl sub-title text-primary-light">Make you next trip awesome</h3>
                  </div>
                </animated.div>
            </div>
            <section className="text-center max-w-screen-xl mx-auto my-36 mb-0 pb-40 border-b border-gray-200">
                <SceneTitle className="my-0 mx-auto mb-10"/>
                <div className="sm:px-20 px-6">
                    <Slider {...SceneSettings}>
                        <a href="/attractionList" className="w-full h-auto px-4">
                            <img src="/assets/img/home/台北101.png" id="C1_379000000A_000217" alt="台北101" />
                        </a>
                        <a href="/attractionList" className="w-full h-auto px-4">
                            <img src="/assets/img/home/日月潭.png" id="C1_376480000A_000304" alt="日月潭" />
                        </a>
                        <a href="/attractionList" className="w-full h-auto px-4">
                            <img src="/assets/img/home/故宮.png" id="C1_379000000A_000019" alt="國立故宮博物院" />
                        </a>
                        <a href="/attractionList" className="w-full h-auto px-4">
                            <img src="/assets/img/home/愛河.png" id="C1_397000000A_000637" alt="愛河" />
                        </a>
                        <a href="/attractionList" className="w-full h-auto px-4">
                            <img src="/assets/img/home/阿里山.png" id="C1_315081300H_000092" alt="五奇之日出" />
                        </a>
                        <a href="/attractionList" className="w-full h-auto px-4">
                            <img src="/assets/img/home/玉山.png" id="C1_376550000A_000085" alt="玉山國家公園管理處" />
                        </a>
                        <a href="/attractionList" className="w-full h-auto px-4">
                            <img src="/assets/img/home/合歡山.png" id="C1_376480000A_000451" alt="合歡山國家森林遊樂區" />
                        </a>                   
                        <a href="/attractionList" className="w-full h-auto px-4">
                            <img src="/assets/img/home/墾丁.png" id="C1_376550000A_000085" alt="墾丁海水浴場(大灣)" />
                        </a>                    
                        <a href="/attractionList" className="w-full h-auto px-4">
                            <img src="/assets/img/home/中正紀念堂.png" alt="中正紀念堂" />
                        </a>                    
                    </Slider>
                </div> 
                <div class="w-full mt-16">
                  <a class="flex align-center justify-center" href="/attractionlist">
                    <p className="font-bold text-secondary">看更多景點</p>
                      <ArrowRightIcon  className="text-secondary"/>
                  </a>
                </div>
            </section>
            <section className="text-center max-w-screen-xl my-0 mx-auto py-36 pb-40 border-b border-gray-200">
                <FoodTitle className="my-0 mx-auto mb-10"/>
                <div className="w-full grid grid-rows-7 grid-cols-4 gap-4 sm:px-20 px-6">
                  <div className="row-span-3 lg:col-span-2 col-span-4">
                    <img className="shadow-inner lg:h-full lg:w-full w-full h-auto"  src="/assets/img/food-4.png" alt="food-1" />
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
                    <div className="flex">
                      <p className="font-bold text-gray-50">查詢餐廳</p>
                        <ArrowRightIcon  className="text-gray-50"/>
                    </div>
                  </a>
                </div>
            </section>
            <section className="text-center max-w-screen-xl my-0 mx-auto py-36 pb-40">                
                <RoomTitle  className="my-0 mx-auto mb-10"/>
                <div className="sm:px-20 px-6">
                    <Slider className="flex items-center" {...liveSettings}>
                    {
                      data.map((item) =>{
                          if(item.Picture.PictureUrl1){
                              return(
                                  <HotelCardItem 
                                      key={item.ID}
                                      webUrl={item.WebsiteUrl}
                                      city={item.City}
                                      url={item.Picture.PictureUrl1}
                                      name={item.Name}
                                  />
                              )
                          }   
                          return null
                    })}
                    </Slider>
                </div>
            </section>
        </div>
    )
}
