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
            <div className='ability-item'>
                <img src={analysis}/>
                <p>Analysis</p>
            </div>
            <div className='ability-item'>
                <img src={detailing}/>
                <p>Analysis</p>
            </div>
            <div className='ability-item'>
                <img src={researching}/>
                <p>Analysis</p>
            </div>
            <div className='ability-item'>
                <img src={teaming}/>
                <p>Analysis</p>
            </div>
            <div className='ability-item'>
                <img src={solving}/>
                <p>Analysis</p>
            </div>
            <div className='ability-item'>
                <img src={multitasking}/>
                <p>Analysis</p>
            </div>
            {/* <div></div> */}
            
            
            
            

        </div>
    )
}