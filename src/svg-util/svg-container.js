/**
 * Created by duncan on 7/9/18.
 */
import React from 'react';

export default function SVGContainer(props){
    const {centroid} = props
    const centered = `0 0 ${centroid.x * 2} ${centroid.y * 2}`
    return (
        <svg width="100%" height="100%" viewBox={centered}>
            {props.children}
        </svg>
    )
}