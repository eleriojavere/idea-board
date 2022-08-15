import { useState } from "react";
import { Idea } from "../App";
import TextButton from "./buttons/TextButton";
import Input from "./Input";
import Label from "./Label";
import TextArea from "./TextArea";

export default function Modal({
	handleCloseButtonClick,
	handleSaveForm,
	ideasArray,
	maxCharacters,
}: {
	handleCloseButtonClick: () => void;
	handleSaveForm: (data: Idea) => void;
	ideasArray: Idea[];
	maxCharacters: number;
}) {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	return (
		<>
			<div className="modal-overlay" />
			<div className="modal">
				<button className="close-button" onClick={handleCloseButtonClick}>
					x
				</button>
				<h2>Create new idea</h2>
				<Label>Title</Label>
				<Input
					autoFocus
					name="title"
					onChange={(e: React.FormEvent<HTMLInputElement>) => {
						setTitle(e.currentTarget.value);
					}}
				/>
				<Label>Description</Label>
				<TextArea
					maxLength={maxCharacters}
					className="description"
					name="description"
					onChange={(e: React.FormEvent<HTMLTextAreaElement>) => {
						setDescription(e.currentTarget.value);
					}}
				/>
				<div className="characters-count">
					{maxCharacters - description.length} characters remaining
				</div>
				<TextButton
					disabled={!title || !description}
					onClick={() =>
						handleSaveForm({
							id: ideasArray.length,
							title: title,
							description: description,
							created_at: new Date(),
						})
					}
				>
					save
				</TextButton>
			</div>
		</>
	);
}
