import { Navigate, Outlet, useLocation } from "react-router"
import AdminDashBoard from "../../components/dashboard/admin-dashboard"
import { Link } from "react-router-dom"

const AdminLandingPage = () => {
    const localtion = useLocation()
    return <>
        {localtion.pathname === "/admin" ? <Navigate to="/admin/dashboard"></Navigate> : ""}
        <h3>Admin menu</h3>
        <ul>
            <li><Link to="/admin/dashboard">dashboard</Link></li>
            <li> <Link to="/admin/users">users</Link></li>
        </ul>


        <Outlet></Outlet>
    </>
}
export default AdminLandingPage