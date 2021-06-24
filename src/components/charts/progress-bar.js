import React from 'react'
import ProgressBar from 'react-customizable-progressbar'
import './progress-bar.css'
import analysis from '../assets/undraw_Analysis_re_w2vd.svg'

export default function ProgressBarMain(props){
    return(
        // <div className="progress-item">
            <ProgressBar
            radius={60}
            progress={props.percent}
            strokeWidth={2}
            strokeColor="red"
            trackStrokeWidth={2}
            pointerRadius={4}
            pointerStrokeWidth={2}
            pointerStrokeColor="indianred"
            >
            <div className="indicator">
                {/* <div>{props.percent}%</div> */}
                <img src={analysis} height='50px' width='50px'/>
            </div>
            </ProgressBar>
        // </div>
    )
}