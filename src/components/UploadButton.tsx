import React from "react"

type Props = {
	setUploadsButton: React.Dispatch<React.SetStateAction<File[] | null>>,
}

export const UploadButton = (props: Props) => {
	const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { files } = e.target;
		if (files && files.length) props.setUploadsButton([...files]);
	}

	return (
		<div>
			<input type="file" onChange={handleUpload} multiple /> <br /> <br />
		</div>
	)
}
