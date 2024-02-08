import React,{ useState}  from 'react'
import SendMessage from '../../components/messages/send-message';
import MessageDialog from '../../components/messages/message-dialog';
import { MessageService } from '../../service/messager-service';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const OfferTable = ({ data, action }) => {

    //console.log("Data:::::"+data);

    const [status,setStatus]=useState("");

    const statusHandleChange=(event)=>{
       
       const selectedStatus = event;
       setStatus(selectedStatus);
       //console.log('Selected status:', selectedStatus); 
    }
 
    const fetchOffersByStatus=()=>{


    }

    const acceptHandleChange=(id)=>{
        console.log("Accept::::::"+id);
    }


    const declineHandleChange=(id)=>{
        console.log("Decline:::"+id);
    }
    
    

    return (
        <div>
            <h1>Customer Offer List</h1>

            <div class="container">
                <div class="row">
                    <div class="col-1 col"></div>
                    <div class="col-2 col">
                    </div>
                    <div class="col-3 col">

                    </div>
                    <div class="col-4 col">
{/*                         <DropdownButton id="dropdown-basic-button" title="Filter by status" onChange={(e) => statusHandleChange(e)}>
                            <Dropdown.Item   value="Available">Available</Dropdown.Item>
                            <Dropdown.Item value="Pending">Pending</Dropdown.Item>
                            <Dropdown.Item value="Contingent">Contingent</Dropdown.Item>
                            <Dropdown.Item value="Complete">Complete</Dropdown.Item>
                            
                        </DropdownButton> */}

                        <Dropdown onSelect={(eventKey)=> {statusHandleChange(eventKey)}}>
                            <Dropdown.Toggle id="dropdown-basic">
                                Select by Status
                            </Dropdown.Toggle>
                            <Dropdown.Menu>

                            <Dropdown.Item key="Available" eventKey="Available">Available</Dropdown.Item>
                            <Dropdown.Item key="Pending" eventKey="Pending">Pending</Dropdown.Item>
                            <Dropdown.Item key="Contingent" eventKey="Contingent">Contingent</Dropdown.Item>
                            <Dropdown.Item key="Complete" eventKey="Complete">Complete</Dropdown.Item>
                            
                            </Dropdown.Menu>
                        </Dropdown> 


                        {/* <Dropdown onSelect={(e)=> {console.log(e.target.value)}}>
                            <Dropdown.Toggle id="dropdown-basic">
                            {property.propertyType
                                ? property.propertyType
                                : 'Select property type'}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                            {PROPERTY_TYPES.map((pType) => (
                                <Dropdown.Item key={pType.type} eventKey={pType.type}>
                                {pType.name}
                                </Dropdown.Item>
                            ))}
                            </Dropdown.Menu>
                        </Dropdown> */}
                        
                    </div>
                </div>
            </div>
           
            <div>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>CUSTOMER</th>
                            <th>OFFER PRICE</th>
                            <th>STATUS</th>
                           { <th>ACTION</th>}
{/*                            {
                            typeof action === "function" ?
                            <th>ACTION</th>
                            : ""} */}
                        </tr>
                    </thead>
                    <tbody>
                    {data ? data.map((d, index) => {
                     return <tr key={d.id}>
                       {/*  <td>{d.id}</td> */}
                        <td>{d.customer.name}</td>
                        <td>{d.amount}</td>
                        <td>{d.status}</td>

                        <td>
                                <Button variant="outline-success" style={{ marginRight: 10 }} onClick={()=>acceptHandleChange(d.id)}>Accept</Button>{' '}
                                <Button variant="outline-danger" onClick={()=>declineHandleChange(d.id)}>Decline</Button>{' '}
                                <button type='button' class="btn-message btn btn-outline-warning" btn-sm style={{ marginLeft: 10 }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-arrow-up" viewBox="0 0 16 16">
                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4.5a.5.5 0 0 1-1 0V5.383l-7 4.2-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h5.5a.5.5 0 0 1 0 1H2a2 2 0 0 1-2-1.99zm1 7.105 4.708-2.897L1 5.383zM1 4v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1" />
                                    <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.354-5.354 1.25 1.25a.5.5 0 0 1-.708.708L13 12.207V14a.5.5 0 0 1-1 0v-1.717l-.28.305a.5.5 0 0 1-.737-.676l1.149-1.25a.5.5 0 0 1 .722-.016" />
                                </svg></button>
                            </td>


                    </tr>
                    }) : "No Offer List"}
{/*                         <tr>
                            <td>Customer1</td>
                            <td>$1000</td>
                            <td>Pending</td>
                            <td>
                                <Button variant="outline-success" style={{ marginRight: 10 }}>Accept</Button>{' '}
                                <Button variant="outline-danger">Decline</Button>{' '}
                                <button type='button' class="btn-message btn btn-outline-warning" btn-sm style={{ marginLeft: 10 }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-arrow-up" viewBox="0 0 16 16">
                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4.5a.5.5 0 0 1-1 0V5.383l-7 4.2-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h5.5a.5.5 0 0 1 0 1H2a2 2 0 0 1-2-1.99zm1 7.105 4.708-2.897L1 5.383zM1 4v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1" />
                                    <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.354-5.354 1.25 1.25a.5.5 0 0 1-.708.708L13 12.207V14a.5.5 0 0 1-1 0v-1.717l-.28.305a.5.5 0 0 1-.737-.676l1.149-1.25a.5.5 0 0 1 .722-.016" />
                                </svg></button>
                            </td>
                        </tr>
                        <tr>
                            <td>Customer2</td>
                            <td>$1500</td>
                            <td>Pending</td>
                            <td>
                                <Button variant="outline-success" style={{ marginRight: 10 }}>Accept</Button>{' '}
                                <Button variant="outline-danger">Decline</Button>{' '}
                                <button type='button' class="btn-message btn btn-outline-warning" btn-sm style={{ marginLeft: 10 }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-arrow-up" viewBox="0 0 16 16">
                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4.5a.5.5 0 0 1-1 0V5.383l-7 4.2-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h5.5a.5.5 0 0 1 0 1H2a2 2 0 0 1-2-1.99zm1 7.105 4.708-2.897L1 5.383zM1 4v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1" />
                                    <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.354-5.354 1.25 1.25a.5.5 0 0 1-.708.708L13 12.207V14a.5.5 0 0 1-1 0v-1.717l-.28.305a.5.5 0 0 1-.737-.676l1.149-1.25a.5.5 0 0 1 .722-.016" />
                                </svg></button>
                            </td>
                        </tr>
                        <tr>
                            <td>Customer3</td>
                            <td>$3000</td>
                            <td>Pending</td>
                            <td>
                                <Button variant="outline-success" style={{ marginRight: 10 }}>Accept</Button>{' '}
                                <Button variant="outline-danger">Decline</Button>{' '}
                                <button type='button' class="btn-message btn btn-outline-warning" btn-sm style={{ marginLeft: 10 }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-arrow-up" viewBox="0 0 16 16">
                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4.5a.5.5 0 0 1-1 0V5.383l-7 4.2-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h5.5a.5.5 0 0 1 0 1H2a2 2 0 0 1-2-1.99zm1 7.105 4.708-2.897L1 5.383zM1 4v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1" />
                                    <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.354-5.354 1.25 1.25a.5.5 0 0 1-.708.708L13 12.207V14a.5.5 0 0 1-1 0v-1.717l-.28.305a.5.5 0 0 1-.737-.676l1.149-1.25a.5.5 0 0 1 .722-.016" />
                                </svg></button>
                            </td>
                        </tr> */}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default OfferTable