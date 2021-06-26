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

import profile from '../assets/undraw_profile_pic_ic5t.svg'

export default function About(){

    return(
        <div className="about-main">
            <div className='about-part1'>
                <div className='uncontrolled-lottie'>
                    {/* <img src={profile} width= '200px' height='200px'/> */}
                    <UncontrolledLottie/>
                </div>

                <div>
                    {/* <div style={{height:'200px'}}>
                        <p>lorem</p>
                    </div> */}
                    <div class="box sb2">
                    Highly motivated post-graduate in Web and Mobile Development, who demonstrates strong work ethic and creativity ability. My objective is using my abilities and knowledge in various web Frameworks/Libraries i.e. ReactJs, JavaScript, to maximize company’s profits.
                    </div>
                    <div>
                        <p className='yellow-header'>Abilities</p>
                        <Abilities/>
                    </div>
                </div>
            </div>
            <div className='about-part2'>
                <p className='yellow-header'>Experiences</p>
               <TimelineWork/>

            </div>

            <div className='about-part3'>
                <div>
                    <p className='yellow-header'>Technical Skills</p>
                    <ProgressBar/>

                </div>
                <div>
                    <p className='yellow-header'>Education</p>
                    <TimelineSchool/>

                </div>
                {/* <div></div> */}
            </div>
    

        </div>
    )
}