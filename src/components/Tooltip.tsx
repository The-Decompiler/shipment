import React from "react";

type Props = {
	clicking: boolean,
}

export const Tooltip = (props: Props) => {
	return (
		<div className="w-full">
			<span className={(!props.clicking ? "w-20 md:w-24 bg-black" : "w-12 md:w-16 bg-green-600") + " rounded-lg py-1 absolute transform translate-x-full -translate-y-full text-white text-center text-lxs md:text-xs z-40 " + (props.clicking && "mx-12")}>
				{(!props.clicking) ? "Click to Copy" : "Copied!"}
				<svg className={(!props.clicking ? "text-black" : "text-green-600") + " absolute h-2 w-full left-0 top-full"} x="0px" y="0px" viewBox="0 0 255 255"><polygon className="fill-current" points="0,0 127.5,127.5 255,0" /></svg>
			</span>
		</div>
	)
}
