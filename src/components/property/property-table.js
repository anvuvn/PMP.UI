import { Table } from "react-bootstrap"
import { Link } from "react-router-dom"

const PropertyTable = ({ data, allowSendMessage, allowApprove }) => {
    const approveProperty = (e) => {
        e.preventDefault();
    }
    const sendMessage = (e) => {
        e.preventDefault();
    }
    return <>

        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Type</th>
                    <th>action</th>
                </tr>
            </thead>
            <tbody>
                {data ? data.map((d, index) => {
                    return <tr key={d.id}>
                        <td>{index}</td>
                        <td>{d.name}</td>
                        <td>{d.propertyType}</td>
                        <td>
                            {allowSendMessage ? <a className="action-link" href="#" onClick={(e => sendMessage(e))}>Send message</a> : ""}
                            {allowApprove ? <a className="action-link"  href="#" onClick={(e) => approveProperty(e)}>Approve</a> : ""}
                        </td>
                    </tr>
                }) : "No recent property added"}
            </tbody>
        </Table>
    </>
}
export default PropertyTable