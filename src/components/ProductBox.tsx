import React from "react";
import {Button} from './Button'

type ProductBoxProps = {
    title: string,
    description: string,
    picture: string,
    
}

export const ProductBox: React.FC<ProductBoxProps> = (props) => {
    return (
        <>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <img src={props.picture}/>
        <Button variant="darkBlue">buddon</Button>
        </>
    )
}