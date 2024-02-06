import { Table } from "react-bootstrap"

const PropertyTable = ({ data }) => {
    return <>
    
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
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