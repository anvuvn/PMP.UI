import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {UserService} from "../../service/userservice";
import axios from "axios";

function OfferForm() {
    const [amount, setAmount] = useState('');
    const [message, setMessage] = useState('');
    const { propertyId } = useParams(); // Extract propertyId from the path
    const userId = UserService.getUser().userId;
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            amount: parseFloat(amount), // Ensure amount is converted to a number
            message,
            userId,
            propertyId
        };

        console.log(formData)

        try {
            const response = await fetch(`http://localhost:8080/properties/${propertyId}/offers`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Failed to submit offer');
            }


            console.log('Offer submitted successfully');
            navigate("/customer/offers-history");
        } catch (error) {
            console.error('Error submitting offer:', error.message);
        }
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="amount" className="form-label">Amount</label>
                            <input
                                type="number"
                                className="form-control"
                                id="amount"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea
                                className="form-control"
                                id="message"
                                rows={5}
                                placeholder="Say a few words about who you are or what you're working on."
                                spellCheck="false"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit Offer</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default OfferForm;
