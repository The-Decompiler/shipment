import React, { useState } from "react";
import { prettyBytes } from "../utils";

import { Tooltip } from "./Tooltip";

import active from "../static/active-box.png";
import inactive from "../static/inactive-box.png";

type Props = {
	index: number,
	file: File,
	fileUrl: string[],
	fileLength: number,
}

export const Cargo = (props: Props) => {
	const [clicking, setClicking] = useState(false);
	const [showHover, setShowHover] = useState(false);

	const handleClick = () => {
		setClicking(true);
		setTimeout(() => setClicking(false), 500);
		navigator.clipboard.writeText(props.fileUrl[props.index]);
	}

	return (
		<div className={"" +
										(props.fileLength == 3 ? ((props.index == 2) && "col-span-2") : "") +
										(props.fileLength == 5 ?
										 ((props.index == 0) && "col-start-2 col-span-2 ") : "") +
										(props.fileLength == 5 ?
										 ((props.index == 1) && "col-start-4 col-span-2 ") : "") +
										(props.fileLength == 5 ?
										 ((props.index == 2) && "col-start-1 col-span-2 ") : "") +
										(props.fileLength == 5 ?
										 ((props.index == 3) && "col-start-3 col-span-2 ") : "") +
										(props.fileLength == 5 ?
										 ((props.index == 4) && "col-start-5 col-span-2 ") : "")
		}>
			<div>
				<img className="h-36 md:h-40 z-30" src={showHover ? active : inactive}
					onClick={handleClick}
					onMouseEnter={() => setShowHover(true)}
					onMouseLeave={() => setShowHover(false)}
				/>
				{showHover && (
					<div className="relative right-14 md:right-20 bottom-32 md:bottom-36 ">
						<Tooltip clicking={clicking} />
					</div>
				)}
			</div>
			<div className={(showHover && "bg-btn-active rounded-full") + " w-80 h-9 absolute left-1/2 -bottom-3/4 transform -translate-x-1/2 translate-y-20 md:translate-y-0 px-4 py-1 text-white select-none z-40"}>
				<p className="w-56 inline relative pt-0.5 float-left truncate overflow-ellipsis text-md">{showHover && props.file.name}</p>
				<p className="inline relative pt-1 float-right text-sm">{showHover && prettyBytes(props.file.size)}</p>
			</div>
		</div>
	)
}
