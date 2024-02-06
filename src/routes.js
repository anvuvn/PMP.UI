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
import OwnerDashBoard from "./components/dashboard/owner-dashboard"
import OwnerProperty from "./pages/owner/ower-properties"
import AdminProperties from "./pages/admin/admin-properties"
import AddProperty from "./components/property/add-property"

import ImagesUpload from "./components/property/image-uploader"
import { useContext } from "react"
import { AddingPropertyContext } from "./components/context/property.context"

const PageRoutes = () => {
  
    
    return <Routes>
        <Route path="/" element={<DefaultLandingPage></DefaultLandingPage>}></Route>
        <Route path="/authenticate" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/messages" element={<MessageList></MessageList>}></Route>
        <Route path="/public/properties"></Route>
        <Route path="/admin" element={<AdminLandingPage></AdminLandingPage>}>
            <Route path="dashboard" element={<AdminDashBoard></AdminDashBoard>}></Route>
            <Route path="users" element={<Users></Users>}></Route>
            <Route path="properties" element={<AdminProperties></AdminProperties>}></Route>
        </Route>

        <Route path="/customer" element={<CustomerLandingPage></CustomerLandingPage>}>

        </Route>
        <Route path="/owner" element={<OwnerLandingPage></OwnerLandingPage>}>
            <Route path="dashboard" element={<OwnerDashBoard></OwnerDashBoard>}></Route>
            <Route path="properties" element={<OwnerProperty></OwnerProperty>}></Route>
 
                <Route path="add-property" element={<AddProperty ></AddProperty>}></Route>
                <Route path="image-uploader" element={<ImagesUpload ></ImagesUpload>}></Route> 
  
        </Route>

        <Route path="/403" element={<Error403Permission></Error403Permission>}></Route>

    </Routes>
}

export default PageRoutes