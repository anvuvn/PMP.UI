import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import React from 'react';

const PropertyCard = (props) => {
  const extract_image = () => {
    let property = props.property;
    return 'data:image/png;base64,' + property.image;
  };
  const extract_subtitle = () => {
    let address = props.property.address;
    return (
      address.street +
      ', ' +
      address.city +
      ', ' +
      address.state +
      ' ' +
      address.zip
    );
  };

  //   return (
  //     <img className="card-img-top" src={extract_image()} alt="Card image cap" />

  //   );

  return (
    <Card>
      <Card.Img variant="top" src={extract_image()} />
      <Card.Body>
        <Card.Title>{extract_subtitle()}</Card.Title>
        {/* <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text> */}
      </Card.Body>
    </Card>
  );
};

export default PropertyCard;
