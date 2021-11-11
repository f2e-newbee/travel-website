import React from 'react'
import Card from "@mui/material/Card";

export const FoodCardItem = (props) => {
    return (
        <Card className="shadow-2xl">
            <img
                className="object-fill h-48 w-full"
                src={props.url}
                alt={props.name}
            />
        </Card>
    )
}
