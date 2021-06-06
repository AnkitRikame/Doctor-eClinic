import React, { useState, useEffect } from "react";
import "../css/LeftSidebar.css";
import "../css/chat.css";
import SendIcon from "@material-ui/icons/Send";

const Chat = ({ currData }) => {
	//getUserData .....................................................
	const getData = () => {
		const userChats = localStorage.getItem("UserChatsHistory");
		if (userChats) {
			return JSON.parse(userChats);
		} else {
			return [];
		}
	};

	const [input, setInput] = useState("");
	const [image, setImage] = useState("");
	const [allEnt, setAllEnt] = useState(getData());

	//set data
	useEffect(() => {
		localStorage.setItem("UserChatsHistory", JSON.stringify(allEnt));
	}, [allEnt]);

	const sendMessage = (e) => {
		e.preventDefault();
		console.log(input);
		// setInput(e.target.value);
		const newData = {
			input: input,
			image: image,
		};
		setInput("");
		setAllEnt([...allEnt, newData]);
		console.log(allEnt);
	};

	var today = new Date().toLocaleString();
	// var time = today.getHours() + ":" + today.getMinutes();

	return (
		<>
			<div className="chatcontainer">
				<div className="chatcontainer__div">
					<div className="chatcontainer__userdata">
						<h6>Doctor,{currData}</h6>
						{/* <p>Message .....</p> */}
					</div>

					<div className="chatcontainer__userbody">
						{allEnt.map((currElem, ind) => {
							return (
								<>
									<p className="mt-4">{currElem.input}</p>
									<p>{today}</p>
									<p>{currElem.image}</p>
								</>
							);
						})}
					</div>

					<form>
						<div className="chatcontainer__usermessage">
							<input
								value={input}
								type="text"
								name="name"
								onChange={(e) => setInput(e.target.value)}
								placeholder="Type a mesage"
								className="message_field"
							/>
							<input
								value={image}
								type="file"
								onChange={(e) => setImage(e.target.value)}
								className="sendFile"
								name="file"
							/>
							<button onClick={sendMessage}>
								<SendIcon className="sendIcon" />
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default Chat;
