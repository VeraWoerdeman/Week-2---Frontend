import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

export default function CardExample() {
  return (
    <>
      <Col md={3}>
        <Card>
        <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2018/06/21/13/57/clouds-3488632__340.jpg" />
          <Card.Body>
            <Card.Title>React bootstrap 5 card with image</Card.Title>
            <Card.Text>
              React bootstrap 5 description card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button variant="primary"> Read More</Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}