import { Outlet } from "react-router-dom";
import SideNavbar from "../Components/Dashboard/js/Sidenavbar"

function Dashboardview(props){
    return(
        <div>
            <SideNavbar/>
            <Outlet/>
        </div>
    );
}
export default Dashboardview;