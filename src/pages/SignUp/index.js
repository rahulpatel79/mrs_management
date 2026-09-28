import { Button } from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useContext, useEffect, useState } from "react";
import { FaHome } from 'react-icons/fa';
import { FaCircleUser } from "react-icons/fa6";
import { IoIosEyeOff, IoMdEye } from "react-icons/io";
import { IoShieldCheckmark } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { MyContext } from "../../App";
import googleImg from "../../assets/imgs/googleImg.png";
import loginBgImg from "../../assets/imgs/loginBackground.png";
import logo from "../../assets/imgs/logo.png";

const SignUp = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);
  const [inputIndex, setInputIndex] = useState(null);
  const context = useContext(MyContext);

  useEffect(() => {
    context.setIsHideSidebarAndHeader(true);
     window.scrollTo(0, 0);
  });
  const focusInput = (index) => {
    setInputIndex(index);
  };

  return (
    <>
      <img className="loginBgImg" src={loginBgImg} alt={loginBgImg} />
      <section className="loginSection signUpSection">
        <div className="row">
          <div className="col-md-8 d-flex align-items-center flex-column part1 justify-content-center">
            <h1>Best ux/ui fashion ecommerce dashboard & admin panel</h1>
            <p>Elit Iusto dolore libero recusandae dolor dolores explicabo ullam cum facilis aperiam alias odio quam excepturi molestiae omnis inventore. Repudiandae officia placeat amet consectetur dicta dolorem quo</p>

            <div className=" mt-4">
              <Link to={'/'} >
              <Button className='btn-blue btn-lg- btn-big fs-5'> <FaHome fontSize="22px" className='me-2'/> Go To Home</Button>
              </Link>
            </div>
          </div>

          <div className="col-md-4 pr-0">
            <div className="loginBox">
              <div className="logo text-center">
                <img src={logo} alt={logo} width="70px" />
                <h5>Register a new account</h5>
              </div>
              <div className="wrapper mt-3 card border ">
                <form action="">
                  <div
                    className={`form-group mb-3 position-relative ${inputIndex === 0 && "focus"}`}
                  >
                    <span className="icon">
                      <FaCircleUser />{" "}
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="enter your Name."
                      onFocus={() => focusInput(0)}
                      onBlur={() => (setInputIndex) => null} autoFocus
                    />
                  </div>

                  <div
                    className={`form-group mb-3 position-relative ${inputIndex === 1 && "focus"}`}
                  >
                    <span className="icon">
                      <MdEmail />{" "}
                    </span>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="enter your email."
                      onFocus={() => focusInput(1)}
                      onBlur={() => (setInputIndex) => null}
                    />
                  </div>

                  <div
                    className={`form-group mb-3 position-relative ${inputIndex === 3 && "focus"}`}
                  >
                    <span className="icon">
                      <RiLockPasswordFill />{" "}
                    </span>
                    <input
                      type={`${isShowPassword === true ? "text" : "password"}`}
                      className="form-control"
                      placeholder="enter your Password."
                      onFocus={() => focusInput(3)}
                      onBlur={() => (setInputIndex) => null}
                    />

                    <span
                      className="toggleShowPassword"
                      onClick={() => setIsShowPassword(!isShowPassword)}
                    >
                      {isShowPassword === true ? <IoMdEye /> : <IoIosEyeOff />}
                    </span>
                  </div>
                  
                  <div
                    className={`form-group mb-3 position-relative ${inputIndex === 4 && "focus"}`}
                  >
                    <span className="icon">
                      <IoShieldCheckmark />{" "}
                    </span>
                    <input
                      type={`${isShowConfirmPassword === true ? "text" : "password"}`}
                      className="form-control"
                      placeholder="Confirm Password."
                      onFocus={() => focusInput(4)}
                      onBlur={() => (setInputIndex) => null}
                    />

                    <span
                      className="toggleShowPassword"
                      onClick={() => setIsShowConfirmPassword(!isShowConfirmPassword)}
                    >
                      {isShowConfirmPassword === true ? <IoMdEye /> : <IoIosEyeOff />}
                    </span>
                  </div>
                   <FormControlLabel   control={<Checkbox />} label="I agree to the all Terms & Condiotions" />
                  <div className="form-group">
                    <Button className="btn-blue btn-big fs-6">Sign Up</Button>
                  </div>

                  <div iv className="form-group mb-3 text-center p-2 mt-2 ">
                    
                    <div className="d-flex align-items-center justify-content-center or mt-3">
                      <span className="line"></span>
                      <span className="txt">Or</span>
                      <span className="line"></span>
                    </div>
                  </div>

                  <Button
                    variant="outlined"
                    className="w-100 btn-lg btn-big loginWithGoogle "
                  >
                    {" "}
                    <img src={googleImg} alt={googleImg} width="20px" />
                    Sign In with Google
                  </Button>
                </form>
                 
                <span className='text-center d-block mt-3'>
                  Don't have an Account?
                  <Link to={"/Login"} className="link color ms-2">
                    
                    Sign In
                  </Link>
                </span>
              
               
              
            </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
