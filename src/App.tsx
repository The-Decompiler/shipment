import React, { useState } from "react";
import { DragAndDrop } from "./components/DragAndDrop";
import { UploadButton } from "./components/UploadButton";
import { FileUpload } from "./components/FileUpload";

export const App = () => {
	const [uploads, setUploads] = useState<File[] | null>(null);

	return (
		<div>
			{ uploads ?
				uploads.map(file => (<FileUpload key={uploads.indexOf(file)} file={file} />))
				: <>
					<DragAndDrop setUploads={setUploads} />
					<UploadButton setUploads={setUploads} />
				</> }
		</div>
	)
}
