import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";
import { text } from "node:stream/consumers";

test("renders create new icon", () => {
	render(<App />);
	const button = screen.getByRole("button", { name: /create new icon/i });

	expect(button).toBeInTheDocument();
});

test("opens modal when clicked on create new button", () => {
	render(<App />);
	const button = screen.getByRole("button", { name: /create new icon/i });
	fireEvent.click(button);

	expect(screen.getByText("Create new idea")).toBeInTheDocument();
});

test("closes modal when clicked on close button", async () => {
	render(<App />);
	const button = screen.getByRole("button", { name: /create new icon/i });
	fireEvent.click(button);

	const closeButton = screen.getByRole("button", { name: /x/i });
	fireEvent.click(closeButton);

	expect(screen.queryByText("Create new idea")).not.toBeInTheDocument();
});

test("displays a new idea on board when created a new one", () => {
	render(<App />);

	const button = screen.getByRole("button", { name: /create new icon/i });

	fireEvent.click(button);

	const titleInput = screen.getByRole("textbox", { name: /title/i });
	const descriptionInput = screen.getByRole("textbox", {
		name: /description/i,
	});
	const saveButton = screen.getByRole("button", { name: /save/i });

	userEvent.type(titleInput, "title value");
	userEvent.type(descriptionInput, "description value");

	fireEvent.click(saveButton);

	expect(screen.getByText("description value")).toBeInTheDocument();
	expect(screen.getByDisplayValue("title value")).toBeInTheDocument();

});

