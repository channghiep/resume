import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import Loading from '../../lottie/loading'
import moment from 'moment'
import Daily from './daily'

import './weather.css'

export default function Weather(){
    const [loading, setLoading] = useState(true)
    const [location, setLocation] = useState({})
    const [daily, setDaily] = useState([{
        temp:''
    }])
    const [current, setCurrent] = useState()
    console.log(moment(1625076000*1000).toDate().toString())


    useEffect(()=>{
      
        Axios.get('https://ipapi.co/json/').then(response => {
            console.log(response.data.city)
            setLocation(response.data)
            return response.data
        }).then((res)=>{
            Axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${res.latitude}&lon=${res.longitude}&exclude=hourly,minutely&units=metric&appid=0f8255f2170e6f542b3557087d3dbe22`).then(response => {
            //   console.log(response.data.main.temp)  
            setTimeout(()=>{
                setCurrent(response.data.current)
                setDaily(response.data.daily)
                setLoading(false)
                console.log(response.data.current)
                
                // typeof(moment(1625076000*1000).toDate())
                // setWeather(response.data.weather[0])  
            },2000)
        })
        })
     
     
    },[])
    console.log(daily[0].dt)
    const getTime = (unixTime) =>{
        let unixString = moment(unixTime*1000).toDate()
        let dateNow = unixString.getMonth() + '' + unixString.getDate() + ',' + unixString.getFullYear()
        return dateNow
    }
    // console.log(current)
    return(
        <div className="weather">

            {loading ? <Loading/>
                :
                <div className='weatherContainer'>
                     {/* <p>{city}</p> */}
            {/* <img src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}/> */}
            {/* <p>{weather.description}</p> */}
            {/* <p>{parseInt(dat.main.temp)}&deg;C</p> */}
                {/* {moment(current.dt*1000).toDate()} */}
                    {/* {moment(current.dt*1000).toDate()}r */}
                    <div className="weatherItemContainer">
                        {/* {getTime(current.dt)} */}
                        <p className="yellow-header-nav">
                            <span style={{color:'#6B63FF', fontSize:'24px'}}>{location.city}</span> <br/>
                            {moment(current.dt*1000).toDate().toString().slice(0,3)},{moment(current.dt*1000).toDate().toString().slice(4,15)}
                        </p>
                        <div className="weatherItem">
                        
                            <div>
                                <p className="white-subheader">

                                {current.weather[0].description}
                                </p>
                                <img src={`http://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`}/> 

                            </div>
                            <div>
                                <p className="white-subheader">Current: <span>{parseInt(current.temp)}&deg;C</span></p>
                                <p className="white-subheader">Feels Like: <span>{parseInt(current.feels_like)}&deg;C</span></p>
                                <p className="white-subheader">Wind Speed: <span>{parseInt(current.wind_speed)}km/h</span></p>
                            </div>

                        </div>

                    </div>
                    
                    <Daily daily={daily}/>
                       
                    {/* {daily[0].temp.day} */}
                    
                </div>
                
            }
        </div>
       

        
    )
}
