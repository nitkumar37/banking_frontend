import { Outlet } from "react-router-dom";
import TopNavbar from "../Components/public_page/js/Topnavbar";

function Welcomeview(props){
    return (
        <div>
            <TopNavbar/>
            <Outlet/>
        </div>
    );
}
export default Welcomeview;