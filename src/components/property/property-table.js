import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const PropertyTable = ({ data }) => {
  const [properties, setProperties] = useState([]);
  useEffect(() => {
    //load data from server
    setProperties([
      { id: 1, name: 'Property 1' },
      { id: 2, name: 'Property 2' },
    ]);
  });

  return (
    <>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {data
            ? data.map((d, index) => {
                return (
                  <tr key={d.id}>
                    <td>{index}</td>
                    <td>{d.name}</td>
                  </tr>
                );
              })
            : 'No recent property added'}
        </tbody>
      </Table>
    </>
  );
};
export default PropertyTable;
