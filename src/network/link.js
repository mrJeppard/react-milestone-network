/**
 * Created by duncan on 7/9/18.
 */
import React from 'react';
import {gradientId} from  '../svg-util/gradient'

// todo: css for styling
const linkWidth = 8;

export default function Link(props){

    const {
        source,
        target,
    } = props;
    
    const color1 = source.color, 
        color2 = target.color

    /*
    Implementation is bent towards being able to use horizontally defined
    gradients. That lets us not worry about putting a transformation on the
    gradient itself, and means we can have 1 gradient definition per color-color
    combination.
     */
    
    // Think polar notation... line defined by distance and angle and starting
    // point.
    const angle = linkAngle(source, target),
        length = distance(source, target),
        rotate = `rotate(${angle}, ${source.x}, ${source.y})`


    const gradientId = gradientStroke(color1, color2)

    // Handle svg gotcha where you can't use the gradient bounding box shortcut
    // if the bounding box doesn't have area, which is the case for a
    // horizontal line.
    const slightAngle = .0001

    const horizontalLine = {
        x1 : source.x ,
        y1 : source.y ,
        x2 : source.x + length,
        y2 : source.y + slightAngle
    }

    return (
            <line {...horizontalLine} transform={rotate}
                  stroke={gradientId} strokeWidth={linkWidth}
            />
    )
}

export function angle(slope) {
    let angle = Math.atan(slope)
    return angle
}

export function distance(source, target){
    return Math.sqrt(Math.pow(source.x - target.x, 2) + Math.pow(source.y - target.y, 2))
}

export function slope(source, target) {
    return (
        (source.y - target.y) / (source.x - target.x)
    )
}

function gradientStroke(color1, color2){
    // Make an accessor for the gradient reference.
    return `url(#${gradientId(color1, color2)})`
}

function linkAngle(source, target){
    // Considers angle to always be between 90 and -90 on the users coord space
    // Return in degrees for ease of use in rotate.
    return  modifyer(source, target) + degrees(angle(slope(source, target)))

}

function modifyer(source, target){
    return source.x > target.x ? 180 : 0
}

function degrees(rad) {
    return rad * (180.0 / Math.PI)
}
