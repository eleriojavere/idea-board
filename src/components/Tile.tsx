import React, { useState } from "react";
import { format } from "date-fns";
import IconButton from "./buttons/IconButton";
import MinusIcon from "../icons/minus.svg";

import { Idea } from "../App";
import Input from "./Input";
import TextArea from "./TextArea";

export default function Tile({
	data,
	deleteIdea,
	maxCharacters,
}: {
	data: Idea;
	deleteIdea: (id: number) => void;
	maxCharacters: number;
}) {
	const [title, setTitle] = useState(data.title);
	const [description, setDescription] = useState(data.description);
	const [date, setDate] = useState(data.created_at);
	const [characterCountVisible, setCharacterCountVisible] = useState(false);

	return (
		<div className="tile">
			<IconButton
				className="delete-button"
				dangerColor
				iconSrc={MinusIcon}
				onClick={() => deleteIdea(data.id)}
			/>

			<div className="date">{format(date, "dd. MMMM yyyy HH:mm")}</div>
			<div className="inputs">
				<Input
					value={title}
					name="title"
					className="h2"
					onChange={(e: React.FormEvent<HTMLInputElement>) => {
						setTitle(e.currentTarget.value);
						setDate(new Date());

					}}
				/>
				<TextArea
					maxLength={maxCharacters}
					value={description}
					name="description"
					onChange={(e: React.FormEvent<HTMLTextAreaElement>) => {
						setDescription(e.currentTarget.value);
						setDate(new Date());
						
					}}
          onClick={()=>setCharacterCountVisible(true)}
				/>
				<div
					className={`${
						characterCountVisible ? "visible" : ""
					} characters-count`}
				>
					{maxCharacters - description.length} characters remaining
				</div>
			</div>
		</div>
	);
}
