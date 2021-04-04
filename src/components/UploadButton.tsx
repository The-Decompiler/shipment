import React from "react"

type Props = {
	setUploads: React.Dispatch<React.SetStateAction<File[] | null>>,
	setError: React.Dispatch<React.SetStateAction<string>>,
}

export const UploadButton = (props: Props) => {
	const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { files } = e.target;

		if (!files) return;

		if (files.length > 5) {
			props.setError("Only up to 5 files can be uploaded at once.");
		} else if (files.length) {
			props.setUploads([...files]);
		}
	}

	return (
		<input type="file" onChange={handleUpload} multiple />
	)
}
