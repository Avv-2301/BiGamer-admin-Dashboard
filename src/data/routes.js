import { MdOutlineDashboard } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { FaDropbox } from "react-icons/fa";

export const  menus = [
    {name:'Dashboard', link:'/dashboard', icon:<MdOutlineDashboard/>},
    {name:'Profile', link:'/profile', icon:<FaRegUser/>},
    {name:'Product', link:'/product', icon:<FaDropbox/>}
];