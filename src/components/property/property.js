import React from 'react';
import {Link} from "react-router-dom";

const PropertyItem = ({ property, handleMakeOffer }) => {
    const extract_image = () => {
        return 'data:image/png;base64,' + property.thumbs;
    };

    return (
        <div className="card">
            <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                <Link to={`/properties/${property.id}`} className="d-block blur-shadow-image">
                    <img className="img-fluid shadow border-radius-lg border-2" alt="property" variant="top" src={extract_image()} />
                </Link>
            </div>
            <div className="card-body">
                <div className={"d-flex mt-2 justify-content-between"}>
                    <p className="font-weight-bold mx-auto">${property.price}</p>
                </div>
                <div className="mt-2 text-center flex items-center justify-content-between">
                    <p className={"flex items-center"}>
                        <i className={"material-icons"}>bed</i> {property.numberOfRoom} bds
                    </p>
                    <p>
                        {property.propertyType}
                    </p>
                </div>
                <h5 className="font-weight-normal mt-3">
                    <i className="material-icons text-lg">place</i>
                    {property.address.city}, {property.address.state}
                </h5>
            </div>
            <hr className="dark horizontal my-0"/>
            <div className="card-footer d-flex items-center justify-content-between">
                <Link
                    to={`/properties/${property.id}`}
                    className="bg-indigo-600 text-white font-montserrat py-1 px-3 font-medium rounded-full hover:bg-indigo-500 transition-all duration-300"
                    type="button" data-bs-toggle="tooltip" data-bs-placement="bottom">
                    <span className={"text-sm"}>See details</span>
                </Link>
                <Link
                    to={`/properties/${property.id}`}
                    className="bg-green-600 text-white font-montserrat py-1 px-3 font-medium rounded-full hover:bg-green-500 transition-all duration-300">
                    <span className={"material-icons"}>
                        3d_rotation
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default PropertyItem;
