import { Table } from "react-bootstrap"

const PropertyTable = ({ data }) => {
    return <>
    
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>#</th>
<<<<<<< HEAD
                    <th>Property Name</th>
                    <th>Created Date</th>
                    <th>Status</th>
                    <th>Action</th>
=======
                    <th>Name</th>

>>>>>>> 9d93da529c1534777abaf347e3b48f243b80b578
                </tr>
            </thead>
            <tbody>
                {data ? data.map((d, index) => {
                    return <tr key={d.id}>
                        <td>{index}</td>
                        <td>{d.name}</td>

                    </tr>
                }) : "No recent property added"}
            </tbody>
        </Table>
    </>
}
export default PropertyTable