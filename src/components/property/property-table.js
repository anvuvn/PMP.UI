import { Table } from "react-bootstrap"
import { useNavigate } from "react-router";
import Button from 'react-bootstrap/Button';

const PropertyTable = ({ data, action }) => {

    const navigate=useNavigate();



    const viewOfferHandleChange=(id)=>{

        console.log("idddd:",id);
        navigate('/owner/'+id+'/offerlist');
    }

    return <>

        <Table className="table align-items-center justify-content-center mb-0">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Address</th>
                    <th>Status</th>
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
                        <td>{d.address?.line1}, {d.address?.state}</td>
                        <td>{d.status}</td>
                        <td>{d.propertyType}</td>
                        {
                            typeof action === "function" ?
                                <td>
                                    {action(d)}
                                </td>
                                : ""}

                       <td>
                            <Button variant="outline-dark btn-sm" style={{marginRight:10}} onClick={()=>viewOfferHandleChange(d.id)}>View offers</Button>
                       </td>         

                    </tr>
                }) : "No recent property added"}
            </tbody>
        </Table>
    </>
}
export default PropertyTable