
import TextButton from "./buttons/TextButton";
import Input from "./Input";
import Label from "./Label";


export default function Modal({ handleCloseButtonClick }: { handleCloseButtonClick: () => void }) {
	return (
		<>
			<div className="modal-overlay" />
			<div className="modal">
				<button className="close-button" onClick={handleCloseButtonClick}>x</button>
				<h2>Create new idea</h2>
				<Label>Title</Label>
				<Input name="title" />
				<Label>Description</Label>
				<Input name="description" />
				<TextButton onClick={handleCloseButtonClick}>save</TextButton>
			</div>
		</>
	);
}
