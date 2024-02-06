import { useEffect, useState } from "react"
import PropertyTable from "../../components/property/property-table"
import PropertyService from "../../service/property";

const OwnerProperty = () => {
    const [properties, setProperties] = useState([]);
    const loadProperty = () => {
        PropertyService.getMyProperties().then(res => {
            setProperties(res);
        })
    }
    useEffect(() => {
        loadProperty();
    }, [])
    return <>
        <h3>Owner properties</h3>
        <PropertyTable data={properties}></PropertyTable>
    </>
}

export default OwnerProperty