/**
 * Created by duncan on 7/9/18.
 */
import React from 'react';

// todo: css for styling
const size = 3

export default function Sample(props) {
    const {x, y, color} = props
    return <circle cx={x} cy={y} r={size} fill={color} />
}