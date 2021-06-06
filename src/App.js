import React from "react";
import LeftSidebar from "./components/LeftSidebar";
import Navbar from "./components/Navbar";
// import Chat from "./components/Chat";
// import Todo from "./components/Todo";

import "./css/chat.css";
import "./index.css";
import "./App.css";

const App = () => {
	return (
		<div className="app">
			<div className="app__body">
				{/* <Todo /> */}
				<Navbar />
				<LeftSidebar />
				{/* <Chat /> */}
			</div>
		</div>
	);
};

export default App;
