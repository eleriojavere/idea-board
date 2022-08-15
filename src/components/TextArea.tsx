export default function TextArea({
	name,
	onChange,
	className,
	value,
	maxLength,
	onClick,
}: {
	type?: string;
	name: string;
	className?: string;
	onChange: (e: React.FormEvent<HTMLTextAreaElement>) => void;
	onClick?: () => void;
	value?: string;
	maxLength: number;
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
			></textarea>
		</>
	);
}
