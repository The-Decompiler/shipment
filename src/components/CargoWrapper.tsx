import React from "react";

type Props = {
	fileLength: number,
	children: string | JSX.Element | (string | JSX.Element)[],
}

export const CargoWrapper = (props: Props) => {
	return (
		<div className="w-3/4 sm:w-2/3 md:w-1/2 h-1/3 absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-20">
			<div className={"grid " +
											((props.fileLength == 2) ? "grid-cols-2 " : "") +
											 ((props.fileLength == 3) ? "lg:absolute lg:transform lg:left-1/2 lg:-translate-x-1/2 lg:w-2/3 xl:w-1/2 grid-cols-2 gap-x-8 sm:gap-y-3 md:gap-y-6 " : "") +
											 ((props.fileLength == 4) ? "lg:absolute lg:transform lg:left-1/2 lg:-translate-x-1/2 lg:w-2/3 xl:w-1/2 grid-cols-2 gap-y-2 sm:gap-y-6 md:gap-y-8 lg:gap-y-12 " : "") +
											 ((props.fileLength == 5) ? "grid-cols-6 gap-x-8 gap-y-0 sm:gap-y-3 md:gap-y-6 " : "") +
											"auto-rows-fr place-items-center"
			}>
			{props.children}
			</div>
			<div className="w-80 h-9 absolute left-1/2 -bottom-3/4 transform -translate-x-1/2 translate-y-20 md:translate-y-0 rounded-full bg-btn-active px-4 py-1.5 text-white select-none">
				Click to Copy File URL
			</div>
		</div>
	)
}
