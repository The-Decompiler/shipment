import React from "react";

type Props = {
	setUploads: React.Dispatch<React.SetStateAction<File[] | null>>,
}

export const DragAndDrop = (props: Props) => {
	const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		e.stopPropagation();

		const { files } = e.dataTransfer;
		if (files && files.length) props.setUploads([...files]);
	}

	const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		e.stopPropagation();
	}

	const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
	};

	return (
		<div className="h-24 bg-gray-200"
			onDrop={handleDrop}
			onDragEnter={handleDragEnter}
			onDragOver={handleDragOver}
		>
			<p>Drag files here</p>
		</div>
	)
}
