import React, { useState } from 'react';
import { Container, Form, Button, Card, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import backgroundImage from '../../assets/checkout4.jpg';

const Checkout = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    paymentMethod: 'creditCard',
    departureDate: '',
    returnDate: '',
    pickupAddress: '',
    streetAddress: '',
    streetAddress2: '',
    city: '',
    state: '',
    postalCode: '',
    dropAddress: '',
    dropStreetAddress: '',
    dropStreetAddress2: '',
    dropCity: '',
    dropState: '',
    dropPostalCode: '',
    tourDescription: '',
    vehicleType: '',
    includeChauffeur: false,
    numberOfPassengers: '',
    additionalMessage: '',
    couponCode: '',
  });

  const cartItems = useSelector((state) => state.cart.items);
  const [isLoading, setIsLoading] = useState(false);

  const selectedTour = cartItems.find(item => item.id === parseInt(id));


  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleCheckout = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const calculateTotal = () => {
    return selectedTour ? (selectedTour.quantity * parseFloat(selectedTour.price.slice(1))).toFixed(2) : '0.00';
  };


  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    padding: '40px',
    borderRadius: '8px',
    boxShadow: '0 0 15px rgba(0, 0, 0, 0.2)',
    opacity: '0.9',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    width: '100%',
    minHeight: '100vh',
  };

  return (
    <Container className='checkout-container' style={{ minWidth: '100vw' }}>
      <div style={{ width: '100%', background: `url(${backgroundImage}) center center/cover no-repeat fixed`, marginBottom: '60px', marginTop: '70px' }}>
        <Container fluid className="my-4" style={{ maxWidth: '100%', padding: '0 15px' }}>
          <Row className="mb-4">
            <Col xs={12} md={8}>
              <div style={containerStyle}>
                <h1 style={{ fontFamily: 'serif' }}>Booking Details:</h1>
                <Form>
                  <Row>
                    <Col md={6}>
                      <Form.Group controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter your name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="formPhone">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter your phone number"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <Form.Group controlId="formDepartureDate">
                        <Form.Label>Departure Date/Time</Form.Label>
                        <Form.Control
                          type="datetime-local"
                          name="departureDate"
                          value={formData.departureDate}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="formReturnDate">
                        <Form.Label>Return Date/Time</Form.Label>
                        <Form.Control
                          type="datetime-local"
                          name="returnDate"
                          value={formData.returnDate}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <Form.Group controlId="formPickupAddress">
                        <Form.Label>Pickup Address (Airport or Hotel)</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter pickup address"
                          name="pickupAddress"
                          value={formData.pickupAddress}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="formDropAddress">
                        <Form.Label>Drop Address (Airport or Hotel)</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter drop address"
                          name="dropAddress"
                          value={formData.dropAddress}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <Form.Group controlId="formStreetAddress">
                        <Form.Label>Street Address</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Street Address"
                          name="streetAddress"
                          value={formData.streetAddress}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="formStreetAddress2">
                        <Form.Label>Street Address Line 2</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Street Address Line 2"
                          name="streetAddress2"
                          value={formData.streetAddress2}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <Form.Group controlId="formCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="City"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="formState">
                        <Form.Label>State / Province</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="State / Province"
                          name="state"
                          value={formData.state}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <Form.Group controlId="formPostalCode">
                        <Form.Label>Postal / Zip Code</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Postal / Zip Code"
                          name="postalCode"
                          value={formData.postalCode}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="formDropCity">
                        <Form.Label>Drop City</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Drop City"
                          name="dropCity"
                          value={formData.dropCity}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <Form.Group controlId="formDropState">
                        <Form.Label>Drop State / Province</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Drop State / Province"
                          name="dropState"
                          value={formData.dropState}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="formDropPostalCode">
                        <Form.Label>Drop Postal / Zip Code</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Drop Postal / Zip Code"
                          name="dropPostalCode"
                          value={formData.dropPostalCode}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12}>
                      <Form.Group controlId="formTourDescription">
                        <Form.Label>Create Your Own Customized Tour</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          placeholder="Describe your tour..."
                          name="tourDescription"
                          value={formData.tourDescription}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <Form.Group controlId="formVehicleType">
                        <Form.Label>Vehicle Type</Form.Label>
                        <Form.Control
                          as="select"
                          name="vehicleType"
                          value={formData.vehicleType}
                          onChange={handleInputChange}
                        >
                          <option value="">Please Select</option>
                          <option value="sedan">Sedan</option>
                          <option value="suv">SUV</option>
                          <option value="van">Van</option>
                        </Form.Control>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="formIncludeChauffeur">
                        <Form.Check
                          type="checkbox"
                          label="Include English/French speaking Chauffeur"
                          name="includeChauffeur"
                          checked={formData.includeChauffeur}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <Form.Group controlId="formNumberOfPassengers">
                        <Form.Label>Number of Passengers</Form.Label>
                        <Form.Control
                          type="number"
                          placeholder="Number of Passengers"
                          name="numberOfPassengers"
                          value={formData.numberOfPassengers}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="formAdditionalMessage">
                        <Form.Label>Additional Message</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          placeholder="Additional Message"
                          name="additionalMessage"
                          value={formData.additionalMessage}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <Form.Group controlId="formCouponCode">
                        <Form.Label>Coupon Code</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Coupon Code"
                          name="couponCode"
                          value={formData.couponCode}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Button variant="danger" onClick={handleCheckout} disabled={isLoading}>
                    {isLoading ? 'Processing...' : 'Place Order'}
                  </Button>
                </Form>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <Card className="mt-3" style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', margin: '0 auto', maxWidth: '100%' }}>
                <Card.Body>
                  <h4>Order Summary:</h4>
                  <br />
                  <div>
                    {selectedTour ? (
                      <div key={selectedTour.id} style={{ marginBottom: '10px' }}>
                        <img
                          src={selectedTour.images[0]}
                          alt={selectedTour.name}
                          style={{ width: '250px', height: '200px', objectFit: 'cover', marginLeft: '30px', marginBottom: '20px' }}
                        />
                        <br />
                        <p style={{ fontSize: '20px', marginBottom: '40px' }}>
                          {selectedTour.name} - {selectedTour.quantity} x {selectedTour.price} = ${(selectedTour.quantity * parseFloat(selectedTour.price.slice(1))).toFixed(2)}
                        </p>
                      </div>
                    ) : (
                      <p>No tour selected.</p>
                    )}
                  </div>
                  <h5>Total Amount: ${calculateTotal()}</h5>
                  <br />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </Container>
  );
};

export default Checkout;

