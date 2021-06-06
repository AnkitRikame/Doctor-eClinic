import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

const LoginForm = ({ onSubmit, currData, setCurrData, error }) => {
	//   console.log(error);
	const handleChange = (e) => {
		const { name, value } = e.target;
		setCurrData({ ...currData, [name]: value });
	};

	return (
		<Form onSubmit={onSubmit}>
			<Form.Group controlId="formBasicEmail">
				<Form.Label>Email address</Form.Label>
				<Form.Control
					type="email"
					placeholder="Enter email"
					name="email"
					value={currData.email}
					onChange={handleChange}
				/>
				{error.email !== "" && (
					<Form.Text className="text-muted">{error.email}</Form.Text>
				)}
			</Form.Group>

			<Form.Group controlId="formBasicPassword">
				<Form.Label>Password</Form.Label>
				<Form.Control
					type="password"
					placeholder="Password"
					name="password"
					value={currData.password}
					onChange={handleChange}
				/>
				{error.password !== "" && (
					<Form.Text className="text-muted">{error.password}</Form.Text>
				)}
			</Form.Group>
			<Form.Group controlId="formBasicCheckbox">
				<Form.Check type="checkbox" label="Remember Me!" />
			</Form.Group>
			<Button variant="primary" type="submit" block>
				Login
			</Button>
		</Form>
	);
};

export default function ModelSubmitForm() {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const initialData = {
		email: "",
		password: "",
	};

	const [currData, setCurrData] = useState(initialData);
	const [error, setError] = useState({});
	const [allData, setAllData] = useState([]);

	console.log("allData", allData);
	console.log("error", error);
	console.log("currData", currData);
	const validate = ({ email, password }) => {
		const temp = {};

		temp.email =
			email.trim() === ""
				? "Email is required"
				: /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/.test(
						email
				  )
				? ""
				: "Invalid email address";

		temp.password = password.trim() === "" ? "Password is required" : "";

		setError(temp);

		return Object.values(temp).every((value) => value === "");
	};

	const onLoginFormSubmit = (e) => {
		e.preventDefault();
		if (validate(currData)) {
			console.log("currData", currData);
			setAllData([...allData, currData]);
			setCurrData(initialData);
			handleClose();
		}
	};

	return (
		<>
			<div
				className="d-flex align-items-center justify-content-center"
				style={{ height: "100vh" }}
			>
				<Button variant="primary" onClick={handleShow}>
					Launch Form modal
				</Button>
			</div>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Login Form</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<LoginForm
						onSubmit={onLoginFormSubmit}
						currData={currData}
						setCurrData={setCurrData}
						error={error}
					/>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close Modal
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}
