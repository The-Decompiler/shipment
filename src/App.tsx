import React, { useState } from "react";
import { DragAndDrop } from "./components/DragAndDrop";
import { UploadButton } from "./components/UploadButton";
import { FileUpload } from "./components/FileUpload";

export const App = () => {
	const [uploads, setUploads] = useState<File[] | null>(null);
	const [error, setError] = useState("");

	return (
		<div>
			{ error && (<p>ERROR: {error}</p>)}
			{ uploads ?
				uploads.map(file => (<FileUpload key={uploads.indexOf(file)} file={file} />))
				: <>
					<DragAndDrop setUploads={setUploads} setError={setError} />
					<UploadButton setUploads={setUploads} setError={setError} />
				</> }
		</div>
	)
}
