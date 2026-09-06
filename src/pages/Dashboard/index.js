import Button from "@mui/material/Button";
import { FaCircleUser } from "react-icons/fa6";
import { HiShoppingCart } from "react-icons/hi";
import { IoMdTimer } from "react-icons/io";
import { IoBagHandle, IoStarHalf } from "react-icons/io5";

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from 'react';
import DashboardBox from './components/DashboardBox';

import { Chart } from "react-google-charts";

export const data = [
  ["Year", "Sales", "Expenses"],
  ["2004", 1000, 400],
  ["2005", 1170, 460],
  ["2006", 660, 1120],
  ["2007", 1030, 540],
];

export const options = {
  title: "Sales & Expenses",
  curveType: "function",

  backgroundColor: "transparent",

  chartArea: {
    left: 55,
    top: 45,
    width: "86%",
    height: "68%",
    backgroundColor: "transparent",
  },

  colors: [
    "#63F5FF", // Sales - cyan
    "#FFD166", // Expenses - gold
  ],

  legend: {
    position: "bottom",
    textStyle: {
      color: "#FFFFFF",
      fontSize: 12,
    },
  },

  titleTextStyle: {
    color: "#FFFFFF",
    fontSize: 16,
    bold: true,
  },

  hAxis: {
    textStyle: {
      color: "rgba(255,255,255,0.75)",
      fontSize: 11,
    },
    gridlines: {
      color: "transparent",
    },
    baselineColor: "rgba(255,255,255,0.25)",
  },

  vAxis: {
    textStyle: {
      color: "rgba(255,255,255,0.75)",
      fontSize: 11,
    },
    gridlines: {
      color: "rgba(255,255,255,0.10)",
      count: 5,
    },
    baselineColor: "transparent",
  },

  pointSize: 6,

  lineWidth: 3,

  focusTarget: "category",

  tooltip: {
    textStyle: {
      color: "#172554",
      fontSize: 13,
    },
    showColorCode: true,
  },

  animation: {
    startup: true,
    duration: 1200,
    easing: "out",
  },
};

function Dashboard() {
    const [anchorEl, setAnchorEl] = useState(null);
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
              <DashboardBox color={["#1da256", "#48d483"]} icon={<FaCircleUser />} grow={true} />
              <DashboardBox color={["#c012e2", "#eb64fe"]} icon={<HiShoppingCart />} grow={true} />
              <DashboardBox color={["#2c78e5", "#60aff5"]} icon={<IoBagHandle />} grow={true}/>
              <DashboardBox color={["#e1950e", "#f3cd29"]} icon={<IoStarHalf /> } grow={true}/>
               
            </div>
          </div>

          <div className="col-md-4 pl-0">
            <div className="box graphBox">
                   <div className="d-flex align-items-center w-100 bottomEle top-0">
          <h6 className="text-white mb-0 mt-0">Last Month</h6>

          <div className="ms-auto">
            <Button className="ms-auto toggleIcon"  onClick={handleClick}>
              <MoreHorizIcon />
              

              
            </Button>
            <Menu className='dropdown_manu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: '20ch',
            },
          },
          list: {
            'aria-labelledby': 'long-button',
          },
        }}
      >
          
          <MenuItem  onClick={handleClose}>
             
            <IoMdTimer /> Last Day
          </MenuItem>
          <MenuItem  onClick={handleClose}>
             
            <IoMdTimer /> Last Week
          </MenuItem>
        
      
              </Menu>
          </div>
              </div>

                  <h3 className="text-white fw-bold">$3,787,681.00</h3>
                  <p>$3,787,681.00 in last month</p>
                   <Chart className='chartDesign' chartType="LineChart" width="100%" height="290px" data={data} options={options}/>
            </div>
          </div>

        
        </div>
      </div>
    </>
  );
}

export default Dashboard;
