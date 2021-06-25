import React from 'react'
import './about.css'
import UncontrolledLottie from '../lottie/uncontrolledlottie'
// import MyResponsiveRadar from '../charts/radar'
// import ProgressBarMain from '../charts/progress-bar'
// import HexagonalProgressBar from '../charts/hexagon/hexagon-chart'
// import HexagonGrid from '../charts/hexagon/hexagon-chart'
import Abilities from '../charts/abilities/abilities'
import TimelineWork from '../timeline/timeline-work/timeline-work'
import TimelineSchool from '../timeline/timeline-school/timeline-school'
import ProgressBar from '../progress-bar/progress-bar'

export default function About(){

    return(
        <div className="about-main">
            <div className="">
               
                <div className="javascript-icon">
                
                </div>
            </div>
            <div className="about-chart">

               {/* <Abilities/> */}

               {/* <TimelineWork/> */}
               {/* <TimelineSchool/> */}
               <ProgressBar/>
            </div>

            <div className="skill-pack">
                {/* <ProgressBarMain percent={80}/> */}
                
                <div className="skill-name">React</div>
            </div>
            <div className="skill-pack">
                {/* <ProgressBarMain percent={80}/> */}
                <div className="skill-name">React</div>
            </div>
            <div className="skill-pack">
                {/* <ProgressBarMain percent={80}/> */}
                <div className="skill-name">React</div>
            </div>
            <div className="skill-pack">
                {/* <ProgressBarMain percent={80}/> */}
                <div className="skill-name">React</div>
            </div>
        </div>
    )
}