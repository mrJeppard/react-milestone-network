/**
 * Created by duncan on 7/9/18.
 */

import React from 'react';
import Milestone from "./network/milestone"
import Link from "./network/link"
import DelayedCommitment, {centroid} from './network/delayedCommitment'
import Sample from './network/sample'
import SVGContainer from './svg-util/svg-container'
import Gradient from "./svg-util/gradient"

//todo: separate text and milestones.
//todo: jiggle should be reproducible and always maintain distance across link.
//todo: separate math helpers into math-util.js

export function MilestoneNetwork(props){
    const {
        milestones, links, samples
    } = props;
    
    // Object so milestones can be keyed by .id
    let milestoneLookup = {}
    milestones.map((milestone) => {
        milestoneLookup[milestone.id] = milestone
    })
    
    const center = milestones.reduce(centroid)
    
    return (
        <SVGContainer centroid={center}>
            <defs>
                {gradients(links, milestoneLookup)}
            </defs>
            {delayedCommitments(samples, milestoneLookup)}
            {allLinks(links, milestoneLookup)}
            {allMilestones(milestones)}
            {allSamples(samples, milestoneLookup)}
        </SVGContainer>
    )
}

function delayedCommitments(samples, milestoneLookup){

    let found = new Set(samples.filter( (sample) => {
        return sample.milestones.length >= 3
    }).map( (sample) => String(sample.milestones)))

    found = Array.from(found)

    let toDraw = found.map( (milestonestr) => milestonestr.split(',').map(
        (milestoneid)=> milestoneLookup[milestoneid]
    ))
    
    return toDraw.map( (milestones,i) => <DelayedCommitment key={i} milestones={milestones}/>)
}

function gradients(links, milestoneLookup){
    return links.map( (link, i) => {
            const color1 = milestoneLookup[link.source].color,
                color2 = milestoneLookup[link.target].color
            return <Gradient key={i} color1={color1} color2={color2}/>

        }
    )
}

function allSamples(samples, milestoneLookup){
    return samples.map( (sample, i) => {
        let x = 0,
            y= 0;

        sample.milestones.forEach( (milestone, i)=> {
            x+= milestoneLookup[milestone].x * sample.percentages[i]
            y+= milestoneLookup[milestone].y * sample.percentages[i]
        })

        const samplepos= jiggle({x: x , y: y })
        return <Sample  key={i} x={samplepos.x} y={samplepos.y}
                        color={sample.color}
        />

    }
    )
}

function allLinks(links, milestoneLookup){
    return links.map((link, i) => {
        return <Link key={i} source={milestoneLookup[link.source]} target={milestoneLookup[link.target]}/>
        }
    )
}

function allMilestones(milestones){

    return milestones.map(
        (milestone, i) => {
            const {
                x, y, id, color,
                handleClick, handleMouseDown, handleMouseUp, handleMouseOver
            } = milestone;
            return <Milestone key={i}
                        x={x} y={y} text={id} color={color}
                        onClick={handleClick} onMouseDown={handleMouseDown}
                        onMouseUp={handleMouseUp} onMouseOver={handleMouseOver}
            />

        }
    )
}

function jiggle({x, y}){
    const jiggleWidth = 5
    const sign = Math.random() >= .5 ? 1 : -1
    const jx = sign * Math.random() * jiggleWidth + x
    const jy = sign * Math.random() * jiggleWidth + y
    return {x: jx, y: jy}
}