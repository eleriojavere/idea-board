export default function Input({
	type,
	name,
	onChange,
	className,
}: {
	type?: string;
	name: string;
	className?: string;
	onChange: (e: React.FormEvent<HTMLInputElement>) => void;
}) {
	return (
		<>
			<input className={`${className}`} onChange={onChange} type={type || "text"} name={name}></input>
		</>
	);
}
