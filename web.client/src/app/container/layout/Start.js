import React from 'react'


import './styles.css'

const StartPage =(props)=>{


    return (
        <div className="loginPage">
            <div>
                <i className="fa fa-dashcube fa-rotate-90"> </i>{"UEUE_DASHBOARD"}
            </div>
            <div className="loginContainer  text-center">
                {props.children}
            </div>
        </div>
            )
}

export default StartPage;