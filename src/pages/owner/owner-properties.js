import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import axios from 'axios'
import PropertyTable from "../../components/property/property-table"
import { useEffect, useState } from "react";
import { PropertyService } from "../../service/property";

const OwnerProperty = () => {
    const [properties, setProperties] = useState([]);


    const fetchProperties = () => {
        PropertyService.getMyProperties().then((res) => {
            setProperties(res);
        });
    }
    console.log(properties);
    useEffect(() => {
        fetchProperties();
    }, []);


    return <>
        <h3>Owner properties</h3>


        <div class="container">
            
            <div class="row">
                <div class="col"></div>
                <div class="col"></div>
                <div class="col">
                    {/* Need to route Add Property page */}
                    <Link to={'add-property'}><Button variant="success">Add property</Button>{' '}</Link>
                </div>
                <PropertyTable allowEdit={true} data={properties}></PropertyTable>
            </div>

        </div>
    </>
}

export default OwnerProperty