import { useEffect, useState } from "react"
import { AdminService } from "../../service/admin-service"
import { UserService } from "../../service/userservice"
import { Navigate } from "react-router"
import { ROLES } from "../../constant/Roles"
import { Button, FormCheck, Table } from "react-bootstrap"
import FormCheckInput from "react-bootstrap/esm/FormCheckInput"
import './admin.scss'

const Users = () => {
    const [userLsit, setUserList] = useState([])
    const [filterRole, setFilterRole] = useState(ROLES.OWNER)
    const [isAdmin, setIsAdmin] = useState(UserService.isAdmin())
    const reloadUser = () => {
        UserService.getUserByRole(filterRole).then(res => {
            console.log(res)
            setUserList(res)
        })
    }
    useEffect(() => {
        reloadUser()
    }, [filterRole])
    const approveOwner = (e, user) => {
        e.preventDefault();
        console.log(user)
        AdminService.approveOwner(user.id).then(res => {
            alert("Owner is Approved");
            reloadUser();
        })

    }
    const onRoleChange = (e) => {
        setFilterRole(e.target.value)
    }
    const renderAdminContent = () => {
        return <div className="admin-users">
            <div className="filter col-3">
                <label className="form-label">Filter by Roles</label>
                <select className="form-control" onChange={(e) => onRoleChange(e)}>
                    <option value={ROLES.OWNER}>Owner</option>
                    <option value={ROLES.CUSTOMER}>Customer</option>
                    <option value={ROLES.ADMIN}>Admin</option>
                </select>
            </div>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Is Pending</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {userLsit ? userLsit.map((d, index) => {
                        return <tr key={d.id}>
                            <td>{index}</td>
                            <td>{d.name}</td>
                            <td>{d.roles[0]}</td>
                            <td>
                                <FormCheck checked={d.pending}></FormCheck>
                            </td>

                            <td>
                                {!d.pending ? "" : <Button onClick={(e) => approveOwner(e, d)} variant="primary">Approve</Button>}
                            </td>
                        </tr>
                    }) : "No recent customer added"}
                </tbody>
            </Table>
        </div>
    }
    return <>
        {
            !isAdmin ? <Navigate to="/403"></Navigate> : renderAdminContent()
        }
    </>
}

export default Users