import React from 'react'

export const Footer = () => {
    return (
        <footer className="w-full bg-primary-dark text-gray-100" >
            <div className="p-16">
                <ul className="lg:flex items-center justify-center">
                    <li className="lg:ml-24">
                        <h5 className="font-bold mb-2">活動資訊</h5>
                        <ul className="lg:block flex">
                            <li className="mb-2"><a href="//#">最新消息</a></li>
                            <li className="mb-2"><a href="//#">優惠情報</a></li>
                            <li className="mb-2"><a href="//#">熱門景點</a></li>
                            <li className="mb-2"><a href="//#">熱門標籤</a></li>
                        </ul>
                   </li>
                    <li className="lg:ml-24">
                        <h5 className="font-bold mb-2">景點</h5>
                        <ul className="lg:block flex">
                            <li className="mb-2"><a href="//#">景點快搜</a></li>
                            <li className="mb-2"><a href="//#">熱門TOP10</a></li>
                            <li className="mb-2"><a href="//#">區域導覽</a></li>
                            <li className="mb-2"><a href="//#">全景瀏覽</a></li>
                        </ul>
                   </li>
                    <li className="lg:ml-24">
                        <h5 className="font-bold mb-2">住宿</h5>
                        <ul className="lg:block flex">
                            <li className="mb-2"><a href="/#">住宿推薦</a></li>
                            <li className="mb-2"><a href="/#">住宿優惠</a></li>
                            <li className="mb-2"><a href="/#">安心旅宿</a></li>
                            <li className="mb-2"><a href="/#">低碳旅館</a></li>
                        </ul>
                    </li>
                    <li className="lg:ml-24">
                        <h5 className="font-bold mb-2">住宿</h5>
                        <ul className="lg:block flex">
                            <li className="mb-2"><a href="/#">住宿推薦</a></li>
                            <li className="mb-2"><a href="/#">住宿優惠</a></li>
                            <li className="mb-2"><a href="/#">安心旅宿</a></li>
                            <li className="mb-2"><a href="/#">低碳旅館</a></li>
                        </ul>
                    </li>
                    <li className="lg:ml-24">
                        <h5 className="font-bold mb-2">住宿</h5>
                        <ul className="lg:block flex">
                            <li className="mb-2"><a href="/#">住宿推薦</a></li>
                            <li className="mb-2"><a href="/#">住宿優惠</a></li>
                            <li className="mb-2"><a href="/#">安心旅宿</a></li>
                            <li className="mb-2"><a href="/#">低碳旅館</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="flex items-center  text-sm  justify-between px-8 py-4">
                <p>&copy; 2021 海獅會害怕.Ltd   All rights reserved.</p>
                <div className="flex items-center">
                    <p className="mr-2">隱私權保護政策及個資聲明 </p>
                </div>
            </div>
        </footer>
    )
}
