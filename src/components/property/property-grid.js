import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import PropertyCard from './property-card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import ImageService from '../../service/image-service';

const PropertyGrid = () => {
  const [properties, setProperties] = useState([]);

  let propertyData = [];
  let imgs = [];

  useEffect(() => {
    //load data from server

    ImageService.getAllImages()
      .then((response) => {
        imgs = response;

        propertyData = [];

        imgs.forEach((img) => {
          propertyData.push({
            id: img.id,
            name: img.id,
            image: img.image,
            address: {
              street: '1000N 4th St',
              city: 'Fairfield',
              state: 'IA',
              zip: '52557',
            },
          });
        });

        console.log(propertyData);

        setProperties(propertyData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Row xs={2} md={4} className="g-4">
        {properties
          ? properties.map((property) => {
              return (
                <PropertyCard
                  className="col-4"
                  key={property.id}
                  property={property}
                />
              );
            })
          : 'No recent property added'}
      </Row>
    </>
  );
};
export default PropertyGrid;

// <Row xs={2} md={4} className="g-4">
// <Col xs={4}>
// </Col>
//</Row>
