import { Data } from "../App";
import TextButton from "./buttons/TextButton";
import Input from "./Input";
import Label from "./Label";

;

export default function Modal({
	handleCloseButtonClick,
	handleSaveForm,
}: {
	handleCloseButtonClick: () => void;
	handleSaveForm: (data: Data) => void;
}) {
	return (
		<>
			<div className="modal-overlay" />
			<div className="modal">
				<button className="close-button" onClick={handleCloseButtonClick}>
					x
				</button>
				<h2>Create new idea</h2>
				<Label>Title</Label>
				<Input name="title" />
				<Label>Description</Label>
				<Input name="description" />
				<TextButton
					onClick={() =>
						handleSaveForm({
							id: 1,
							title: "jee",
							description: "jee",
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
