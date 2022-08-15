import React from "react";
import { format } from "date-fns";
import IconButton from "./buttons/IconButton";
import MinusIcon from "../icons/minus.svg";
import { Data } from "../App";

export default function Tile({ data }: { data: Data }) {
	return (
		<div className="tile">
			<IconButton
				dangerColor
				iconSrc={MinusIcon}
				onClick={() => console.log("click")}
			/>
			<div className="date">
				{data.updated_at
					? format(data?.updated_at, "dd. MMMM yyyy")
					: format(data.created_at, "dd. MMMM yyyy")}
			</div>
			<h2>{data.title}</h2>
			<p>{data.description}</p>
		</div>
	);
}
