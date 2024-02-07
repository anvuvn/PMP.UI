import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './customer.css'; // Import custom CSS file for styling

function PropertyList() {
    const [properties, setProperties] = useState([]);
    const navigate = useNavigate(); // Get navigate function for navigation

    useEffect(() => {
        fetch('http://localhost:8080/properties')
            .then(response => response.json())
            .then(data => setProperties(data))
            .catch(error => console.error('Error fetching properties:', error));
    }, []);

    const handleMakeOffer = (propertyId) => {
        navigate(`/properties/${propertyId}/offer`);
    };

    return (
        <Container fluid>
            <Row className="justify-content-center">
                {properties.map(property => (
                    <Col key={property.id} xs={12} sm={6} md={4} lg={3} className="mb-4 mt-6">
                        <div className="card" data-animation="true">
                            <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                                <a href="#" className="d-block blur-shadow-image">
                                    {property.images && property.images.length > 0 ? (
                                        <Carousel interval={null} prevLabel="" nextLabel="">
                                            {property.images.map((image, index) => (
                                                <Carousel.Item key={index}>
                                                    <img src={image} className="img-fluid shadow border-radius-lg"  alt={`Property ${property.id} image ${index}`} />
                                                </Carousel.Item>
                                            ))}
                                        </Carousel>
                                    ) : (
                                        <img className="img-fluid shadow border-radius-lg" alt={"property"} variant="top" src="https://placehold.co/600x400" />
                                    )}
                                </a>
                            </div>
                            <div className="card-body text-center">
                                <div className="d-flex mt-n6 mx-auto">
                                    <button onClick={() => handleMakeOffer(property.id)} className="btn btn-link text-primary mx-auto border-0" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Make an offer">
                                        <span className="btn-inner--text">Make an offer</span>
                                    </button>
                                </div>
                                <h5 className="font-weight-normal mt-3">
                                    {property.propertyType}
                                </h5>
                                <p className="mb-0">
                                    {property.address.line1}, {property.address.city}, {property.address.state}
                                </p>
                            </div>
                            <hr className="dark horizontal my-0" />
                            <div className="card-footer d-flex">
                                <p className="font-weight-normal my-auto">${property.price}</p>
                                <i className="material-icons position-relative ms-auto text-lg me-1 my-auto">place</i>
                                <p className="text-sm my-auto">{property.address.city}, {property.address.state}</p>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default PropertyList;


