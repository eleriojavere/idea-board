export default function TextButton({
	children,
	onClick,
	disabled,
}: {
	children: React.ReactNode;
	onClick: () => void;
	disabled: boolean;
}) {
	return (
		<button disabled={disabled} onClick={onClick} className="text-button">
			{children}
		</button>
	);
}
