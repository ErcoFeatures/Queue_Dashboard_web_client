import React from 'react'
import './styles.css'
import LeftMenu from "./LeftMenu";
import TopHeader from "./TopHeader";
import MainContainer from "./MainContainer";

const QDNav = (props) => {

    return (
        <div>
            <div className="stickyHeader">
            </div>
        <div id="content">
        <div className="main-container">
            <div className="col-xs-12 main-grid no-padding">
                <div className="col-xs-2 menu-part no-padding">
                    <LeftMenu/>
                </div>
                <div className="col-xs-10 no-padding">
                    <div className="header-part">
                        <TopHeader/>
                    </div>
                    <MainContainer/>
                </div>
            </div>
        </div>
        </div>
        </div>
    )
}


export default  QDNav;