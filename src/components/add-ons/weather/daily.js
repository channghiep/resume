import React from 'react'
import moment from 'moment'
import './daily.css'
export default function Daily(props){
    return(
        <div className='dailyContainer'>
             {props.daily.slice(1,4).map((day) => {
                            return(
                                <div className='dailyItems'>
                                    <p style={{marginBottom:'0'}}className="yellow-header-nav">
                                        {moment(day.dt*1000).toDate().toString().slice(0,4)}
                                    </p>
                                    <img src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}/> 
                                    <div className="white-subheader">
                                        {parseInt(day.temp.max)}
                                    </div>
                                    <div className="white-subheader">{parseInt(day.temp.min)}</div>
                                    {/* {day.temp.max}
                                    {day.temp.min} */}
                                </div>
                            )
                        })}
        </div>
    )
}