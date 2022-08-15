import React from "react";
import { format } from "date-fns";
import IconButton from "./buttons/IconButton";
import MinusIcon from "../icons/minus.svg";


type TileProps = {
	data: {
		id: number;
		title: string;
		description: string;
		created_at: Date;
		updated_at?: Date;
	};
};

export default function Tile({ data }: TileProps) {
	return (
		<div className="tile">
      <IconButton dangerColor iconSrc={MinusIcon} onClick={()=>console.log('click')}/>
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
