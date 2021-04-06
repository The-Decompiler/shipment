import React, { useState } from "react";
import { prettyBytes } from "../utils";

import active from "../static/active-box.png";
import inactive from "../static/inactive-box.png";

type Props = {
	index: number,
	file: File,
	fileUrl: string[],
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
		<>
			<div>
			<img className="h-30 md:h-40 z-30" src={showHover ? active : inactive}
				onClick={handleClick}
				onMouseEnter={() => setShowHover(true)}
				onMouseLeave={() => setShowHover(false)}
			/>
			{showHover &&
				(<span className={(!clicking ? "w-24 bg-black" : "w-16 bg-green-600") + " rounded-lg py-1 absolute transform translate-x-6 -translate-y-40 text-white text-center text-xs z-40 " + (clicking && "translate-x-10")}>
					{(!clicking) ? "Click to Copy" : "Copied!"}
					<svg className={(!clicking ? "text-black" : "text-green-600") + " absolute h-2 w-full left-0 top-full"} x="0px" y="0px" viewBox="0 0 255 255"><polygon className="fill-current" points="0,0 127.5,127.5 255,0" /></svg>
				</span>)}
			</div>
		<div className={(showHover && "bg-btn-active rounded-full") + " w-80 h-9 absolute left-1/2 -bottom-3/4 transform -translate-x-1/2 translate-y-20 md:translate-y-0 px-4 py-1 text-white select-none z-40"}>
			<p className="w-56 inline relative pt-0.5 float-left truncate overflow-ellipsis text-md">{showHover && props.file.name}</p>
			<p className="inline relative pt-1 float-right text-sm">{showHover && prettyBytes(props.file.size)}</p>
		</div>
		</>
	)
}
