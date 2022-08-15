import React, { useState } from "react";
import "./scss/entry.scss";
import Tile from "./components/Tile";
import IconButton from "./components/buttons/IconButton";
import PlusIcon from "../src/icons/plus.svg";
import Modal from "./components/Modal";

export type Data = {
	id?: number;
	title: string;
	description: string;
	created_at: Date;
	updated_at?: Date;
};
function App() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [ideasArray, setIdeasArray] = useState<Data[]>([]);

	const addToIdeas = ({ ...data }: Data) => {
		setIdeasArray((prevData) => [
			...prevData,
			{
				id: ideasArray.length,
				title: data.title,
				description: data.description,
				created_at: data.created_at,
			},
		]);
	};

	return (
		<>
			<div className="header">
				<h1>Idea board</h1>
				<IconButton onClick={() => setIsModalOpen(true)} iconSrc={PlusIcon} />
			</div>
			<div className="board">
				{ideasArray.map((idea) => {
					return <Tile key={`${idea.id}-${idea.title}`} data={idea} />;
				})}
			</div>
			{isModalOpen && (
				<Modal
					handleCloseButtonClick={() => setIsModalOpen(false)}
					handleSaveForm={(data: Data) => {
						addToIdeas(data);
						setIsModalOpen(false);
					}}
				/>
			)}
		</>
	);
}

export default App;
