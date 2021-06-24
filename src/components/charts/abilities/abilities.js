import React from 'react'
import analysis from '../../assets/undraw_Analysis_re_w2vd.svg'
import detailing from '../../assets/undraw_detailed_analysis_xn7y.svg'
import researching from '../../assets/undraw_researching_22gp.svg'
import teaming from '../../assets/undraw_team_collaboration_8eoc.svg'
import './abilities.css'
export default function Abilities(){
    return(
        <div className='ability-grid'>
            <div><img src={analysis}/></div>
            <div><img src={detailing}/></div>
            <div><img src={researching}/></div>
            <div><img src={teaming}/></div>
            {/* <div></div> */}
            
            
            
            

        </div>
    )
}