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
import { TopViewItem } from './TopViewItem';


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
    fetchData();
  }, []);

  /** 取得住宿資料 */
  function fetchHotelData() {
    fetchApi("/v2/Tourism/Hotel/Taipei?$top=30&$filter=contains(Grade,'五星級')&$format=JSON").then((response) => {
      setData(response.data);
    });
  }

  function fetchData() {
    fetchApi("/v2/Tourism/ScenicSpot?$top=30&$filter=contains(name,'中正紀念堂')&$format=JSON").then((response) => {
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
                          bannerImg.map((img) =>{
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
                  <a className="flex align-center justify-center" href="/attractionlist">
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


const bannerImg = [
  {
    id: "C1_379000000A_000217",
    name: "台北101",
    url: "/assets/img/home/台北101.png",
    desc: "臺北101購物中心為地上5樓，地下1樓的購物空間，23000坪，是臺灣首座國際頂級購物中心。擁有許多精品旗艦店，消費者可以享受到最多樣的選擇，與全球流行零時差，輕鬆擁有愉悅的購物時刻。"
  },
  {
    id: "C1_376480000A_000304",
    name: "日月潭",
    url: "/assets/img/home/日月潭.png",
    desc: "日月潭是台灣知名天然湖泊，海拔760公尺，四周群山疊翠，氣勢恢宏；湖光山色，景致如畫。潭中盛產各種魚類，味道鮮美，潭邊美景更是不勝枚舉，四時晨昏都有不同的景致，是國內最大內陸湖。"
  },
  {
    id: "C1_379000000A_000019",
    name: "國立故宮博物院",
    url: "/assets/img/home/故宮.png",
    desc: "國立故宮博物院於1965年在外雙溪落成，中國宮殿式的建築，藏有全世界最多的中華藝術寶藏，收藏品主要承襲自宋、元、明、清四朝，幾乎涵蓋了整部五千年的中國歷史，數量達65萬多件。"
  },
  {
    id: "C1_397000000A_000637",
    name: "愛河",
    url: "/assets/img/home/愛河.png",
    desc: "白天的清新秀麗，天色一暗便流露風情萬種的浪漫，乘愛之船，細聽愛河故事，欣賞水波蕩漾的夢幻河岸風光，開啟一段愛河之旅。"
  },
  {
    id: "C1_315081300H_000092",
    name: "五奇之日出",
    url: "/assets/img/home/阿里山.png",
    desc: "日出從晨霧中嶄露曙光，朝陽輕巧地躍出山頭，耀眼的光芒照亮了夜空，濤濤雲海深刻旅遊印象，也為新的一天揭開了序幕。"
  },
  {
    id: "C1_376550000A_000085",
    name: "玉山國家公園管理處",
    url: "/assets/img/home/玉山.png",
    desc: "南安遊客中心位在卓溪鄉卓清村，是玉山國家公園八通關古道東側的入口，主要是提供遊客旅遊資訊及解說諮詢的服務。"
  },
  {
    id: "C1_376480000A_000451",
    name: "合歡山國家森林遊樂區",
    url: "/assets/img/home/合歡山.png",
    desc: "每年冬季寒流與濕氣帶來的降雪，總將合歡群山染成一片銀色世界，粉妝玉琢的景色絕美，為台灣公路最高點。"
  },
  {
    id: "C1_376530000A_000188",
    name: "墾丁海水浴場(大灣)",
    url: "/assets/img/home/墾丁.png",
    desc: "海岸線長達千公尺的墾丁海水浴場，背倚大尖山，前臨巴士海峽，水域寬廣遼闊，水質澄澈如鏡，另有「大灣」別稱。"
  },
  {
    id: "C1_379000000A_000023",
    name: "中正紀念堂",
    url: "/assets/img/home/中正紀念堂.png",
    desc: "紀念堂是為了紀念中華民國第一任總統蔣介石，他於1975年逝世。紀念堂採用的藍白兩色，是國旗上面主要的顏色，紀念堂頂部天穹的裝飾是青天白日12道光芒，銅像朝西面對總統府和中國大陸，其中都有特殊的意義。"

  },
]
