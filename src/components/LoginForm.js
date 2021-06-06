import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const LoginForm = ({ onSubmit }) => {
	// 1. UseState for the Username and Passoword ...........................................
	const [name, setName] = useState("");
	const [message, setMessage] = useState("");

	// const [allEnt, setAllEnt] = useState([]);

	// 2. Bootstrap Modal starts Here ........................................................

	return (
		<>
			<Form onSubmit={onSubmit}>
				<Form.Group controlId="formBasicname">
					<Form.Label>Enter Username:</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter Username"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</Form.Group>

				<Form.Group controlId="formBasicmessage">
					<Form.Label>Message:</Form.Label>
					<Form.Control
						type="message"
						placeholder="Enter Message"
						value={message}
						onChange={(e) => setMessage(e.target.value)}
					/>
				</Form.Group>

				<Button className="add_user" variant="primary mt-4" type="submit" block>
					Add User
				</Button>
			</Form>
			{/* {allEnt.map((currElem) => {
				
				return <h1>{`${currElem.name}` + " " + `${currElem.message}`}</h1>;
			})} */}
		</>
	);
};
// Bootstrap Modal Ends Here ........................................................

export default LoginForm;
