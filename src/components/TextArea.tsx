export default function TextArea({

	name,
	onChange,
	className,
}: {
	type?: string;
	name: string;
	className?: string;
	onChange: (e: React.FormEvent<HTMLTextAreaElement>) => void;
}) {
	return (
		<>
			<textarea className={`${className}`} onChange={onChange}  name={name}></textarea>
		</>
	);
}
