import React, { useState } from "react";
import { Header } from "./components/Header";
import { DragAndDrop } from "./components/DragAndDrop";
import { UploadButton } from "./components/UploadButton";
import { FileUpload } from "./components/FileUpload";
import { Box } from "./components/Box";
import { ErrorMessage } from "./components/ErrorMessage"
import { Footer } from "./components/Footer";

export const App = () => {
	const [uploads, setUploads] = useState<File[] | null>(null);
	const [error, setError] = useState("");

	return (
		<div className="absolute h-full w-full bg-gray-bg z-0" >
			{ error && (<ErrorMessage error={error} />)}
			<Header />
			{ uploads ?
				uploads.map(file => (<FileUpload key={uploads.indexOf(file)} file={file} />))
				: <>
					<DragAndDrop setUploads={setUploads} setError={setError} />
					<UploadButton setUploads={setUploads} setError={setError} />
				</> }
			<Box uploads={uploads} />
			<Footer />
		</div>
	)
}
