import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import GoogleMapReact from 'google-map-react';

  // Importing Maps from googleMaps
  const AnyReactComponent = ({ text }) => <div>{text}</div>;

  const defaultProps = {
    center: {
      lat:-41.3105,
      lng:174.7798
    },
     
    zoom: 12
  };



const FindusPage = () => {
  return (
    <div className='home'>


      <div className="container">
        <Form action='/contacto' method='post'>
          <Form.Group controlId="formNombre">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your full name" name='nombre' required />
          </Form.Group>

          <Form.Group controlId="formTelefono">
            <Form.Label>Telephone number</Form.Label>
            <Form.Control type="text" placeholder="Enter your telephone number" name='telefono' required />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter your email address" name='email' required />
          </Form.Group>

          <Form.Group controlId="formMensaje">
            <Form.Label>Contact Us</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Enter your message" name='mensaje' required />
          </Form.Group>

          <div className='botonEnviar'>
            <br/>
            <Button variant='btn btn-primary' type='submit'>
              Submit
            </Button>
          </div> 
        </Form>
      </div>
      <div  style={{ height: '50vh', width: '50%' , margin: 'auto', boxShadow:'1px'}}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDLysbOFn5y3XvmF4KAfeqOv6DdVDtp_ZE " }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={-41.3105}
          lng={174.7798}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>


      
    </div>
  );
}

export default FindusPage;
