import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import OwnerService from "../../service/owner-service";
import {Link} from "react-router-dom";

const OfferTable = ({ data, action }) => {
    const [status, setStatus] = useState("");

    const statusHandleChange = (event) => {
        setStatus(event);
    }

    const acceptHandleChange = (id) => {
        const data = {
            offerId: id
        };
        let result = window.confirm('Are you sure you want to Approve?');
        if (result) {
            OwnerService.acceptOffer(id, data)
                .then(response => {
                    console.log(response);
                })
                .catch(error => console.log(error.message));
        }
    };

    const declineHandleChange = (id) => {
        const data = {
            offerId: id
        };
        let result = window.confirm('Are you sure you want to Decline?');
        if (result) {
            OwnerService.cancelOffer(id, data)
                .then(res => {
                    console.log(res);
                })
                .catch(error => console.log(error.message));
        }
    };

    return (
        <div className="w-full">
            <div className="mt-5 mb-4 flex justify-content-between items-center px-4">
                <div className="text-1xl font-bolder leading-tight text-indigo-700 px-2">
                    Owner
                    <span className={"text-gray-500 mx-4"}> / </span>
                    Offers by customers
                </div>
                <Dropdown onSelect={statusHandleChange}>
                    <Dropdown.Toggle id="dropdown-basic"
                                     className={"bg-indigo-600 text-white font-montserrat py-2 px-5 font-medium rounded-full hover:bg-indigo-500 transition-all duration-300"}>
                        Select by Status
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item eventKey="Available">Available</Dropdown.Item>
                        <Dropdown.Item eventKey="Pending">Pending</Dropdown.Item>
                        <Dropdown.Item eventKey="Contingent">Contingent</Dropdown.Item>
                        <Dropdown.Item eventKey="Complete">Complete</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
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
                        <tbody className="bg-white divide-y divide-gray-200">
                        {data ? (
                            data.map((d, index) => (
                                <tr key={d.id} className="hover:bg-gray-100">
                                    <td className="px-6 py-4 whitespace-nowrap">{d.customer.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{d.amount}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{d.status}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-center">
                                        <Button variant="outline-success" className="mr-2"
                                                onClick={() => acceptHandleChange(d.id)}>Accept</Button>
                                        <Button variant="outline-danger" className="mr-2"
                                                onClick={() => declineHandleChange(d.id)}>Decline</Button>
                                        <button type="button" className="btn btn-outline-warning"
                                                style={{marginLeft: 10}}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 fill="currentColor" className="bi bi-envelope-arrow-up"
                                                 viewBox="0 0 16 16">
                                                <path
                                                    d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4.5a.5.5 0 0 1-1 0V5.383l-7 4.2-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h5.5a.5.5 0 0 1 0 1H2a2 2 0 0 1-2-1.99zm1 7.105 4.708-2.897L1 5.383zM1 4v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1"/>
                                                <path
                                                    d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.354-5.354 1.25 1.25a.5.5 0 0 1-.708.708L13 12.207V14a.5.5 0 0 1-1 0v-1.717l-.28.305a.5.5 0 0 1-.737-.676l1.149-1.25a.5.5 0 0 1 .722-.016"/>
                                            </svg>
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={4} className="px-6 py-4 whitespace-nowrap text-center">No Offer List</td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default OfferTable;
