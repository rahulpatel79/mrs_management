import Button from "@mui/material/Button";
import { CiLight, CiMail, CiShoppingCart } from "react-icons/ci";
import { FaRegBell } from "react-icons/fa6";
import { MdMenuOpen } from "react-icons/md";

import Logout from "@mui/icons-material/Logout";
import PersonAdd from "@mui/icons-material/PersonAdd";
import { Divider } from '@mui/material';
import ListItemIcon from "@mui/material/ListItemIcon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from 'react';
import { FaShieldHalved } from "react-icons/fa6";
import { Link } from "react-router-dom";
import logo from "../../assets/imgs/logo.png";
import SearchBox from "../Search";

function Index() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isOpennotificationMenuDrop, setisOpennotificationMenuDrop] = useState(null);

  const openMyAcc = Boolean(anchorEl);
  const openNotification = Boolean(isOpennotificationMenuDrop);

  const handleOpenMyAccDrop = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMyAccDrop = () => {
    setAnchorEl(null);
  };

  const handleOpennotificationMenuDrop = (event) => {
    setisOpennotificationMenuDrop(event.currentTarget);
  }
  const handleClosenotificationMenuDrop = () => {
    setisOpennotificationMenuDrop(null);
  }

  return (
    <>
      <header className="d-flex align-items-center">
        <div className="container-fluid w-100">
          {/* Logo Wrapper */}
          <div className="row d-flex align-items-center">
            {/* Logo Wrapper */}
            <div className="col-sm-2 part1">
              <Link to={"/"} className="d-flex align-items-center logo">
                <img src={logo} alt={logo} />
                <span className="ml-2">Rahul</span>
              </Link>
            </div>

            <div className="col-sm-3 d-flex align-items-center part2 pl-4">
              <Button className="rounded-circle me-3">
                <MdMenuOpen />
              </Button>
              <SearchBox />
            </div>

            <div className="col-sm-7 d-flex align-items-center part3 justify-content-end ">
              <Button className="rounded-circle me-3">
                <CiLight />
              </Button>

              <Button
                className="rounded-circle me-3"
                 
              >
                <CiShoppingCart />
              </Button>
              <Button className="rounded-circle me-3">
                <CiMail />
              </Button>
             
              <div className="dropdownWrapper position-relative">
                 <Button className="rounded-circle me-3" onClick={handleOpennotificationMenuDrop}>
                <FaRegBell />
              </Button>
              {/* Notification  Bell Start*/}
                 <Menu
                anchorEl={isOpennotificationMenuDrop}
                className='notificationMenu dropdown_list'
                id="notificationMenu"
                open={openNotification}
                onClose={handleClosenotificationMenuDrop}
                onClick={handleClosenotificationMenuDrop}
                slotProps={{
                  paper: {
                    elevation: 0,
                    sx: {
                      overflow: "visible",
                      filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                      mt: 1.5,
                      "& .MuiAvatar-root": {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      "&::before": {
                        content: '""',
                        display: "block",
                        position: "absolute",
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: "background.paper",
                        transform: "translateY(-50%) rotate(45deg)",
                        zIndex: 0,
                      },
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                    <div className="head">
                      <h4 className='ps-2 pb-0'>Notifications-(12)</h4>
                    </div>
                   <Divider className=' ' />
                  <div className="scroll mt-1">
                    <MenuItem onClick={handleCloseMyAccDrop} className='menuListItem'>
                    <div className="d-flex align-items-center  " >
                       <div className="userImg">
                          <span className="rounded-circle">
                              <img src="https://mironcoder-hotash-react.netlify.app/images/avatar/01.webp" alt="img" />
                          </span>
                      </div>
                      <div className='dropdownInfo'>
                      <h4>
                        <span>
                            <b>Rahul Patel </b>
                              added to his favorite list
                          <b> Leather belt steve madden</b>
                        </span>
                        </h4>
                        <p className="text-sky mb-0 ">few seconds ago</p>
                      </div>
                    </div>
                  </MenuItem>
                  <MenuItem onClick={handleCloseMyAccDrop} className='menuListItem'>
                    <div className="d-flex align-items-center  " >
                       <div className="userImg">
                          <span className="rounded-circle">
                              <img src="https://mironcoder-hotash-react.netlify.app/images/avatar/01.webp" alt="img" />
                          </span>
                      </div>
                      <div className='dropdownInfo'>
                      <h4>
                        <span>
                            <b>Rahul Patel </b>
                              added to his favorite list
                          <b> Leather belt steve madden</b>
                        </span>
                        </h4>
                        <p className="text-sky mb-0 ">few seconds ago</p>
                      </div>
                    </div>
                  </MenuItem>
                  <MenuItem onClick={handleCloseMyAccDrop} className='menuListItem'>
                    <div className="d-flex align-items-center  " >
                       <div className="userImg">
                          <span className="rounded-circle">
                              <img src="https://mironcoder-hotash-react.netlify.app/images/avatar/01.webp" alt="img" />
                          </span>
                      </div>
                      <div className='dropdownInfo'>
                      <h4>
                        <span>
                            <b>Rahul Patel </b>
                              added to his favorite list
                          <b> Leather belt steve madden</b>
                        </span>
                        </h4>
                        <p className="text-sky mb-0 ">few seconds ago</p>
                      </div>
                    </div>
                  </MenuItem>
                  <MenuItem onClick={handleCloseMyAccDrop} className='menuListItem'>
                    <div className="d-flex align-items-center  " >
                       <div className="userImg">
                          <span className="rounded-circle">
                              <img src="https://mironcoder-hotash-react.netlify.app/images/avatar/01.webp" alt="img" />
                          </span>
                      </div>
                      <div className='dropdownInfo'>
                      <h4>
                        <span>
                            <b>Rahul Patel </b>
                              added to his favorite list
                          <b> Leather belt steve madden</b>
                        </span>
                        </h4>
                        <p className="text-sky mb-0 ">few seconds ago</p>
                      </div>
                    </div>
                  </MenuItem>
                  <MenuItem onClick={handleCloseMyAccDrop} className='menuListItem'>
                    <div className="d-flex align-items-center  " >
                       <div className="userImg">
                          <span className="rounded-circle">
                              <img src="https://mironcoder-hotash-react.netlify.app/images/avatar/01.webp" alt="img" />
                          </span>
                      </div>
                      <div className='dropdownInfo'>
                      <h4>
                        <span>
                            <b>Rahul Patel </b>
                              added to his favorite list
                          <b> Leather belt steve madden</b>
                        </span>
                        </h4>
                        <p className="text-sky mb-0 ">few seconds ago</p>
                      </div>
                    </div>
                  </MenuItem>
                  <MenuItem onClick={handleCloseMyAccDrop} className='menuListItem'>
                    <div className="d-flex align-items-center  " >
                       <div className="userImg">
                          <span className="rounded-circle">
                              <img src="https://mironcoder-hotash-react.netlify.app/images/avatar/01.webp" alt="img" />
                          </span>
                      </div>
                      <div className='dropdownInfo'>
                      <h4>
                        <span>
                            <b>Rahul Patel </b>
                              added to his favorite list
                          <b> Leather belt steve madden</b>
                        </span>
                        </h4>
                        <p className="text-sky mb-0 ">few seconds ago</p>
                      </div>
                    </div>
                  </MenuItem>
                  </div>
                  <div className="pt-2 px-2 pb-0 w-100">
                  <button className="btn-blue w-100">View all notifications </button>
                  </div>
                   
                   
 
              </Menu>
              {/* Notification  Bell Ends*/}
              
              </div>
              
              <Button
                className="myAcc d-flex align-items-center"
                onClick={handleOpenMyAccDrop}
              >
                <div className="userImg">
                  <span className="rounded-circle">
                    <img
                      src="https://mironcoder-hotash-react.netlify.app/images/avatar/01.webp"
                      alt="img"
                    />
                  </span>
                </div>
                <div className="userInfo">
                  <h4>Rahul Patel</h4>
                  <p className="mb-0">@rahulpatel</p>
                </div>
              </Button>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={openMyAcc}
                onClose={handleCloseMyAccDrop}
                onClick={handleCloseMyAccDrop}
                slotProps={{
                  paper: {
                    elevation: 0,
                    sx: {
                      overflow: "visible",
                      filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                      mt: 1.5,
                      "& .MuiAvatar-root": {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      "&::before": {
                        content: '""',
                        display: "block",
                        position: "absolute",
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: "background.paper",
                        transform: "translateY(-50%) rotate(45deg)",
                        zIndex: 0,
                      },
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem onClick={handleCloseMyAccDrop}>
                  <ListItemIcon>
                    <PersonAdd fontSize="small" />
                  </ListItemIcon>
                  My Account
                </MenuItem>

                <MenuItem onClick={handleCloseMyAccDrop}>
                  <ListItemIcon>
                    <FaShieldHalved fontSize="small" />
                  </ListItemIcon>
                  Reset Password
                </MenuItem>
                <MenuItem onClick={handleCloseMyAccDrop}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Index;
