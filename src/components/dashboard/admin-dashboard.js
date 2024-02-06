import { useEffect, useState } from "react"
import { AdminService } from "../../service/admin-service";
import PropertyTable from "../property/property-table";
import CustomerTable from "../customer/customer-table";
import './dashboard.scss'
import Favourite from "../favourite/favourite";
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
                <div class="card mb-4 ">
                    <div class="d-flex">

                        <h6 class="mt-3 mb-2 ms-3 ">Recent customer</h6>
                    </div>
                    <div class="card-body p-3">
                        <div class="row">

                            <CustomerTable data={dashboard.recentCustomers}>
                            </CustomerTable>

                        </div>
                    </div>
                </div>

            </div>
            <div className="dashboard-block col-6">
                <div class="card mb-4 ">
                    <div class="d-flex">

                        <h6 class="mt-3 mb-2 ms-3 ">Recent rented Property</h6>
                    </div>
                    <div class="card-body p-3">
                        <div class="row">

                            <PropertyTable data={dashboard.recentRented}></PropertyTable>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default AdminDashBoard