import React , {Component} from 'react'
import './styles.css'
import LeftMenu from "./LeftMenu";
import TopHeader from "./TopHeader";
import MainContainer from "./MainContainer";

const QDNav = (props) => {

    return (
        <div id="content">
        <div className="headerContainer">
            <div className="col-xs-12 main-grid">
                <div className="col-xs-2 main-grid menu-part">
                    <LeftMenu/>
                </div>
                <div className="col-xs-10 main-grid">
                    <div className="header-part">
                        <TopHeader/>
                    </div>
                    <MainContainer/>
                </div>
            </div>
        </div>
        </div>
    )
}


export default  QDNav;