import React from "react";
import { Chrono } from "react-chrono";
// import data from "./data";
import './timeline-school.css'
import data from './school-data.js'

export default function TimelineSchool() {
    
    return (
        <div className="App">
        <div  className='schoolTimeline' style={{ width: "100%", height: "95vh" }}>
            <Chrono items={data} mode="VERTICAL_ALTERNATING" />
        </div>
        </div>
    );
}