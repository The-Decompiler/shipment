import React, { useState } from "react";
import { Header } from "./components/Header";
import { DragAndDrop } from "./components/DragAndDrop";
import { UploadButton } from "./components/UploadButton";
import { FileUpload } from "./components/FileUpload";
import { Footer } from "./components/Footer";

export const App = () => {
	const [uploads, setUploads] = useState<File[] | null>(null);

	return (
		<div className="absolute h-full w-full bg-gray-bg z-0" >
			<Header />
			{ uploads ?
				uploads.map(file => (<FileUpload key={uploads.indexOf(file)} file={file} />))
				: <>
					<DragAndDrop setUploads={setUploads} />
					<UploadButton setUploads={setUploads} />
				</> }
			<Footer />
		</div>
	)
}
