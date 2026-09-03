import Button from '@mui/material/Button';
import { FaProductHunt, FaShoppingCart } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import { MdArrowForwardIos, MdDashboard } from "react-icons/md";
import { RiMessage3Fill } from "react-icons/ri";


const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className='p-0 m-0'>
        <li>
          <Button className='w-100'>
            <span className='icon'><MdDashboard /></span>
            Dashboard
                <span className='arrow'> <MdArrowForwardIos /></span>
            </Button>
        </li>
        <li>
          <Button className='w-100'>
            <span className='icon'><FaProductHunt /></span>
            Product
                <span className='arrow'> <MdArrowForwardIos /></span>
            </Button>
        </li>
        <li>
          <Button className='w-100'>
            <span className='icon'><FaShoppingCart /></span>
            Orders
                <span className='arrow'> <MdArrowForwardIos /></span>
            </Button>
        </li>
        <li>
          <Button className='w-100'>
            <span className='icon'><RiMessage3Fill /></span>
            Massage
                <span className='arrow'> <MdArrowForwardIos /></span>
            </Button>
        </li>
        <li>
          <Button className='w-100'>
            <span className='icon'><IoMdNotifications /></span>
            Notification
                <span className='arrow'> <MdArrowForwardIos /></span>
            </Button>
        </li>
        <li>
          <Button className='w-100'>
            <span className='icon'><IoSettingsSharp /></span>
            Setting
                <span className='arrow'> <MdArrowForwardIos /></span>
            </Button>
        </li>
        
        
      </ul>
    </div>
  );
};

export default Sidebar;
