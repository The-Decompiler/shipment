import React from "react";

type Props = {
	children: string | JSX.Element | (string | JSX.Element)[],
}

export const FileUploadWrapper = (props: Props) => {
	return (
		<div className="flex flex-col space-y-5 items-center justify-center w-1/2 h-1/3 absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
			{ props.children }
		</div>
	)
}
