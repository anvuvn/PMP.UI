import { useEffect, useRef, useState } from "react"
import { Accordion, Button, ButtonGroup, Dropdown } from "react-bootstrap"
import { PropertyType } from "../../constant/PropertyType";
import './filter.scss'
import PropertyService from "../../service/property";
import States from '../../states.json'
const PropertyFilter = ({ onSearch }) => {
    const [location, setLocation] = useState([])
    const formRef = useRef(null);
    const applySearch = () => {
        let form = formRef.current;
        let searchInfo = {
            minPrice: parseFloat(form["min"].value) || 0,
            maxPrice: parseFloat(form["max"].value) || 0,
            propertyType: form["propertyType"].value,
            //location: form["location"].value,
            numberOfRoom: parseFloat(form["numberOfRoom"].value) || 1
        }
        console.log(searchInfo)
        PropertyService.searchProperty(searchInfo).then(res => {
            if (typeof onSearch === "function")
                onSearch(res);
        })
    }
    const loadLocation = () => {

    }
    useEffect(() => {

    }, [])
    return <>
        <aside class="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3" id="sidenav-filter">

            <div class="filter-header">
                <span class="ms-1 font-weight-bold">Properties filter</span>
                <button className="btn btn-primary" onClick={applySearch}>Apply</button>
            </div>


            <hr class="horizontal light mt-0 mb-2" />

            <div class="filter-content collapse navbar-collapse  w-auto " id="sidenav-collapse-main">
                <form ref={formRef}>


                    <Accordion defaultActiveKey={["0", "1", "2", "3"]} alwaysOpen>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>By prices</Accordion.Header>
                            <Accordion.Body>
                                <div className="price-group">
                                    <input className="form-control" placeholder="Min <" name="min" type="number" /> <span>And</span><input className="form-control" type="number" placeholder="< Max" name="max" />
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Property Type</Accordion.Header>
                            <Accordion.Body>

                                <select name="propertyType" className="form-control">
                                    {Object.keys(PropertyType).map(k => {
                                        return <option value={k} key={k}>{PropertyType[k]}</option>
                                    })}
                                </select>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Location</Accordion.Header>
                            <Accordion.Body>
                                <select name="location" className="form-control">
                                    {Object.keys(States).sort().map((k, i) => {
                                        return <optgroup key={i} label={k}>
                                            {States[k].sort().map((city, index) => {
                                                return <option value={k + "||" + city} key={index}>{city}</option>
                                            })}
                                        </optgroup>
                                    })}

                                </select>
                                {/* 
                                <select name="location" className="form-control">
                                    {location.map(l => {
                                        return <option value={l.id} key={l.id}>{l.name}</option>
                                    })}
                                </select> */}
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Number of rooms</Accordion.Header>
                            <Accordion.Body>
                                <select className="form-control" name="numberOfRoom">
                                    {
                                        Array.from({ length: 10 }).map((o, i) => {
                                            return <option value={i + 1} key={i}> {i + 1}</option>
                                        })
                                    }
                                </select>

                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </form>
            </div>

        </aside>
    </>
}

export default PropertyFilter