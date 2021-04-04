import React, { useState } from "react";

type Props = {
	setUploads: React.Dispatch<React.SetStateAction<File[] | null>>,
}

export const UploadButton = (props: Props) => {
	const [clicking, setClicking] = useState(false);

	const handleClick = () => {
		setClicking(true);
		setTimeout(() => setClicking(false), 100);
	}

	const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { files } = e.target;
		if (files && files.length) props.setUploads([...files]);
	}

	return (
		<div className={(!clicking ? "bg-btn-primary hover:bg-btn-hover" : "bg-btn-active") + " w-40 h-12 absolute bottom-1/2 md:bottom-1/4 left-1/2 transform -translate-x-1/2 translate-y-28 select-none rounded-full z-30"}
			onClick={handleClick}>
			<p className="w-full absolute bottom-1/2 left-1/2
				transform -translate-x-1/2 translate-y-1/2 text-center text-lg text-white">
				Select Files
			</p>
			<input className="w-full h-full opacity-0"
			type="file" onChange={handleUpload} multiple />
		</div>
	)
}
