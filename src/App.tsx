import React, { useState } from "react";
import { DragAndDrop } from "./components/DragAndDrop";
import { FileUpload } from "./components/FileUpload";

export const App = () => {
	const [uploads, setUploads] = useState<File[] | null>(null);

	return (
		<div>
			{ uploads ?
				uploads.map(file => (<FileUpload file={file} />))
				: <DragAndDrop setUploads={setUploads} /> }
		</div>
	)
}
