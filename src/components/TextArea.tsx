export default function TextArea({
	name,
	onChange,
	className,
	value,
	maxLength,
	onClick,
	ariaLabel,
}: {
	type?: string;
	name: string;
	className?: string;
	onChange: (e: React.FormEvent<HTMLTextAreaElement>) => void;
	onClick?: () => void;
	value?: string;
	maxLength: number;
	ariaLabel?: string;
}) {
	return (
		<>
			<textarea
				maxLength={maxLength}
				className={`${className || ""}`}
				onChange={onChange}
				onClick={onClick}
				value={value}
				name={name}
				aria-label={ariaLabel}
			></textarea>
		</>
	);
}
