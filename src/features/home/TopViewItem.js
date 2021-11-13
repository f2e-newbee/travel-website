import React, {useState} from 'react'

export const TopViewItem = (props) => {
    const [style, setStyle] = useState({opacity: '0'});

    return (
        <div className="relative px-2">
    <a href="/attractionList">
        <img className="w-full" src={props.url} id={props.key} alt={props.name}/>
        <div style={style} className="absolute top-0 left-0 w-full h-full px-2"
          onMouseEnter={e => {
            setStyle({opacity: '1'});
          }}
          onMouseLeave={e => {
            setStyle({opacity: '0'})
          }}>
          <div className="bg-black opacity-60 w-full h-full"></div>
          <p className="text-white text-2xl font-bold absolute top-40 left-2/4 transform -translate-x-2/4">{props.name}</p>
          <p className="w-10/12 absolute top-56 left-2/4 transform -translate-x-2/4 text-white py-2 border-b border-t">{props.desc}</p>
        </div>
      </a>
      </div>
    )
}
