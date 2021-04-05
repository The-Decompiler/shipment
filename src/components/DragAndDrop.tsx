import React, { useState } from "react";

import hexagon from "../static/hexagon.png";

type Props = {
	setUploads: React.Dispatch<React.SetStateAction<File[] | null>>,
	setError: React.Dispatch<React.SetStateAction<string>>,
}

export const DragAndDrop = (props: Props) => {
	const [dragging, setDragging] = useState(false);

	const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		e.stopPropagation();

		const { files } = e.dataTransfer;

		if (!files) return;

		if (files.length > 5) {
			props.setError("Only up to 5 files can be uploaded at once.");
		} else if (files.length) {
			props.setUploads([...files]);
		}

	}

	const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		e.stopPropagation();
		setDragging(true);
	}

	const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		setDragging(false);
	};

	return (
		<div className={"invisible md:visible absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-2/3 select-none z-20 " + (dragging && "scale-105")}
			onDrop={handleDrop}
			onDragEnter={handleDragEnter}
			onDragLeave={handleDragLeave}
		>
			<img src={hexagon} alt="Drop your files here" />
			<p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-20
				w-60 text-center text-4xl text-gray-hex">
				Drop your files here
			</p>
		</div>
	)
}
