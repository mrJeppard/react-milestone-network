/**
 * Created by duncan on 7/9/18.
 */

import React from 'react';

// todo: use css for styling these constants
const outlineWidth = 3;
const textColor = "black"
const strokeColor = "white" //should be background color
const milestoneSize = 10

export default function Milestone(props){
    const {
        x, y, text, color,
        handleClick, handleMouseDown, handleMouseUp, handleMouseOver
    } = props;
    return (
        <g>
            <circle cx={x} cy={y} fill={color} strokeWidth={outlineWidth}
                            stroke={strokeColor} r={milestoneSize}
                            onClick={handleClick} onMouseOver={handleMouseOver}
                            onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}
                    />
            <text x={x} y={y} style={{fontSize:milestoneSize}} fill={textColor}
                          textAnchor="middle" dy="0.3em"
                          pointerEvents="none">
                        {text}
            </text>
        </g>
    )
}
