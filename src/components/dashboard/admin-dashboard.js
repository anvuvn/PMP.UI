import { useEffect, useState } from "react"
import { AdminService } from "../../service/admin-service";
import PropertyTable from "../property/property-table";
import CustomerTable from "../customer/customer-table";

const AdminDashBoard = () => {

    const [dashboard, setDashboard] = useState({});
    useEffect(() => {
        AdminService.getDashboard().then(res => {
            setDashboard(res)
        })
    }, [])
    return <>
        <h1>Admin dashboard</h1>
        <div className="col-6">
            <CustomerTable data={dashboard.recentCustomers}>
            </CustomerTable>
        </div>
        <div className="col-6">
            <PropertyTable data={dashboard.recentRented}></PropertyTable>
        </div>
    </>
}

export default AdminDashBoard