import React from 'react'
import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <footer className="w-full bg-primary-dark text-gray-100" >
            <div className="p-16">
                <ul className="lg:flex items-center justify-center">
                    <li className="lg:mx-12">
                        <ul className="lg:block flex justify-center lg:mb-0 mb-4">
                            <li className="mb-2 font-extrabold	lg:mr-0 mr-6 text-primary-light">景點</li>
                            <li className="mb-2 lg:mr-0 mr-6"><Link to="/attractionlist">景點快搜</Link></li>
                            <li className="mb-2"><Link to="/attractionlist">熱門景點</Link></li>
                        </ul>
                   </li>
                   <li className="lg:mx-12">
                        <ul className="lg:block flex justify-center lg:mb-0 mb-4">
                            <li className="mb-2 font-extrabold	lg:mr-0 mr-6 text-primary-light">餐廳</li>
                            <li className="mb-2 lg:mr-0 mr-6"><Link to="/foodlist">餐廳列表</Link></li>
                            <li className="mb-2"><Link to="/foodlist" >精選餐廳</Link></li>
                        </ul>
                    </li>
                    <li className="lg:mx-12">
                        <ul className="lg:block flex justify-center lg:mb-0 mb-4">
                            <li className="font-extrabold	mb-2 lg:mr-0 mr-6 text-primary-light">住宿</li>
                            <li className="mb-2 lg:mr-0 mr-6"><a href="/#">住宿推薦</a></li>
                            <li className="mb-2"><a href="/#">安心住宿</a></li>
                        </ul>
                    </li>
                    <li className="lg:mx-12">
                        <ul className="lg:block flex justify-center lg:mb-0 mb-4">
                            <li className="mb-2 font-extrabold	lg:mr-0 mr-6 text-primary-light">交通</li>
                            <li className="mb-2 lg:mr-0 mr-6"><a href="https://www.railway.gov.tw/tra-tip-web/tip/tip001/tip123/query">台鐵訂票</a></li>
                            <li className="mb-2"><a href="https://www.thsrc.com.tw/ArticleContent/dea241a9-fe69-4e9d-b9a5-6caed6e486d6">高鐵訂票</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="flex items-center  text-sm  justify-center px-8 py-4">
                <p>&copy; 2021 海獅會害怕.Ltd   All rights reserved.</p>
            </div>
        </footer>
    )
}
