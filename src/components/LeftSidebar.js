import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import ControlPointIcon from "@material-ui/icons/ControlPoint";
import "bootstrap/dist/css/bootstrap.css";
import "../css/LeftSidebar.css";
import Chat from "../components/Chat";
import "../css/chat.css";

const LoginForm = ({ onSubmit, currData, setCurrData, error }) => {
	const handleChange = (e) => {
		const { name, value } = e.target;
		setCurrData({ ...currData, [name]: value });
	};

	return (
		<Form onSubmit={onSubmit}>
			<Form.Group controlId="formBasicname">
				<Form.Label>Enter Name:</Form.Label>
				<Form.Control
					type="name"
					placeholder="Enter name"
					name="name"
					value={currData.name}
					onChange={handleChange}
				/>
				{error.name !== "" && (
					<Form.Text className="text-muted">{error.name}</Form.Text>
				)}
			</Form.Group>
			<br />
			<Form.Group controlId="formBasicmessage">
				<Form.Label>Enter Message:</Form.Label>
				<Form.Control
					type="message"
					placeholder="Enter Message"
					name="message"
					value={currData.message}
					onChange={handleChange}
				/>
				{error.message !== "" && (
					<Form.Text className="text-muted">{error.message}</Form.Text>
				)}
			</Form.Group>
			<br />
			<Button className="add_user" variant="primary mt-4" type="submit" block>
				Add Details
			</Button>
		</Form>
	);
};

export default function ModelSubmitForm() {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const initialData = {
		name: "",
		message: "",
	};

	//getUserData .....................................................
	const getData = () => {
		const list = localStorage.getItem("ModelSubmitFormData");
		if (list) {
			return JSON.parse(list);
		} else {
			return [];
		}
	};

	const [currData, setCurrData] = useState(initialData);
	const [error, setError] = useState({});
	const [allData, setAllData] = useState(getData());
	console.log("allData", allData);

	//set data
	useEffect(() => {
		localStorage.setItem("ModelSubmitFormData", JSON.stringify(allData));
	}, [allData]);

	const validate = ({ name, message }) => {
		const temp = {};
		temp.name = name.trim() === "" ? "name is required*" : "";
		temp.message = message.trim() === "" ? "message is required*" : "";
		setError(temp);
		return Object.values(temp).every((value) => value === "");
	};

	const onLoginFormSubmit = (e) => {
		e.preventDefault();
		if (validate(currData)) {
			// console.log("currData", currData);
			setAllData([...allData, currData]);
			setCurrData(initialData);
			handleClose();
			<Chat currData={currData} />;
		}
		setAllData([...allData, currData]);
		console.log(currData);
	};

	return (
		<>
			<div className="leftUseList">
				<div className="leftUseList_sidebar" style={{ height: "100vh" }}>
					<div className="leftUseList_sidebar__add_button">
						<h6>Start a Conversation Click 👉</h6>
						<ControlPointIcon
							className="add_buttton"
							onClick={handleShow}
							variant="success"
						/>
					</div>

					{allData.map((currElem, ind) => {
						// return <h1>{`${currElem.name}` + " " + `${currElem.message}`}</h1>;
						return (
							<div className="leftUseList__users" key={ind}>
								<img
									src="https://www.seekpng.com/png/full/23-236651_doctors-and-nurses-transparent-png-sticker-transparent-background.png"
									width="60px"
									alt=""
								/>
								<div
									className="leftUseList__usersname"
									style={{ display: "flex;flex-direction:column" }}
								>
									<h5>{currElem.name}</h5>
									<p>{currElem.message}</p>
								</div>
							</div>
						);
					})}
				</div>

				<Modal show={show} onHide={handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Add User Details 🤵</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<LoginForm
							onSubmit={onLoginFormSubmit}
							currData={currData}
							setCurrData={setCurrData}
							error={error}
						/>
					</Modal.Body>
				</Modal>
				<Chat />
			</div>
		</>
	);
}
