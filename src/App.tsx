import React, { useState } from "react";
import { DragAndDrop } from "./components/DragAndDrop";
import { UploadButton } from "./components/UploadButton";
import { FileUpload } from "./components/FileUpload";

export const App = () => {
	const [uploadsDrop, setUploadsDrop] = useState<File[] | null>(null);
	const [uploadsButton, setUploadsButton] = useState<File[] | null>(null);

	return (
		<div>
			{ uploadsDrop ?
				uploadsDrop.map(file => (<FileUpload key={uploadsDrop.indexOf(file)} file={file} />))
				: <DragAndDrop setUploadsDrop={setUploadsDrop} /> }
			{ uploadsButton ?
				uploadsButton.map(file => (<FileUpload key={uploadsButton.indexOf(file)} file={file} />))
				: <UploadButton setUploadsButton={setUploadsButton} /> }
		</div>
	)
}
