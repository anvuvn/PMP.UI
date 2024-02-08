import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import OwnerService from "../../service/owner-service";
import {Link} from "react-router-dom";

const OfferTable = ({ data, action }) => {

    const [ownerId, setOwnerId] = useState();//Need to ask Anh

    const [selectedStatus, setSelectedStatus] = useState(null);

    const statusHandleChange = (event) => {


        setSelectedStatus(event);

        fetchOffersByStatus(event);
    }

    //Need to handle get offers by status 
    const fetchOffersByStatus = (status) => {

        alert("Status:::" + status);


    }

    const acceptHandleChange = (d) => {

        alert("d.id" + d.id);


        const data = {
            offerId: d.id
        }

        let result = window.confirm('Are you sure you want to Approve?');
        if (result) {
            OwnerService.acceptOffer(d.id, data).then(response => {
                console.log(response);
            }).catch(error => console.log(error.message));
        }
    };

    const declineHandleChange = (d) => {

        setOwnerId(d.property.ownerId);

        const data = {
            offerId: d.id
        }
        let result = window.confirm('Are you sure you want to Approve?');

        if (result) {

            OwnerService.cancelOffer(d.id, data)
                .then(res => {
                    console.log(res);
                }).catch(error => console.log(error.message));

        }
    }

    const getAction=()=>{

        alert("Send Message::");
    };


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
                        <Dropdown onSelect={(eventKey) => { statusHandleChange(eventKey) }}>
                            <Dropdown.Toggle id="dropdown-basic">
                                {selectedStatus ? selectedStatus : "Select by Status"}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>

                                <Dropdown.Item key="created" eventKey="created">created</Dropdown.Item>
                                <Dropdown.Item key="pending" eventKey="pending">pending</Dropdown.Item>
                                <Dropdown.Item key="contingent" eventKey="Contingent">Contingent</Dropdown.Item>
                                <Dropdown.Item key="OwnerAccepted" eventKey="OwnerAccepted">Owner Accepted</Dropdown.Item>
                                <Dropdown.Item key="CustomerAccepted" eventKey="CustomerAccepted">Customer Accepted</Dropdown.Item>
                                <Dropdown.Item key="cancelled" eventKey="cancelled">cancelled</Dropdown.Item>
                                <Dropdown.Item key="rejected" eventKey="rejected">rejected</Dropdown.Item>

                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                        <tr>
                            <th scope="col"
                                className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">CUSTOMER
                            </th>
                            <th scope="col"
                                className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">OFFER
                                PRICE
                            </th>
                            <th scope="col"
                                className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">STATUS
                            </th>
                            <th scope="col"
                                className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">ACTION
                            </th>
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
                                    <Button variant="outline-success" style={{ marginRight: 10 }} onClick={() => acceptHandleChange(d)}>Accept</Button>{' '}
                                    <Button variant="outline-danger" onClick={() => declineHandleChange(d)}>Decline</Button>{' '}
                                    <button type='button' class="btn-message btn btn-outline-warning" btn-sm style={{ marginLeft: 10 }} onClick={getAction}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-arrow-up" viewBox="0 0 16 16">
                                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4.5a.5.5 0 0 1-1 0V5.383l-7 4.2-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h5.5a.5.5 0 0 1 0 1H2a2 2 0 0 1-2-1.99zm1 7.105 4.708-2.897L1 5.383zM1 4v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1" />
                                            <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.354-5.354 1.25 1.25a.5.5 0 0 1-.708.708L13 12.207V14a.5.5 0 0 1-1 0v-1.717l-.28.305a.5.5 0 0 1-.737-.676l1.149-1.25a.5.5 0 0 1 .722-.016" />
                                        </svg>
                                    </button>
                                </td>


                            </tr>
                        }):""}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default OfferTable;
