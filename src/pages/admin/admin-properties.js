import PropertyTable from "../../components/property/property-table"

const AdminProperties = () => {
    
    return <>
        <h3>Admin Properties</h3>
        <PropertyTable allowApprove={true} allowSendMessage={true} data={[]}></PropertyTable>
    </>
}

export default AdminProperties