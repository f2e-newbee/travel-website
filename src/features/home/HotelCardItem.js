import React from 'react'
import Card from '@mui/material/Card';
import { Rating } from '@mui/material';

export const HotelCardItem = (props) => {
    let bgUrl = props.url
    const bgImg  = {
        backgroundSize: "cover",
        backgroundImage : `url(${bgUrl})`
    }

    return (
        <Card className="mx-4" sx={{ maxWidth: 450 }}>
            <div className="relative h-80 rounded overflow-hidden shadow-sm cursor-pointer">
                <a href={props.webUrl} alt={props.name}>
                <div className="h-full w-auto" style={bgImg}></div>
                <ImageBar title={props.name} city={props.city} />
                </a>
            </div>
        </Card>
    )
}

const ImageBar = ({ title,city }) => {
    return (
        <div className="relative">
            <div className="absolute bg-black bottom-0 h-24 w-full p-3 opacity-40">
            </div>
            <div className="absolute text-white left-2/4 bottom-3 transform -translate-x-2/4 font-bold">
                <h3 className="text-xl whitespace-nowrap">{title}</h3>
                <h6 className="text-primary-light">{city}</h6>
                <div className="flex justify-center items-center">
                    <p classsName="mr-2">星級:</p>
                    <Rating name="read-only" value={5} size="small" readOnly />
                </div>
            </div>
        </div>
    );
  };
