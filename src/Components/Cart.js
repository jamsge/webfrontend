import React from "react";
import { useState, useEffect } from 'react';
import { Button, Card } from "react-bootstrap";

const Cart = ({name = "Steve Jobs",
email = "steve@apple.com",
tagline = "Stay hungry, stay foolish", count = 0}) => {

    return (
        <>
        <Card>
        <Card.Body>
            <Card.Title>
                {name}
            </Card.Title>
            <Card.Text>
                {email}
            </Card.Text>
            <Card.Text>
                {tagline}
            </Card.Text>
            <Button variant="primary">Add to Cart</Button>
        </Card.Body>
        </Card>
        </>
    )
}

export default Cart