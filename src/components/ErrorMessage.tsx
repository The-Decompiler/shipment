import React from "react";

type Props = {
	error: string,
}

export const ErrorMessage = (props: Props) => {
	return (
		<div className="w-3/4 p-6 bg-btn-hover absolute left-1/8 -top-10 rounded text-white text-sm opacity-90 animate-notify z-50">
				<b>ERROR</b>: {props.error}
		</div>
	)
}
