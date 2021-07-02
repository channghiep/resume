import React, { Component } from 'react'
import Lottie from 'react-lottie'
import animationData from './lotties/9844-loading-40-paperplane.json'

class Loading extends Component {
    
    render(){

        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: animationData,
            redererSetting: {
                preserveAspectRatio: 'xMidYMid slice'
            }
        };

        return(
         
                    <Lottie options={defaultOptions}
                        height={300}
                        width={300}
                    />


        )
    }
}

export default Loading