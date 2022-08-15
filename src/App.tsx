import React, { useState } from "react";
import "./scss/entry.scss";
import Tile from "./components/Tile";
import IconButton from "./components/buttons/IconButton";
import PlusIcon from "../src/icons/plus.svg";
import ArrowIcon from "../src/icons/arrow.svg";
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
	const [activeButtonId, setActiveButtonId] = useState<undefined | number>(
		undefined
	);

	const [sortAlphaBethicallyAscending, setsortAlphaBethicallyAscending] =
		useState(true);
	const [sortDateAscending, setsortDateAscending] = useState(true);

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

	const toggleSortAlphabetically = () => {
		if (sortAlphaBethicallyAscending) {
			setIdeasArray(ideasArray.sort((a, b) => a.title.localeCompare(b.title)));
		} else {
			setIdeasArray(ideasArray.sort((a, b) => b.title.localeCompare(a.title)));
			
		}
    setsortAlphaBethicallyAscending(!sortAlphaBethicallyAscending);
	};

	const toggleSortByDate = () => {
		if (sortDateAscending) {
			setIdeasArray(
				ideasArray.sort((a, b) => {
					return (
						Date.parse(a.created_at.toISOString()) -
						Date.parse(b.created_at.toISOString())
					);
				})
			);
		} else {
			setIdeasArray(
				ideasArray.sort((a, b) => {
					return (
						Date.parse(b.created_at.toISOString()) -
						Date.parse(a.created_at.toISOString())
					);
				})
			);
		}
		setsortDateAscending(!sortDateAscending);
	};

	const addUpdatedDate = (id: number, date: Date) => {
		const newState = ideasArray.map((idea) => {
			if (idea.id === id) {
				return {
					id: idea.id,
					title: idea.title,
					updated_at: date,
					created_at: idea.created_at,
					description: idea.description,
				};
			}

			return idea;
		});

		setIdeasArray(newState);
	};

	return (
		<>
			<div className="header">
				<h1>Idea board</h1>
				<IconButton
					onClick={() => setIsModalOpen(true)}
					iconSrc={PlusIcon}
					successColor
				/>
			</div>
			<div className="sorting">
				<IconButton
					activeButtonId={activeButtonId}
					id={1}
					onClick={(id) => {
						setActiveButtonId(id);
						toggleSortAlphabetically();
					}}
					iconSrc={ArrowIcon}
				>
					Sort alphabetically{" "}
					{sortAlphaBethicallyAscending ? "ascending" : "descending"}
				</IconButton>
				<IconButton
					activeButtonId={activeButtonId}
					id={2}
					onClick={(id) => {
						setActiveButtonId(id);
						toggleSortByDate();
					}}
					iconSrc={ArrowIcon}
				>
					Sort by date {sortDateAscending ? "ascending" : "descending"}
				</IconButton>
			</div>
			<div className="board">
				{ideasArray.map((idea) => {
					return (
						<Tile
							updateDate={(id, date) => {
								addUpdatedDate(id, date);
							}}
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
