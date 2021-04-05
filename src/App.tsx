import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { DragAndDrop } from "./components/DragAndDrop";
import { UploadButton } from "./components/UploadButton";
import { FileUploadWrapper } from "./components/FileUploadWrapper"
import { FileUpload } from "./components/FileUpload";
import { Box } from "./components/Box";
import { ErrorMessage } from "./components/ErrorMessage"
import { Footer } from "./components/Footer";

export const App = () => {
	const [fileLength, setFileLength] = useState(0);
	const [uploads, setUploads] = useState<File[] | null>(null);
	const [error, setError] = useState("");
	const [finished, setFinished] = useState<boolean[]>([false]);

	useEffect(() => {
		if (fileLength) {
			let uploadsArray: boolean[] = [];
			for (let i = 0; i < fileLength; i++) {
				uploadsArray[i] = false;
			}
			setFinished(uploadsArray);
		}
	}, [fileLength]);

	return (
		<div className="absolute h-full w-full bg-gray-bg z-0" >
			{ error && (<ErrorMessage error={error} />)}
			<Header />
			{ finished.every(i => { return i === true}) ?
				<p>Finished!</p>
				: uploads ?
				<FileUploadWrapper>
					{ uploads.map(file => (<FileUpload key={uploads.indexOf(file)}
																	 index={uploads.indexOf(file)}
																	 file={file}
																	 setError={setError}
																	 finished={finished}
																	 setFinished={setFinished} />))
					}
				</FileUploadWrapper>
				: <>
					<DragAndDrop setFileLength={setFileLength} setUploads={setUploads} setError={setError} />
					<UploadButton setFileLength={setFileLength} setUploads={setUploads} setError={setError} />
				</> }
			{ !(finished.every(i => { return i === true})) && <Box uploads={uploads} /> }
			<Footer />
		</div>
	)
}
