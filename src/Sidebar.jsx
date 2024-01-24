/* eslint-disable react/prop-types */
import {FaFire} from 'react-icons/fa';
import { BsPlus } from "react-icons/bs";
import {FaPoo} from "react-icons/fa";
import { BsFillLightningFill } from 'react-icons/bs';

const Sidebar = () =>{
    return(
        <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg">
        <SidebarIcon icon={<FaFire size="28"></FaFire>} text="Home"></SidebarIcon>
        <SidebarIcon icon={<BsPlus size="32"></BsPlus>} text="Add Friends"></SidebarIcon>
        <SidebarIcon icon={<BsFillLightningFill size="20"></BsFillLightningFill>} text="Servers"></SidebarIcon>
        <SidebarIcon icon={<FaPoo size="20"></FaPoo>} text="Archive"></SidebarIcon>
    </div>
    )
}
const SidebarIcon = ({icon,text}) => {
    return(
        <div className='sidebar-icon group'>{icon}
        <span className='sidebar-tooltip group-hover:scale-100'>{text}</span>
        </div>
    )
}
export default Sidebar;