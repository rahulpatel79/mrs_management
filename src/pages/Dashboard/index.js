import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useState } from "react";
import { FaCircleUser } from "react-icons/fa6";
import { HiShoppingCart } from "react-icons/hi";
import { ImBin } from "react-icons/im";
import { IoIosEye, IoMdTimer } from "react-icons/io";
import { IoBagHandle, IoPencil, IoStarHalf } from "react-icons/io5";
import DashboardBox from "./components/DashboardBox";

function Dashboard() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [showBy, setShowBy] = useState("");
  const [showCat, setShowCat] = useState("");
  const [showBrand, setShowBrand] = useState("");
  const [showSearch, setShowSearch] = useState("");
  const open = Boolean(anchorEl);
  const ITEM_HEIGHT = 48;
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className="right-content w-100">
        <div className="row dashboardBoxWrapperRow">
          <div className="col-md-8">
            <div className="dashboardBoxWrapper d-flex">
              <DashboardBox
                color={["#1da256", "#48d483"]}
                icon={<FaCircleUser />}
                grow={true}
              />
              <DashboardBox
                color={["#c012e2", "#eb64fe"]}
                icon={<HiShoppingCart />}
                grow={true}
              />
              <DashboardBox
                color={["#2c78e5", "#60aff5"]}
                icon={<IoBagHandle />}
                grow={true}
              />
              <DashboardBox
                color={["#e1950e", "#f3cd29"]}
                icon={<IoStarHalf />}
                grow={true}
              />
            </div>
          </div>

          <div className="col-md-4 pl-0">
            <div className="box graphBox">
              <div className="d-flex align-items-center w-100 bottomEle top-0">
                <h6 className="text-white mb-0 mt-0">Last Month</h6>

                <div className="ms-auto">
                  <Button className="ms-auto toggleIcon" onClick={handleClick}>
                    <MoreHorizIcon />
                  </Button>
                  <Menu
                    className="dropdown_manu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    slotProps={{
                      paper: {
                        style: {
                          maxHeight: ITEM_HEIGHT * 4.5,
                          width: "20ch",
                        },
                      },
                      list: {
                        "aria-labelledby": "long-button",
                      },
                    }}
                  >
                    <MenuItem onClick={handleClose}>
                      <IoMdTimer /> Last Day
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <IoMdTimer /> Last Week
                    </MenuItem>
                  </Menu>
                </div>
              </div>

              <h3 className="text-white fw-bold">$3,787,681.00</h3>
              <p>$3,787,681.00 in last month</p>
              <h2>Add Chart</h2>
            </div>
          </div>
        </div>

        <div className="card shadow border-0 p-3">
          <h3 className="hd">Best Selling Products</h3>
          <div className="row cardFilters mt-3">
            <div className="col-md-3">
              <h4>SHOW BY</h4>

              <FormControl className="w-100">
                <InputLabel id="demo-select-small-label">Age</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={showBy}
                  label="Age"
                  onChange={(e) => setShowBy(e.target.value)}
                  className="w-100"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="col-md-3">
              <h4>Category By</h4>

              <FormControl className="w-100">
                <InputLabel id="demo-select-small-label">Age</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={showCat}
                  label="Age"
                  onChange={(e) => setShowCat(e.target.value)}
                  className="w-100"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="col-md-3">
              <h4>SHOW BY</h4>

              <FormControl className="w-100">
                <InputLabel id="demo-select-small-label">Age</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={showBrand}
                  label="Age"
                  onChange={(e) => setShowBrand(e.target.value)}
                  className="w-100"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="col-md-3">
              <h4>Search By</h4>

              <FormControl className="w-100">
                <InputLabel id="demo-select-small-label">Age</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={showSearch}
                  label="Age"
                  onChange={(e) => setShowSearch(e.target.value)}
                  className="w-100"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
  

          <div className="table-responsive mt-3">
            <table className='table table-bordered'>
              <thead className='thead-dark'>
                <tr>
                  <th>UID</th>
                  <th>product</th>
                  <th>category</th>
                  <th>brand</th>
                  <th>price</th>
                  <th>stock</th>
                  <th>rating</th>
                  <th>order</th>
                  <th>sales</th>
                  <th>action</th>
                  </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#1</td>
                  <td>Tops and skirt set for Female</td>
                  <td>womans</td>
                  <td>richman</td>
                  <td>$21.00</td>
                  <td>30</td>
                  <td>4.9(16)</td>
                  <td>380</td>
                  <td>$38k</td>
                  <td className='actions d-flex align-items-center'>
                    <Button color='secondary'><IoIosEye /> </Button>
                    <Button color='success'><IoPencil /></Button>
                    <Button color='error '><ImBin /></Button>
                      
                  
                  </td>
                  
                    </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
