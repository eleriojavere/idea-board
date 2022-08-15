import React, { useState } from "react";
import "./scss/entry.scss";
import Tile from "./components/Tile";
import IconButton from "./components/buttons/IconButton";
import PlusIcon from "../src/icons/plus.svg";
import Modal from "./components/Modal";

function App() {
	const data = {
		id: 1,
		title: "Title",
		description: "Description",
		created_at: new Date(),
		updated_at: new Date(),
	};

	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<>
			<div className="header">
				<h1>Idea board</h1>
				<IconButton onClick={() => setIsModalOpen(true)} iconSrc={PlusIcon} />
			</div>
			<div className="board">
				<div className="column">
					<h2>Work</h2>
					<Tile data={data} />
					<Tile data={data} />
					<Tile data={data} />
				</div>
				<div className="column">
					<h2>Personal</h2>
					<Tile data={data} />
					<Tile data={data} />
					<Tile data={data} />
				</div>
			</div>
			{isModalOpen && (
				<Modal handleCloseButtonClick={() => setIsModalOpen(false)} />
			)}
		</>
	);
}

export default App;
