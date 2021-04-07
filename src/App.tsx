import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { DragAndDrop } from "./components/DragAndDrop";
import { UploadButton } from "./components/UploadButton";
import { CargoWrapper } from "./components/CargoWrapper"
import { Cargo } from "./components/Cargo";
import { FileUploadWrapper } from "./components/FileUploadWrapper"
import { FileUpload } from "./components/FileUpload";
import { Box } from "./components/Box";
import { ErrorMessage } from "./components/ErrorMessage"
import { Footer } from "./components/Footer";

export const App = () => {
	const [fileLength, setFileLength] = useState(0);
	const [uploads, setUploads] = useState<File[] | null>(null);
	const [fileUrl, setFileUrl] = useState<string[]>([]);
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
			{ (uploads && finished.every(i => { return i === true })) ?
				<CargoWrapper fileLength={fileLength}>
					{uploads.map((file, index) => (<Cargo key={index}
						index={index}
						file={file}
						fileUrl={fileUrl}
						fileLength={fileLength} />))
					}
				</CargoWrapper>
				: uploads ?
					<FileUploadWrapper>
						{uploads.map((file, index) => (<FileUpload key={index}
							index={index}
							file={file}
							setError={setError}
							finished={finished}
							setFinished={setFinished}
							fileUrl={fileUrl}
							setFileUrl={setFileUrl} />))
						}
					</FileUploadWrapper>
					: <>
						<DragAndDrop setFileLength={setFileLength} setUploads={setUploads} setError={setError} />
						<UploadButton setFileLength={setFileLength} setUploads={setUploads} setError={setError} />
					</>}
			{ !(finished.every(i => { return i === true })) && <Box uploads={uploads} />}
			<Footer />
		</div>
	)
}
