/**
 * Created by duncan on 7/9/18.
 */
import React from 'react';

export default function Gradient(props){
    const {color1, color2} = props,
        gradId  = gradientId(color1, color2)
    
    const horizontalLine = {
        x1 : "0%" ,
        y1 : "0%" ,
        x2 : "100%" ,
        y2 : "0%"
    }

    return (
        <linearGradient id={gradId} {...horizontalLine}>
            <stop offset="0%" style={{stopColor: color1, stopOpacity:1}} />

            <stop offset="100%" style={{stopColor: color2, stopOpacity:1}} />
        </linearGradient>
    )
}

export function gradientId(color1, color2) {
    return `${color1}${color2}`
}