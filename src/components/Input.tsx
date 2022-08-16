export default function Input({
	type,
	name,
	onChange,
	className,
	value,
	autoFocus,
	ariaLabel,
}: {
	type?: string;
	name: string;
	className?: string;
	onChange: (e: React.FormEvent<HTMLInputElement>) => void;
	value?: string;
	autoFocus?: boolean;
	ariaLabel?: string;
}) {
	return (
		<>
			<input
				autoFocus={autoFocus}
				className={`${className}`}
				onChange={onChange}
				type={type || "text"}
				name={name}
				value={value}
				aria-label={ariaLabel}
			></input>
		</>
	);
}
