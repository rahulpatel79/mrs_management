import Button from '@mui/material/Button';
import { useState } from 'react';
import { FaProductHunt, FaShoppingCart } from "react-icons/fa";
import { FaListUl } from "react-icons/fa6";
import { GrView } from "react-icons/gr";
import { ImCloudUpload } from "react-icons/im";
import { IoMdNotifications } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import { MdArrowForwardIos, MdDashboard } from "react-icons/md";
import { RiMessage3Fill } from "react-icons/ri";
import { Link } from 'react-router-dom';




const Sidebar = () => {

  const [activeTab, setActiveTab] = useState(null); 

  const isOpenSubmenu = () => {
     
  }

  return (
    <div className="sidebar">
      <ul className='p-0 m-0'>
        <li>
          <Link to="/" className=''>         
          <Button className={`w-100 fs-5 ${activeTab === 0 ? 'active' : ''}`} onClick={()=> isOpenSubmenu(1)}>
            <span className='icon'><MdDashboard /></span>
            Dashboard
                <span className='arrow'> <MdArrowForwardIos /></span>
          </Button>
          </Link>
        </li>
        <li>
          <Button className={`w-100 fs-5 ${activeTab === 1 ? 'active' : ''}`} onClick={()=> isOpenSubmenu(1)}>
            <span className='icon'><FaProductHunt /></span>
            Product
                <span className='arrow'> <MdArrowForwardIos /></span>
          </Button>
          <div className={`submenuWrapper ${activeTab === 1 ? 'collapse' : 'collapsed'}`}>
          <ul className='submenu'>
            <li><Link to='#'><span><FaListUl /></span> Product List</Link></li>
            <li><Link to='#'><span><GrView /></span> Product View</Link></li>
            <li><Link to='#'><span><ImCloudUpload /></span> Product Upload</Link></li>
          </ul>
        </div>
        </li>
        <li>
          <Link to="/" className=''> 
          <Button className={`w-100 fs-5 ${activeTab === 2 ? 'active' : ''}`} onClick={()=> isOpenSubmenu(1)}>
            <span className='icon'><FaShoppingCart /></span>
            Orders
                <span className='arrow'> <MdArrowForwardIos /></span>
          </Button>
          </Link>
        </li>
        <li>
          <Link to="/" className=''> 
          <Button className={`w-100 fs-5 ${activeTab === 3 ? 'active' : ''}`} onClick={()=> isOpenSubmenu(1)}>
            <span className='icon'><RiMessage3Fill /></span>
            Massage
                <span className='arrow'> <MdArrowForwardIos /></span>
          </Button>
          </Link>
        </li>
        <li>
          <Link to="/" className=''>
          <Button className={`w-100 fs-5 ${activeTab === 4 ? 'active' : ''}`} onClick={()=> isOpenSubmenu(1)}>
            <span className='icon'><IoMdNotifications /></span>
            Notification
                <span className='arrow'> <MdArrowForwardIos /></span>
            </Button>
            </Link>
        </li>
        <li>
          <Link to="/" className=''>
          <Button className={`w-100 fs-5 ${activeTab === 5 ? 'active' : ''}`} onClick={()=> isOpenSubmenu(1)}>
            <span className='icon'><IoSettingsSharp /></span>
            Setting
                <span className='arrow'> <MdArrowForwardIos /></span>
            </Button>
        </Link>
        </li>
        
        
      </ul>
    </div>
  );
};

export default Sidebar;
