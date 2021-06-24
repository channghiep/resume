import React, { Component } from 'react'
import Lottie from 'react-lottie'
import animationData from './lotties/8306-programming-animation.json'

class UncontrolledLottie extends Component {
    
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
            <div>
                <Lottie options={defaultOptions}
                    height={500}
                    width={500}
                />
            </div>
        )
    }
}

export default UncontrolledLottie