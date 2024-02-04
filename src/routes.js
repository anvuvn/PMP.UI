import { Route, Routes } from "react-router"
import Login from "./components/users/login"
import DefaultLandingPage from "./pages/public/landing-page"
import CustomerLandingPage from "./pages/customer/customer-landing-page"
import OwnerLandingPage from "./pages/owner/owner-landing-page"
import AdminLandingPage from "./pages/admin/admin-landing-page"
import Register from "./components/users/register"
import Users from "./pages/admin/users"
import AdminDashBoard from "./components/dashboard/admin-dashboard"

const PageRoutes = () => {
    return <Routes>
        <Route path="/" element={<DefaultLandingPage></DefaultLandingPage>}></Route>
        <Route path="/authenticate" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/admin" element={<AdminLandingPage></AdminLandingPage>}>
            
            <Route path="dashboard" element={<AdminDashBoard></AdminDashBoard>}></Route>
            <Route path="users" element={<Users></Users>}></Route>
        </Route>

        <Route path="/customer" element={<CustomerLandingPage></CustomerLandingPage>}>

        </Route>
        <Route path="/owner" element={<OwnerLandingPage></OwnerLandingPage>}>

        </Route>

    </Routes>
}

export default PageRoutes