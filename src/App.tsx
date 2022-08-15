import React, { useState } from "react";
import "./scss/entry.scss";
import Tile from "./components/Tile";
import IconButton from "./components/buttons/IconButton";
import PlusIcon from "../src/icons/plus.svg";
import Modal from "./components/Modal";

export type Idea = {
	id: number;
	title: string;
	description: string;
	created_at: Date;
	updated_at?: Date;
};

function App() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [ideasArray, setIdeasArray] = useState<Idea[]>([]);
	const maxCharacters = 140;

	const addToIdeas = ({ ...data }: Idea) => {
		setIdeasArray((prevData) => [
			...prevData,
			{
				id: data.id,
				title: data.title,
				description: data.description,
				created_at: data.created_at,
			},
		]);
	};

	const handleDeleteIdea = (id: number) => {
		setIdeasArray(ideasArray.filter((idea) => idea.id !== id));
	};

	return (
		<>
			<div className="header">
				<h1>Idea board</h1>
				<IconButton onClick={() => setIsModalOpen(true)} iconSrc={PlusIcon} />
			</div>
			<div className="board">
				{ideasArray.map((idea) => {
					return (
						<Tile
							maxCharacters={maxCharacters}
							key={`${idea.id}-${idea.title}`}
							data={idea}
							deleteIdea={(id: number) => handleDeleteIdea(id)}
						/>
					);
				})}
			</div>
			{isModalOpen && (
				<Modal
					maxCharacters={maxCharacters}
					ideasArray={ideasArray}
					handleCloseButtonClick={() => setIsModalOpen(false)}
					handleSaveForm={(data: Idea) => {
						addToIdeas(data);
						setIsModalOpen(false);
					}}
				/>
			)}
		</>
	);
}

export default App;
