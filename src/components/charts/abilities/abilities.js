import React from 'react'
import analysis from '../../assets/undraw_Analysis_re_w2vd.svg'
import detailing from '../../assets/undraw_detailed_analysis_xn7y.svg'
import researching from '../../assets/undraw_researching_22gp.svg'
import teaming from '../../assets/undraw_team_collaboration_8eoc.svg'
import solving from '../../assets/undraw_Problem_solving_re_4gq3.svg'
import multitasking from '../../assets/undraw_Process_re_gws7.svg'
import './abilities.css'

export default function Abilities(){
    return(
        <div className='ability-grid'>
            <div style={{borderTop:'0px', borderLeft:'0px'}} className='ability-item'>
                <img src={analysis}/>
                <p>Analyzing</p>
            </div>
            <div style={{borderTop:'0px'}} className='ability-item'>
                <img src={detailing}/>
                <p>Focusing on Detail</p>
            </div>
            <div style={{borderTop:'0px', borderRight:'0px'}}className='ability-item'>
                <img src={researching}/>
                <p>Researching</p>
            </div>
            <div style={{borderBottom:'0px', borderLeft:'0px'}} className='ability-item'>
                <img src={teaming}/>
                <p>Teaming Working</p>
            </div>
            <div style={{borderBottom:'0px'}} className='ability-item'>
                <img src={solving}/>
                <p>Problem Solving</p>
            </div>
            <div style={{borderBottom:'0px', borderRight:'0px'}} className='ability-item'>
                <img src={multitasking}/>
                <p>Multitasking</p>
            </div>
            {/* <div></div> */}
            
            
            
            

        </div>
    )
}