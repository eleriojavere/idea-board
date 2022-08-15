export default function TextButton({
	children,
	onClick,
}: {
	children: React.ReactNode;
	onClick: () => void;
}) {
	return (
		<button onClick={onClick} className="text-button">
			{children}
		</button>
	);
}
