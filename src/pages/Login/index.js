import { useContext, useEffect, useState } from 'react';
import { IoMdEye } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { MyContext } from '../../App';
import loginBgImg from '../../assets/imgs/loginBackground.png';
import logo from '../../assets/imgs/logo.png';


const Login = () => {

  const [inputIndex, setInputIndex] = useState(null);
  const context = useContext(MyContext);

  useEffect(() => {
    context.setIsHideSidebarAndHeader(true);
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
                <input type="text" className='form-control' placeholder='enter your email.' onFocus={()=>focusInput(0)} onBlur={()=>setInputIndex=>(null)} />
              </div>
              <div className={`form-group mb-3 position-relative ${inputIndex===1 && 'focus'}`}>
                <span className='icon'><RiLockPasswordFill /> </span>
                <input type="password" className='form-control' placeholder='enter your Password.' onFocus={() => focusInput(1)} onBlur={() => setInputIndex => (null)} />
                
                <span className='toggleShowPassword'>
                  <IoMdEye />

                </span>
              </div>
            
            </form>
          </div>          
      </div>
    </section>
    </>
  )
}

export default Login