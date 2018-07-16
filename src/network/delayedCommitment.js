/**
 * Created by duncan on 7/9/18.
 */

import React from 'react';
import {distance} from './link'

// todo: css is for styling: opacity of delayed commitment
// todo: separate shading into svg-util folder

export default function DelayedCommitment(props){
    const {milestones} = props

    return (
        <g>
            {shading(milestones)}
            {polygons(milestones)}
        </g>
    )
}

export function centroid(a, c, index, array){
    let sum = {x:a.x + c.x, y: a.y+c.y},
        lastPoint = index === array.length-1

    return lastPoint ? {x: sum.x / array.length, y : sum.y / array.length} : sum
}

function polygons(milestones) {
    const points = milestones.reduce(pointsString, '')

    return (
        milestones.map( (milestone, i)=> {
            return <polygon key={i} points={points}
                            fill={`url(#${milestone.id})`}
                            opacity=".55"
            />
        })
    )
}

function shading(milestones){
    const center = milestones.reduce(centroid)
    let gradients = []

    for (let milestone of milestones){
        const distanceToCenter = distance(milestone, center),
        // Extend the reach of the gradient past the center so we get
        // some mixing.
            reach = distanceToCenter+(distanceToCenter/3)
        gradients.push(
            < radialGradient
                key={milestone.id} id={milestone.id}
                gradientUnits="userSpaceOnUse"
                cx={milestone.x} cy={milestone.y} r={reach}
            >
                <stop offset="0%" stopColor={milestone.color} stopOpacity="1"/>
                <stop offset="3%" stopColor={milestone.color} stopOpacity="1"/>
                <stop offset="50%" stopColor={milestone.color} stopOpacity=".5"/>
                <stop offset="100%" stopColor={milestone.color} stopOpacity="0"/>
            </radialGradient>
        )

    }
    return gradients
}

function pointsString(string, point){
    // Initialize as empty str to use as reducer.
    string +=`${point.x},${point.y} `
    return string
}