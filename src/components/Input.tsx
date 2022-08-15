export default function Input({
	type,
	name,
}: {
	type?: string;
	name: string;
}) {
	return (
		<>
			<input type={type || "text"} name={name}></input>
		</>
	);
}
