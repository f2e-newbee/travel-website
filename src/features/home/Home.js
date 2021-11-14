import React, { useState , useEffect} from 'react'
import Slider from "react-slick";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Food1 from '../../assets/img/food-1.png';
import Food2 from '../../assets/img/food-2.png';
import Food3 from '../../assets/img/food-3.png';
import Food4 from '../../assets/img/food-4.png';
import Food5 from '../../assets/img/food-5.png';
import { BannerImgs } from '../../assets/BannerImg';
import { HotelCardItem } from './HotelCardItem';
import { ReactComponent as SceneTitle } from '../../assets/title/subtitle-1.svg'
import { ReactComponent as FoodTitle } from '../../assets/title/subtitle-2.svg'
import { ReactComponent as RoomTitle } from '../../assets/title/subtitle-3.svg'
import { useSpring, animated } from 'react-spring'
import { fetchApi } from "../../api";
import { TopViewItem } from './TopViewItem';
import { Link } from "react-router-dom";


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
    fetchHotelData();
  }, []);

  /** 取得住宿資料 */
  function fetchHotelData() {
    fetchApi("/v2/Tourism/Hotel/Taipei",{
      $filter: "Grade eq '五星級'",
      $format: "JSON",
    }).then((response) => {
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
                <a href="https://unsplash.com/@scphotography120" className="absolute bottom-5 right-5 text-white">Photo by Sam Chang</a>
            </div>
            <section className="text-center max-w-screen-xl mx-auto my-36 mb-0 pb-40 border-b border-gray-200">
                <SceneTitle className="my-0 mx-auto mb-10"/>
                <div className="sm:px-20 px-6">
                    <Slider {...SceneSettings}>
                        {
                          BannerImgs.map((img) =>{
                            return(
                             <TopViewItem 
                                          id={img.id}
                                          key={img.id}
                                          url={img.url}
                                          desc={img.desc}
                                          name={img.name}
                             />
                            )
                          })
                        }
                    </Slider>
                </div> 
                <div className="w-full mt-16">
                  <Link className="flex align-center justify-center" to="/attractionlist">
                    <p className="font-bold text-secondary">看更多景點</p>
                      <ArrowRightIcon  className="text-secondary"/>
                  </Link>
                </div>
            </section>
            <section className="text-center max-w-screen-xl my-0 mx-auto py-36 pb-40 border-b border-gray-200">
                <FoodTitle className="my-0 mx-auto mb-10"/>
                <div className="w-full grid grid-rows-7 grid-cols-4 gap-4 sm:px-20 px-6">
                  <div className="row-span-3 lg:col-span-2 col-span-4">
                    <img className="shadow-inner lg:h-full lg:w-full w-full h-auto"  src={Food4} alt="food-4" />
                  </div>
                  <div className="row-span-2 lg:col-span-1 col-span-2">
                    <img className="lg:h-full lg:w-full w-full h-auto" src={Food1} alt="food-1" />
                  </div>
                  <div className="row-span-2 lg:col-span-1 col-span-2">
                    <img className="lg:h-full lg:w-full w-full h-auto" src={Food2} alt="food-2" />
                  </div>
                  <div className="row-span-3 lg:col-span-2 col-span-4">
                    <img className="lg:h-full lg:w-full w-full h-auto" src={Food3} alt="food-3" />
                  </div>
                  <div className="row-span-5 lg:col-span-2 col-span-4">
                    <img className="lg:h-full lg:w-full w-full h-auto" src={Food5}  alt="food-5" />
                  </div>
                  <Link to="/foodlist" className="lg:row-span-3 row-span-6 lg:col-span-2 col-span-4 bg-secondary flex  justify-center items-center">
                    <div className="flex">
                      <p className="font-bold text-gray-50">查詢餐廳</p>
                        <ArrowRightIcon  className="text-gray-50"/>
                    </div>
                  </Link>
                </div>
            </section>
            <section className="text-center max-w-screen-xl my-0 mx-auto py-36 pb-40">                
                <RoomTitle  className="my-0 mx-auto mb-10"/>
                <div className="sm:px-20 px-6">
                    <Slider className="flex items-center" {...liveSettings}>
                    {
                      data && data.map((item) =>{
                        return(
                            <HotelCardItem 
                                key={item.ID}
                                webUrl={item.WebsiteUrl}
                                city={item.City}
                                url={item.Picture.PictureUrl1}
                                name={item.Name}
                            />
                        )
                           
                    })}
                    </Slider>
                </div>
            </section>
        </div>
    )
}

