import { Route, Routes } from "react-router"
import Login from "./components/users/login"
import DefaultLandingPage from "./pages/public/landing-page"
import CustomerLandingPage from "./pages/customer/customer-landing-page"
import OwnerLandingPage from "./pages/owner/owner-landing-page"
import AdminLandingPage from "./pages/admin/admin-landing-page"
import Register from "./components/users/register"
import Users from "./pages/admin/users"
import AdminDashBoard from "./components/dashboard/admin-dashboard"
import Error403Permission from "./pages/403"
import MessageList from "./pages/messages/message-list"
import OwnerDashBoard from "./components/dashboard/owner-offersList"
import OwnerProperty from "./pages/owner/owner-properties"
import AdminProperties from "./pages/admin/admin-properties"
import OwnerOffersList from "./components/dashboard/owner-offersList"
import OfferList from "./pages/owner/offerList"
import Favourite from "./components/favourite/favourite"
import PropertyList from "./pages/customer/propertyList";
import OfferForm from "./pages/customer/offerForm";

const PageRoutes = () => {
    return <Routes>
        <Route path="/" element={<DefaultLandingPage></DefaultLandingPage>}></Route>
        <Route path="/authenticate" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/messages" element={<MessageList></MessageList>}></Route>
        <Route path="/public">
            <Route path="favourites" element={<Favourite></Favourite>}></Route>
        </Route>
        <Route path="/admin" element={<AdminLandingPage></AdminLandingPage>}>
            <Route path="dashboard" element={<AdminDashBoard></AdminDashBoard>}></Route>
            <Route path="properties" element={<AdminProperties></AdminProperties>}></Route>
            <Route path="users" element={<Users></Users>}></Route>
        </Route>

        <Route path="/customer">
            <Route path={""} element={<CustomerLandingPage></CustomerLandingPage>}></Route>
            <Route path="properties" element={<PropertyList></PropertyList>}></Route>
            <Route path={"properties/:propertyId/offer"} element={<OfferForm/>}></Route>
        </Route>

        <Route path="/owner" element={<OwnerLandingPage></OwnerLandingPage>}>
            <Route path="offerslist" element={<OwnerOffersList></OwnerOffersList>}></Route>
            <Route path="properties" element={<OwnerProperty></OwnerProperty>}></Route>
            <Route path="offerlist" element={<OfferList></OfferList>}></Route>
        </Route>

        <Route path="/403" element={<Error403Permission></Error403Permission>}></Route>

    </Routes>
}

export default PageRoutes