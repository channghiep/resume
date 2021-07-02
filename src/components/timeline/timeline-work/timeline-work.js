import React from 'react'
import { Chrono } from 'react-chrono'
import data from './work-data'
import './timeline-work.css'

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
      <div className='workTimeline'>
        <div >
          <Chrono items={data} mode="HORIZONTAL" />
        </div>
    </div>
    )
}