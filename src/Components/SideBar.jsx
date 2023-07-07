import React from 'react'
import user from '../svgs/Dashboard/user.svg'
import verticalLine from '../svgs/Dashboard/verticalLine.svg'
import {Link} from 'react-router-dom'
import { useLocation } from 'react-router-dom'

function SideBar() {
    const location = useLocation();
    console.log(location)
  return (
    <div className="col-lg-3" style={{ padding: "30px" }}>
    <div className="container">
        <div className="row">
            <div className="col-lg-12 sidebar" >
                <nav class="nav flex-column ">
                    <Link to={'/dashboard'}>  <div className={"list-item "+(location.pathname=="/dashboard" ? "active":"")} style={{ height: "43px" }}>
                        {location.pathname=="/dashboard"?<img src={verticalLine} alt="" className='' />:""}
                        <img src={user} alt="" className='mx-3' /> <span>IT Dashboard</span>
                    </div></Link>
                  
                    <Link to={"/list"}>  <div className={"list-item "+(location.pathname=="/list" ? "active":"")} style={{ height: "43px" }}>
                    {location.pathname=="/list"?<img src={verticalLine} alt="" className='' />:""}
                        <img src={user} alt="" className='mx-3' /> <span>IT Ticket</span>
                    </div>
                    </Link>


                </nav>
            </div>
        </div>
    </div>
</div>
  )
}

export default SideBar
