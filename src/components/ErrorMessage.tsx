import React from "react";

type Props = {
	error: string,
}

export const ErrorMessage = (props: Props) => {
	return (
		<p>ERROR: {props.error}</p>
	)
}
