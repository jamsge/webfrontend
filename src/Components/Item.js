import React from "react";
import { Button, Card } from "react-bootstrap";
import { useState, useEffect } from 'react';


const Item = ({name = "Steve Jobs",
                email = "steve@apple.com",
                tagline = "Stay hungry, stay foolish",}) => {

    const [itemCart, setItemCart] = useState([])
    let localCart = localStorage.getItem('itemCart');

    useEffect(() => {
        localCart = JSON.parse(localStorage.getItem('itemCart'))

        if(localCart) setItemCart(localCart)
    }, [itemCart]);

    const handleAddToCart = (item) => {
        let cartCopy = [...itemCart];

        cartCopy.push(item)

        setItemCart(cartCopy)

        localStorage.setItem('itemCart', JSON.stringify(cartCopy));
        console.log(itemCart)
    }


    return (
        <>
        <Card style={{ width: '20rem' }}>
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
            <Button variant="primary" onClick={(e) => handleAddToCart(e)}>Add to Cart</Button>
        </Card.Body>
        </Card>
        </>
    )
}

export default Item