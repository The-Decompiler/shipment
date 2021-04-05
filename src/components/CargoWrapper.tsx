import React from "react";

type Props = {
	children: string | JSX.Element | (string | JSX.Element)[],
}

export const CargoWrapper = (props: Props) => {
	return (
		<div className="grid grid-cols-3 place-items-center w-1/2 h-1/3 absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-20">
			{ props.children }
			<div className="w-80 h-9 absolute left-1/2 -bottom-3/4 transform -translate-x-1/2 translate-y-20 md:translate-y-0 rounded-full bg-btn-active px-4 py-1.5 text-white select-none">
				Click to Copy File URL
			</div>
		</div>
	)
}
