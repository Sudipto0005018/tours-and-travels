import { useSelector, useDispatch } from 'react-redux';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import { increaseQuantity, decreaseQuantity, removeFromCart, clearCart } from '../../reduxStore/cartSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { GoChevronLeft } from "react-icons/go";
import emptyCartImage from '../../assets/empty-cart.png';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleIncreaseQuantity = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecreaseQuantity = (id) => {
    const item = cartItems.find((item) => item.id === id);
    if (item.quantity === 1) {
      dispatch(removeFromCart(id));
    } else {
      dispatch(decreaseQuantity(id));
    }
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleCheckout = (id) => {
    navigate(`/checkout/${id}`);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.quantity * parseFloat(item.price.slice(1)), 0).toFixed(2);
  };

  return (
    <Container fluid className={cartItems.length > 0 ? 'cart-container has-items' : 'cart-container'}>
      {cartItems.length === 0 ? (
        <div className="empty-cart-message">
          <h1 style={{ fontFamily: 'serif', marginBottom: "10px"}}>Your Cart :</h1>
          <img src={emptyCartImage} alt="Empty Cart" style={{ maxWidth: '400px', margin: '20px 0' }} />
          <p style={{ fontSize: '22px' }}>Your cart is <strong style={{ color: 'red' }}>Empty!</strong></p>
          <button className="back-to-tours-button" onClick={() => navigate("/tours")}><GoChevronLeft />Back to Tours</button>
        </div>
      ) : (
        <Row>
          <Col xs={12} lg={7}>
            <h1 style={{ fontFamily: 'serif', textAlign: 'center' }}>Your Cart :</h1>
            {cartItems.map((item) => (
              <Card key={item.id} className="cart-item mb-3 p-3 w-100 d-flex flex-wrap">
                <Card.Body>
                  <Row className="align-items-center">
                    <Col xs={12} sm={2} className="item-image">
                      <Card.Img variant="top" src={item.images[0]} className="w-100" style={{ maxWidth: '100px', maxHeight: '60px', objectFit: 'cover' }} />
                    </Col>
                    <Col xs={12} sm={2} className="item-name">
                      <Card.Text><strong>Name</strong></Card.Text>
                      <Card.Text>{item.name}</Card.Text>
                    </Col>
                    <Col xs={12} sm={3} className="item-quantity">
                      <Card.Text><strong>Person</strong></Card.Text>
                      <Row className="align-items-center justify-content-center quantity-btn">
                        <Col xs={12} className="d-flex justify-content-center">
                          <button className="btn custom-btn px-2 minus" onClick={() => handleDecreaseQuantity(item.id)}>
                            -
                          </button>
                          <input type="number" min="1" value={item.quantity} readOnly className="form-control form-control-sm mx-2" style={{ width: '50px', textAlign: 'center' }} />
                          <button className="btn custom-btn px-2 plus" onClick={() => handleIncreaseQuantity(item.id)}>
                            +
                          </button>
                        </Col>
                      </Row>
                    </Col>
                    <Col xs={12} sm={2} className="item-price">
                      <Card.Text><strong>Price</strong></Card.Text>
                      <Card.Text>{item.price}</Card.Text>
                    </Col>
                    <Col xs={12} sm={3} className="item-total d-flex justify-content-between align-items-center">
                      <div>
                        <Card.Text><strong>Total</strong></Card.Text>
                        <Card.Text>${(item.quantity * parseFloat(item.price.slice(1))).toFixed(2)}</Card.Text>
                      </div>
                      <Button variant="" onClick={() => handleRemoveFromCart(item.id)} className="p-0">
                        <FontAwesomeIcon icon={faTrash} />
                      </Button>
                      <br />
                      <br />
                      <Button className="buy-now" onClick={() => handleCheckout(item.id)}>
                        Buy
                      </Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            ))}
          </Col>
          <Col xs={12} lg={1} className="vertical-line"></Col>
          <Col xs={12} lg={4}>
            <Card className="cart-summary text-center mt-4 mb-3 p-3">
              <h4 style={{ fontFamily: 'serif' }}>Cart Summary</h4>
              <p>Total Items: {cartItems.length}</p>
              <p>Total Amount: ${calculateTotal()}</p>
              <div className="d-flex justify-content-center">
                <Button className="checkout btn-sm mx-2" onClick={() => {
                  navigate("/tours")
                }}>
                  Continue
                </Button>
                <Button className="empty-cart btn-sm mx-2" onClick={handleClearCart}>
                  Empty Cart <FontAwesomeIcon icon={faTrash} />
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Cart;