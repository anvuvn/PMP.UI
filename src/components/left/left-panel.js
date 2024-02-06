import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { UserService } from "../../service/userservice"
import "./styles.css"

const LeftPanel = () => {
    const [role, setRole] = useState({})
    const location = useLocation();
    const reloadRole = () => {
        setRole({
            isAdmin: UserService.isAdmin(),
            isOwner: UserService.isOwner(),
            isCustomer: UserService.isCustomer()
        });

    }
    useEffect(() => {
        reloadRole();
        setIsLoggedIn(UserService.isAuthenticated());
    }, [location])
    const getAddminLink = () => {
        return <>
            <li className="nav-item">
                <Link class="nav-link text-black " to="/admin/dashboard">

                    <span className="nav-link-text ms-1">Dashboard</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link class="nav-link text-black " to="/admin/users">
                    <span className="nav-link-text ms-1">Users</span>
                </Link>
            </li>
        </>
    }
    const getOwnerLink = () => {
        return <>
            <li className="nav-item">
                <Link className="nav-link text-black " to="/owner/offerslist">

                    <span className="nav-link-text ms-1">Offers List</span>
                </Link>
                <Link className="nav-link text-black " to="/owner/offerlist">

                    <span className="nav-link-text ms-1">Offer List</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link class="nav-link text-black " to="/owner/properties">
                    <span className="nav-link-text ms-1">My Properties</span>
                </Link>
            </li>
        </>
    }
    const getCustomerLink = () => {
        return <>
            <li className="nav-item">
                <Link className="nav-link text-black " to="/customer/properties">
                    <i className={"material-icons"}>apartment</i>
                    <span className="nav-link-text ms-1">
                        List Properties
                    </span>
                </Link>
            </li>
        </>
    }

    const [isLoggedIn, setIsLoggedIn] = useState(UserService.isAuthenticated());

    if(!isLoggedIn){
        return "";
    }
    return <aside className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 custom-nav" id="sidenav-main">

        <div className="sidenav-header">
            <a className="navbar-brand m-0" href=" https://demos.creative-tim.com/material-dashboard/pages/dashboard " target="_blank">
                <span className={"material-icons"}>
                    real_estate_agent
                </span>
                <span className="ms-1 font-weight-bold text-blue">Main Dashboard</span>
            </a>
        </div>


        <div className="collapse navbar-collapse  w-auto " id="sidenav-collapse-main">
            <ul className="navbar-nav">
                {role.isAdmin ? getAddminLink() : ""}
                {role.isOwner ? getOwnerLink() : ""}
                {role.isCustomer ? getCustomerLink() : ""}
                <li className="nav-item">
                    <Link className="nav-link text-black" to="/messages">
                        <i className={"material-icons"}>mail</i>
                        <span className="nav-link-text ms-1">Messages</span>
                    </Link>
                </li>



            </ul>
        </div>

    </aside>
}

export default LeftPanel