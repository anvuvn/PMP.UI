import { useEffect, useState } from "react"
import { AdminService } from "../../service/admin-service"
import { UserService } from "../../service/userservice"
import { Navigate } from "react-router"
import { ROLES } from "../../constant/Roles"
import { Button, Table } from "react-bootstrap"

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
    return <>
        {
            !isAdmin ? <Navigate to="/403"></Navigate> :

                <div className="admin-users">
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Role</th>
                                <th>Is Pending Approval</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {userLsit ? userLsit.map((d, index) => {
                                return <tr key={d.id}>
                                    <td>{index}</td>
                                    <td>{d.name}</td>
                                    <td>{d.roles[0]}</td>
                                    <td>{d.pending.toString()}</td>
                                    <td>
                                        {!d.pending ?"": <Button onClick={(e) => approveOwner(e, d)} variant="primary">Approve</Button>}
                                    </td>
                                </tr>
                            }) : "No recent customer added"}
                        </tbody>
                    </Table>
                </div>
        }
    </>
}

export default Users