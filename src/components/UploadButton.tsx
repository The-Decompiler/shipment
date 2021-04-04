import React from "react"

type Props = {
	setUploads: React.Dispatch<React.SetStateAction<File[] | null>>,
}

export const UploadButton = (props: Props) => {
	const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { files } = e.target;
		if (files && files.length) props.setUploads([...files]);
	}

	return (
		<input type="file" onChange={handleUpload} multiple />
	)
}
