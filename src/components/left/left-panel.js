import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { UserService } from "../../service/userservice"

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
    }, [location])
    const getAddminLink = () => {
        return <>
            <li class="nav-item">
                <Link class="nav-link text-white " to="/admin/dashboard">

                    <span class="nav-link-text ms-1">Dashboard</span>
                </Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link text-white " to="/admin/users">
                    <span class="nav-link-text ms-1">Users</span>
                </Link>
            </li>
        </>
    }
    const getOwnerLink = () => {
        return <>
            <li class="nav-item">
                <Link class="nav-link text-white " to="/owner/offerlist">

                    <span class="nav-link-text ms-1">Offer List</span>
                </Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link text-white " to="/owner/properties">
                    <span class="nav-link-text ms-1">Properties</span>
                </Link>
            </li>
        </>
    }
    const getCustomerLink = () => {

    }
    return <aside class="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3   bg-gradient-dark" id="sidenav-main">

        <div class="sidenav-header">
            <i class="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
            <a class="navbar-brand m-0" href=" https://demos.creative-tim.com/material-dashboard/pages/dashboard " target="_blank">
                <img src="../../assets/img/logo-ct.png" class="navbar-brand-img h-100" alt="main_logo" />
                <span class="ms-1 font-weight-bold text-white">Main Dashboard</span>
            </a>
        </div>


        <hr class="horizontal light mt-0 mb-2" />

        <div class="collapse navbar-collapse  w-auto " id="sidenav-collapse-main">
            <ul class="navbar-nav">
                {role.isAdmin ? getAddminLink() : ""}
                {role.isOwner ? getOwnerLink() : ""}
                {role.isCustomer ? getCustomerLink() : ""}
                <li class="nav-item">
                    <Link class="nav-link text-white " to="/messages">

                        <span class="nav-link-text ms-1">Messages</span>
                    </Link>
                </li>



            </ul>
        </div>

    </aside>

}

export default LeftPanel