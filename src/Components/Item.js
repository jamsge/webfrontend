import React from "react";
import { Button, Card } from "react-bootstrap";


const Item = (props) => {

	const handleAddToCart = (item) => {
	    let itemData = {
	        id:props.id, 
					name:props.name, 
					description:props.description, 
					price:props.price
	    }

	    localStorage.setItem(props.id, JSON.stringify(itemData));
	}


	return (
		<Card style={{ width: '20rem' }}>
			<Card.Body>
				<Card.Title>
					{props.name}
				</Card.Title>
				<Card.Text>
					{props.description}
				</Card.Text>
				<Card.Text>
					{props.price}
				</Card.Text>
				<Button variant="primary" onClick={handleAddToCart}>Add to Cart</Button>
			</Card.Body>
		</Card>
	)
}

export default Item