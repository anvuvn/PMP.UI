import { Table } from "react-bootstrap"

const CustomerTable = ({ data }) => {

    return <Table striped bordered hover size="sm">
        <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Created Date</th>
            </tr>
        </thead>
        <tbody>
            {data.map((d, index) => {
                return <tr>
                    <td>{index}</td>
                    <td>{d.name}</td>
                    <td>{d.createdDate}</td>
                </tr>
            })}
        </tbody>
    </Table>
}

export default CustomerTable