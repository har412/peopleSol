import React from 'react'
import loginImage from '../svgs/login/loginImg.svg'
import logo from '../svgs/login/logo.svg'
import eye from '../svgs/login/eye.svg'
import arrow from '../svgs/login/arrow.svg'
import heart from '../svgs/login/heart.svg'
import {Link} from 'react-router-dom'

function Login() {
  return (
    <div className="container-fluid" >
      <div className="row" style={{ height: '100vh' }}>
        
        <div className="col-lg-6 login-left-box d-flex justify-content-center " >
          <img src={loginImage }  alt="" />
        </div>

        <div className="col-lg-6"  >
    <div className="d-flex justify-content-center  flex-column" >
          <div className="right-login-box col-lg-6 offset-lg-3 ">

            <img src={logo} alt="" className='logo my-4'  />

            <div className='text-left color-1296B0' >Login</div>
            <form action="">
              <input type="text" placeholder='Employer ID/Email ID' className='form-control form-c1 my-3' />
              <input type="password" placeholder='Enter Password' className='form-control form-c1' />
              <span><img src={eye} alt="" className='eye' /></span>
              <div className='text-right color-1296B0 forp'  >Forget Password</div>
              
              <Link to={'/dashboard'} ><button className='btn btn-primary py-1 px-4 ' style={{width:"100%"}}>Login to PeopleSol <img src={arrow} alt="" style={{position:"relative",left:"40px"}} /> </button> </Link>
            </form>
        
          </div>
          <div className="row my-3" >
              <div className="container-fluid ">
                <img src={logo} alt="" style={{width:"35%",height:"35%"}} />
                <span className='color-1296B0 ' style={{fontSize:"14px"}}>  Privacy Policy</span> 
                <span className='color-1296B0 mx-4' style={{fontSize:"14px"}}>  Terms & Coditions</span>
                <div className="line my-2"></div>
                <div>&copy;2022 . All rights reserved. Made in India . <img src={heart} alt="" /></div>
              </div>
            </div>
        </div>
        </div>


      </div>
    </div>
  )
}

export default Login
