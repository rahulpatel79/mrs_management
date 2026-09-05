import Button from '@mui/material/Button';
import { useState } from 'react';
import { FaProductHunt, FaShoppingCart } from "react-icons/fa";
import { FaListUl } from "react-icons/fa6";
import { GrView } from "react-icons/gr";
import { ImCloudUpload } from "react-icons/im";
import { IoMdNotifications } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import { MdArrowForwardIos, MdDashboard, MdOutlineLock } from "react-icons/md";
import { RiMessage3Fill } from "react-icons/ri";
import { Link } from 'react-router-dom';




const Sidebar = () => {

const [activeTab, setActiveTab] = useState(0);

const isOpenSubmenu = (index) => {
    setActiveTab(activeTab === index ? null : index);
};


  return (
    <div className="sidebar">
      <ul className='p-0 m-0'>
        <li>

          <Button className={`w-100 fs-5 ${activeTab === 0 ? 'active' : ''}`} onClick={()=> isOpenSubmenu(0)}>
            <span className='icon'><MdDashboard /></span>
            Dashboard
                <span className='dashArrow'> <MdArrowForwardIos /></span>
          </Button>
           
        </li>
        <li>
          <Button className={`w-100 fs-5 ${activeTab === 1  ? 'active' : ''}`} onClick={()=> isOpenSubmenu(1)}>
            <span className='icon'><FaProductHunt /></span>
            Product
                <span className='arrow'> <MdArrowForwardIos /></span>
          </Button>
          <div className={`submenuWrapper ${activeTab === 1 ? 'colapse' : 'colapsed'}`}>
          <ul className='submenu'>
            <li><Link to='#'><span><FaListUl /></span> Product List</Link></li>
            <li><Link to='#'><span><GrView /></span> Product View</Link></li>
            <li><Link to='#'><span><ImCloudUpload /></span> Product Upload</Link></li>
          </ul>
        </div>
        </li>
        <li>
            
          <Button className={`w-100 fs-5 ${activeTab === 2 ? 'active' : ''}`} onClick={()=> isOpenSubmenu(2)}>
            <span className='icon'><FaShoppingCart /></span>
            Orders
                <span className='arrow'> <MdArrowForwardIos /></span>
          </Button>
            <div className={`submenuWrapper ${activeTab === 2 ? 'colapse' : 'colapsed'}`}>
          <ul className='submenu'>
            <li><Link to='#'><span><FaListUl /></span> Order List</Link></li>
            <li><Link to='#'><span><GrView /></span> Order View</Link></li>
            <li><Link to='#'><span><ImCloudUpload /></span> Order Upload</Link></li>
          </ul>
        </div>
           
        </li>
        <li>
           
          <Button className={`w-100 fs-5 ${activeTab === 3 ? 'active' : ''}`} onClick={()=> isOpenSubmenu(3)}>
            <span className='icon'><RiMessage3Fill /></span>
            Massage
                <span className='arrow'> <MdArrowForwardIos /></span>
          </Button>
           
        </li>
        <li>
          
          <Button className={`w-100 fs-5 ${activeTab === 4 ? 'active' : ''}`} onClick={()=> isOpenSubmenu(4)}>
            <span className='icon'><IoMdNotifications /></span>
            Notification
                <span className='arrow'> <MdArrowForwardIos /></span>
            </Button>
             
        </li>
        <li>
          
          <Button className={`w-100 fs-5 ${activeTab === 5 ? 'active' : ''}`} onClick={()=> isOpenSubmenu(5)}>
            <span className='icon'><IoSettingsSharp /></span>
            Setting
                <span className='arrow'> <MdArrowForwardIos /></span>
            </Button>
         
        </li>
        
        
      </ul>
      <br />
      <div className="logoutWrapper">
        <div className="logoutBox">
              <Button variant="contained"><MdOutlineLock />Logout</Button>
        </div>
      </div>

    </div>
  );
};

export default Sidebar;
