import React, { useState } from "react";

type Props = {
	url: string,
}

export const FileUrl = (props: Props) => {
	const handleClick: React.MouseEventHandler<HTMLInputElement> = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
		navigator.clipboard.writeText(props.url);
		e.currentTarget.select();
	}

	return (
		<input className="w-60 p-1 text-center rounded-md"
		onClick={handleClick}
		readOnly={true}
		value={props.url} />
	)
}
