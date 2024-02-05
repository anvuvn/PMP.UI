import PropertyTable from "../../components/property/property-table"

const OwnerProperty = () => {
    return <>
    <h3>Owner properties</h3>
        <PropertyTable allowEdit={true} data={[]}></PropertyTable>
    </>
}

export default OwnerProperty