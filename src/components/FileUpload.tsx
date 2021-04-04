import React, { useState, useEffect } from "react";
import { storage } from "../firebase";

const dynamicLinkEndpoint = "https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=";

type Props = {
	file: File,
}

export const FileUpload = (props: Props) => {
	const [loadFile, setLoadFile] = useState(0);
	const [fileUrl, setFileUrl] = useState("");
	const [error, setError] = useState("");

	useEffect(() => {
		if (props.file.size > 10 * 1024 * 1024) {
			setError("File exceeds the upload limit (10MB)");
			return;
		}

		const uploadTask = storage.ref(`files/${props.file.name}`).put(props.file);
		uploadTask.on("state_changed", snapshot => {
			setLoadFile(Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100));
		}, error => {
			setError("Something went wrong...");
			console.log(error);
		}, () => {
			storage.ref("files")
						 .child(props.file.name)
						 .getDownloadURL()
						 .then(url => {
							 fetch(dynamicLinkEndpoint + import.meta.env.VITE_API_KEY, {
								 "method": "POST",
								 "body": JSON.stringify({
									 "dynamicLinkInfo": {
										 "domainUriPrefix": "https://shipme.page.link",
										 "link": url
									 },
									 "suffix": { "option": "SHORT" }
								 }),
								 "headers": { "Content-Type": "application/json" }
							 }).then(response => response.json())
								 .then(data => setFileUrl(data.shortLink));
						 });
		});
	}, []);

	return (
		<div className="h-full bg-blue-200">
			<p>File Name: {props.file.name}</p>
			<p>File Size: {props.file.size}</p>
			<p>{loadFile}%</p>
			<p>{fileUrl}</p>
			{ error && (<p>ERROR: {error}</p>)}
		</div>
	)
}
