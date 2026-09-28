import { Button } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { IoIosEyeOff, IoMdEye } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { MyContext } from '../../App';
import googleImg from '../../assets/imgs/googleImg.png';
import loginBgImg from '../../assets/imgs/loginBackground.png';
import logo from '../../assets/imgs/logo.png';


const Login = () => {

  const [isShowPassword, setIsShowPassword] = useState(false);
  const [inputIndex, setInputIndex] = useState(null);
  const context = useContext(MyContext);

  useEffect(() => {
    context.setIsHideSidebarAndHeader(true);
     window.scrollTo(0, 0);
  })
  const focusInput = (index) => {
    setInputIndex(index);
  }

  return (
    <>
      <img className='loginBgImg' src={loginBgImg} alt={loginBgImg} />
    <section className='loginSection'>
      <div className="loginBox">
        <div className="logo text-center">
          <img src={logo} alt={logo} width="70px" />
          <h5>Login to Rahul Patel</h5>
          </div>
          <div className="wrapper mt-3 card border ">
            <form action="">

              <div className={`form-group mb-3 position-relative ${inputIndex===0 && 'focus'}`}>
                <span className='icon'><MdEmail/> </span>
                <input type="text" className='form-control' placeholder='enter your email.' onFocus={()=>focusInput(0)} onBlur={()=>setInputIndex=>(null)} autoFocus />
              </div>
              <div className={`form-group mb-3 position-relative ${inputIndex===1 && 'focus'}`}>
                <span className='icon'><RiLockPasswordFill /> </span>
                <input type={`${isShowPassword===true ? 'text' : 'password'}`} className='form-control' placeholder='enter your Password.' onFocus={() => focusInput(1)} onBlur={() => setInputIndex => (null)} />
                
                <span className='toggleShowPassword' onClick={()=>setIsShowPassword(!isShowPassword)}>
                  { 
                    isShowPassword === true ? <IoMdEye /> :<IoIosEyeOff />
                    
                  }
                </span>
              </div>
              <div className="form-group">
                <Button className='btn-blue btn-big fs-6' >Sign In</Button>
              </div>
            
              <div  iv className="form-group mb-3 text-center p-2">
                <Link to={'/forgot-password'} className='link'>Forgot Password</Link>
                <div className="d-flex align-items-center justify-content-center or">
                  <span className='line'></span>
                  <span className='txt'>Or</span>
                  <span className='line'></span>
                  </div>
              </div>

              <Button variant='outlined' className='w-100 btn-lg btn-big loginWithGoogle'> <img src={googleImg} alt={googleImg} width="20px" />Sign In with Google</Button>

            </form>
          </div> 
          <div className="wrapper  card border footer p-4">
            <span>Don't have an Account?
              <Link to={'/signUp'} className='link color ms-2'>Register</Link>
            </span>
          </div>
      </div>
    </section>
    </>
  )
}

export default Login