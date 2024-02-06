import { Table } from "react-bootstrap"

const PropertyTable = ({ data, action }) => {
    return <>

        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>Address</th>
                    <th>Type</th>
                    {
                        typeof action === "function" ?
                            <th>action</th>
                            : ""}

                </tr>
            </thead>
            <tbody>
                {data ? data.map((d, index) => {
                    return <tr key={d.id}>
                        <td>{d.id}</td>
                        <td>{d.address?.line1}</td>
                        <td>{d.propertyType}</td>
                        {
                            typeof action === "function" ?
                                <td>
                                    {action(d)}
                                </td>
                                : ""}

                    </tr>
                }) : "No recent property added"}
            </tbody>
        </Table>
    </>
}
export default PropertyTable