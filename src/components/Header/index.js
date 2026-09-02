import Button from "@mui/material/Button";
import * as React from "react";
import { CiLight, CiMail, CiShoppingCart } from "react-icons/ci";
import { FaRegBell } from "react-icons/fa6";
import { MdMenuOpen } from "react-icons/md";

import Logout from "@mui/icons-material/Logout";
import PersonAdd from "@mui/icons-material/PersonAdd";
import ListItemIcon from "@mui/material/ListItemIcon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { FaShieldHalved } from "react-icons/fa6";
import { Link } from "react-router-dom";
import logo from "../../assets/imgs/logo.png";
import SearchBox from "../Search";

function Index() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);

  const handleOpenMyAccDrop = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMyAccDrop = () => {
    setAnchorEl(null);
  };

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
                onClick={handleOpenMyAccDrop}
              >
                <CiShoppingCart />
              </Button>
              <Button className="rounded-circle me-3">
                <CiMail />
              </Button>
              <Button className="rounded-circle me-3">
                <FaRegBell />
              </Button>

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
                open={open}
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
