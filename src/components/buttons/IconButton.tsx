import React from "react";

type ButtonProps = {
	iconSrc: string;
	dangerColor?: boolean;
	onClick: (id?: number) => void;
	className?: string;
	children?: React.ReactNode;
	successColor?: boolean;
	activeButtonId?: number;
	id?: number;
	altText?: string;
};

export default function IconButton({
	successColor,
	dangerColor,
	iconSrc,
	onClick,
	className,
	children,
	activeButtonId,
	id,
	altText,
}: ButtonProps) {
	return (
		<button
			onClick={() => onClick(id)}
			className={`icon-button ${dangerColor ? "danger" : ""} ${
				successColor ? "success" : ""
			} ${className || ""} ${activeButtonId === id ? "is-active" : ""}`}
		>
			<img alt={altText || "icon"} src={iconSrc} />
			{children}
		</button>
	);
}
