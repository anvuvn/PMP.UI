import { Route, Routes } from "react-router"
import Login from "./components/users/login"
import DefaultLandingPage from "./pages/landing-page"
import CustomerLandingPage from "./pages/customer-landing-page"
import OwnerLandingPage from "./pages/owner-landing-page"
import AdminLandingPage from "./pages/admin-landing-page"

const PageRoutes = () => {
    return <Routes>
        <Route path="/" element={<DefaultLandingPage></DefaultLandingPage>}></Route>
        <Route path="/authenticate" element={<Login></Login>}></Route>
        <Route path="/admin" element={<AdminLandingPage></AdminLandingPage>}>

        </Route>

        <Route path="/customer" element={<CustomerLandingPage></CustomerLandingPage>}>

        </Route>
        <Route path="/owner" element={<OwnerLandingPage></OwnerLandingPage>}>

        </Route>

    </Routes>
}

export default PageRoutes