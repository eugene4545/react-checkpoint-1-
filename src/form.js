import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Alert } from 'react-bootstrap';

function Bform() {
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Check if any of the form fields are empty (you can add more validation here)
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    if (!email || !password) {
      // If any field is empty, show the alert
      setShowAlert(true);
    } else {
      // If all fields are filled, hide the alert (if it was previously shown)
      setShowAlert(false);

      // Perform your form submission logic here
      // For example, you can send the data to an API or perform any other actions.
    }
  };

  return (
    <Form style={{ width: '25em', margin: '70px' }} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>

      {showAlert && (
        <Alert variant="danger" className="mt-3">
          You must complete the form to submit.
        </Alert>
      )}
    </Form>
  );
}

export default Bform;
