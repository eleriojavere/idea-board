import React from "react";

type ButtonProps = {
	iconSrc: string;
	dangerColor?: boolean;
	onClick: () => void;
	className?: string;
};

export default function IconButton({
	dangerColor,
	iconSrc,
	onClick,
	className,
}: ButtonProps) {
	return (
		<button
			onClick={onClick}
			className={`icon-button ${
				dangerColor ? "danger" : "success"
			} ${className}`}
		>
			<img alt="icon" src={iconSrc} />
		</button>
	);
}
