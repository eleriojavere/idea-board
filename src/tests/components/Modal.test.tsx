import { render, screen, } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import Modal from "../../components/Modal";


test("save button is disabled when no title and description inputs have no values", () => {
	const props = {
		maxCharacters: 140,
		ideasArray: [],
		handleSaveForm: () => console.log(""),
		handleCloseButtonClick: () => console.log(""),
	};

	render(<Modal {...props} />);

	const saveButton = screen.getByRole("button", { name: /save/i });

	expect(saveButton).toBeDisabled();
});

test("save button is enabled when title and description inputs have values", () => {
	const props = {
		maxCharacters: 140,
		ideasArray: [],
		handleSaveForm: () => console.log(""),
		handleCloseButtonClick: () => console.log(""),
	};

	render(<Modal {...props} />);

	const titleInput = screen.getByRole("textbox", { name: /title/i });
	const descriptionInput = screen.getByRole("textbox", {
		name: /description/i,
	});
	const saveButton = screen.getByRole("button", { name: /save/i });

	userEvent.type(titleInput, "title value");
	userEvent.type(descriptionInput, "description value");

	expect(saveButton).not.toBeDisabled();
});


