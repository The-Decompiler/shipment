import React from "react";

import box1 from "../static/box1.gif";
import box2 from "../static/box2.gif";

type Props = {
	uploads: File[] | null,
}

export const Box = (props: Props) => {
	return (
		<>
			{ !props.uploads ?
				<img className="absolute top-1/4 md:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-8 select-none z-20"
				src={box1} alt="Drop box" />
				: <img className="absolute top-1/4 md:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-10 md:-translate-y-28 select-none z-20"
				src={box2} alt="Drop box" />
			}
		</>
	)
}
