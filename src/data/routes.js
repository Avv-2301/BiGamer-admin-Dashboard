import { MdOutlineDashboard } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { FaDropbox } from "react-icons/fa";

export const  menus = [
    {name:'Dashboard', link:'/admindashboard', icon:<MdOutlineDashboard/>},
    {name:'Profile', link:'/profile', icon:<FaRegUser/>},
    {name:'Add Game', link:'/addproduct', icon:<FaDropbox/>}
];