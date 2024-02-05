import { useEffect, useState } from "react"
import { AdminService } from "../../service/admin-service";
import PropertyTable from "../property/property-table";
import CustomerTable from "../customer/customer-table";
import './dashboard.scss'
const AdminDashBoard = () => {

    const [dashboard, setDashboard] = useState({});
    useEffect(() => {
        AdminService.getDashboard().then(res => {
            setDashboard(res)
        })
    }, [])
    return <>
        <h1>Admin dashboard</h1>
        <div className="admin-dashboard">
            <div className="dashboard-block col-6">
                <h5>Recent customer</h5>
                <CustomerTable data={dashboard.recentCustomers}>
                </CustomerTable>
            </div>
            <div className="dashboard-block col-6">
                <h5>Recent rented Property</h5>
                <PropertyTable data={dashboard.recentRented}></PropertyTable>
            </div>
        </div>
    </>
}

export default AdminDashBoard