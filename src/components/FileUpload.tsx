import React, { useState, useEffect } from "react";
import { storage } from "../firebase";

type Props = {
	file: File,
}

export const FileUpload = (props: Props) => {
	const [loadFile, setLoadFile] = useState(0);
	const [fileUrl, setFileUrl] = useState("");

	useEffect(() => {
		const uploadTask = storage.ref(`files/${props.file.name}`).put(props.file);
		uploadTask.on("state_changed", snapshot => {
			setLoadFile(Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100));
		}, error => {
			console.log(error);
		}, () => {
			storage.ref("files")
						 .child(props.file.name)
						 .getDownloadURL()
						 .then(url => {
							 setFileUrl(url);
						 });
		});
	}, []);

	return (
		<div className="h-full bg-blue-200">
			<p>File Name: {props.file.name}</p>
			<p>File Size: {props.file.size}</p>
			<p>{loadFile}%</p>
			<p>{fileUrl}</p>
		</div>
	)
}
