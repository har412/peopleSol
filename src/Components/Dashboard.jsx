import React from 'react'
import chart1 from '../svgs/Dashboard/chart1.svg'
import chart2 from '../svgs/Dashboard/chart2.svg'
import chart3 from '../svgs/Dashboard/chart3.svg'
import chart4 from '../svgs/Dashboard/chart4.svg'
import star from '../svgs/Dashboard/star.svg'
import glowingStar from '../svgs/Dashboard/glowingStar.svg'
import Navbar from './Navbar'
import SideBar from './SideBar'

function Dashboard() {
    return (
        <>
            <Navbar />

            {/* // second part */}

            <div className="container-fluid">
                <div className="row">
                    <SideBar />
                    <div className="col-lg-9 ">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 my-4 " style={{ boxShadow: "0px 0px 14px -7px #1295af", borderRadius: "20px" }}>
                                    <button className='it-desk-btn btn px-5'>IT Desk</button>
                                    <div className="container my-2">
                                        <div className="row">
                                            <div className="col-lg-12 d-flex flex-wrap " style={{ justifyContent: "space-between" }}>
                                                <span className='my-2'>Top Requests - 20/05/2023 and 20/06/2023</span>
                                                <div>
                                                    <select className="custom-select" id="inputGroupSelect04">
                                                        <option value="1">4.5.2023 - 22.06.2023</option>
                                                        <option selected>20.5.2023 - 20.06.2023</option>
                                                        <option value="2">9.5.2023 - 27.06.2023</option>
                                                        <option value="3">12.5.2023 - 21.06.2023</option>
                                                    </select>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="container " style={{ height: "68vh", overflow: "scroll" }}>
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <div className='text-left'>Top 5 Request Categories</div>
                                                <hr />
                                                <img src={chart1} alt="" />
                                            </div>
                                            <div className="col-lg-4">
                                                <div className='text-left'>Top 5 Service Categories</div>
                                                <hr />
                                                <img src={chart2} alt="" />
                                            </div>
                                            <div className="col-lg-4">
                                                <div className='text-left'>Top 5 Incident Categories</div>
                                                <hr />
                                                <img src={chart3} alt="" />
                                            </div>
                                            <div className="col-lg-4">
                                                <div className='text-left'>Top 5 Request Categories</div>
                                                <hr />
                                                <img src={chart4} alt="" />
                                            </div>

                                            <div className="col-lg-8">
                                                <div className='text-left'>Overall Ratings</div>
                                                <hr />
                                                <div className="container-fluid">
                                                    <div className="row" style={{ justifyContent: "space-around", fontSize: "13px" }}>
                                                        <div className="col-lg-5 p-2 " style={{ background: "#eff5f7" }}>
                                                            <div style={{ fontSize: "13px", justifyContent: "space-between" }} className='d-flex'><span className=''>Find Ops Rating</span> <span className=''>Overall Rating 30</span></div>
                                                            <div className='d-flex my-3' style={{ alignItems: "center" }}>5 Star
                                                                <img src={glowingStar} className='ml-2' alt="" />
                                                                <img src={glowingStar} alt="" />
                                                                <img src={glowingStar} alt="" />
                                                                <img src={glowingStar} alt="" />
                                                                <img src={glowingStar} alt="" />
                                                                <div className="hor-line mx-2"></div>
                                                                16
                                                            </div>
                                                            <div className='d-flex my-3' style={{ alignItems: "center" }}>4 Star
                                                                <img src={glowingStar} className='ml-2' alt="" />
                                                                <img src={glowingStar} alt="" />
                                                                <img src={glowingStar} alt="" />
                                                                <img src={glowingStar} alt="" />
                                                                <img src={star} alt="" />
                                                                <div className="hor-line mx-2"></div>
                                                                05
                                                            </div>
                                                            <div className='d-flex my-3' style={{ alignItems: "center" }}>3 Star
                                                                <img src={glowingStar} className='ml-2' alt="" />
                                                                <img src={glowingStar} alt="" />
                                                                <img src={glowingStar} alt="" />
                                                                <img src={star} alt="" />
                                                                <img src={star} alt="" />
                                                                <div className="hor-line mx-2"></div>
                                                                04
                                                            </div>
                                                            <div className='d-flex my-3' style={{ alignItems: "center" }}>2 Star
                                                                <img src={glowingStar} className='ml-2' alt="" />
                                                                <img src={glowingStar} alt="" />
                                                                <img src={star} alt="" />
                                                                <img src={star} alt="" />
                                                                <img src={star} alt="" />
                                                                <div className="hor-line mx-2"></div>
                                                                02
                                                            </div>
                                                            <div className='d-flex my-3' style={{ alignItems: "center" }}>1 Star
                                                                <img src={glowingStar} className='ml-2' alt="" />
                                                                <img src={star} alt="" />
                                                                <img src={star} alt="" />
                                                                <img src={star} alt="" />
                                                                <img src={star} alt="" />
                                                                <div className="hor-line mx-2"></div>
                                                                03
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-5 p-2 " style={{ background: "#eff5f7" }}>
                                                            <div style={{ fontSize: "13px", justifyContent: "space-between" }} className='d-flex'><span className=''>ITSM Rating</span> <span className=''>Overall Rating 24</span></div>
                                                            <div className='d-flex my-3' style={{ alignItems: "center" }}>5 Star
                                                                <img src={glowingStar} className='ml-2' alt="" />
                                                                <img src={glowingStar} alt="" />
                                                                <img src={glowingStar} alt="" />
                                                                <img src={glowingStar} alt="" />
                                                                <img src={glowingStar} alt="" />
                                                                <div className="hor-line mx-2"></div>
                                                                10
                                                            </div>
                                                            <div className='d-flex my-3' style={{ alignItems: "center" }}>4 Star
                                                                <img src={glowingStar} className='ml-2' alt="" />
                                                                <img src={glowingStar} alt="" />
                                                                <img src={glowingStar} alt="" />
                                                                <img src={glowingStar} alt="" />
                                                                <img src={star} alt="" />
                                                                <div className="hor-line mx-2"></div>
                                                                05
                                                            </div>
                                                            <div className='d-flex my-3' style={{ alignItems: "center" }}>3 Star
                                                                <img src={glowingStar} className='ml-2' alt="" />
                                                                <img src={glowingStar} alt="" />
                                                                <img src={glowingStar} alt="" />
                                                                <img src={star} alt="" />
                                                                <img src={star} alt="" />
                                                                <div className="hor-line mx-2"></div>
                                                                03
                                                            </div>
                                                            <div className='d-flex my-3' style={{ alignItems: "center" }}>2 Star
                                                                <img src={glowingStar} className='ml-2' alt="" />
                                                                <img src={glowingStar} alt="" />
                                                                <img src={star} alt="" />
                                                                <img src={star} alt="" />
                                                                <img src={star} alt="" />
                                                                <div className="hor-line mx-2"></div>
                                                                04
                                                            </div>
                                                            <div className='d-flex my-3' style={{ alignItems: "center" }}>1 Star
                                                                <img src={glowingStar} className='ml-2' alt="" />
                                                                <img src={star} alt="" />
                                                                <img src={star} alt="" />
                                                                <img src={star} alt="" />
                                                                <img src={star} alt="" />
                                                                <div className="hor-line mx-2"></div>
                                                                02
                                                            </div>
                                                        </div>


                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Dashboard
