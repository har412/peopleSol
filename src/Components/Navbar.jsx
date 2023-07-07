import React from 'react'
import { Link } from 'react-router-dom'
import profile from '../svgs/Dashboard/profilePic.svg'
import logo from '../svgs/login/logo.svg'
import leftArrow from '../svgs/Dashboard/leftArrow.svg'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ borderBottom: "2px solid #E6E6E6" }}>
            <img src={logo} alt="" style={{ width: "140px", height: "36px" }} />
            <span className='vertical-line mx-3'></span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">

                <ul className="navbar-nav mr-auto">
                    <li className="nav-item ">
                        <img src={leftArrow} alt="" />
                        <span>ITSM</span>
                        <div className='color-1296B0' style={{ fontWeight: "700" }}>Dashboard</div>
                    </li>

                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item ">
                        <div>
                            <Link to={'/'}> <img src={profile} alt="" /></Link>

                        </div>
                    </li>

                </ul>


            </div>
        </nav>
    )
}

export default Navbar
