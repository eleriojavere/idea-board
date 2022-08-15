import React from "react";

type ButtonProps = {
	iconSrc: string;
	dangerColor?: boolean;
	onClick: () => void;
};

export default function IconButton({ dangerColor, iconSrc, onClick }: ButtonProps) {
	return (
		<button onClick={onClick} className={`icon-button ${dangerColor ? "danger" : "success"}`}>
			<img alt="icon" src={iconSrc} />
		</button>
	);
}
