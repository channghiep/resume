import React from 'react'
import { Chrono } from 'react-chrono'
import data from './work-data'

export default function TimelineWork(){
    const items = [{
        title: "May 1940",
        cardTitle: "Dunkirk",
        cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
        cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
        media: {
          type: "IMAGE",
          source: {
            url: "http://someurl/image.jpg"
          }
        }
      }]
    return(
        <div style={{ width: "500px", height: "400px" }}>
            <Chrono items={data} mode="HORIZONTAL" />
        </div> 
    )
}