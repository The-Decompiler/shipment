import React, { useState, useEffect } from "react";
import { storage } from "../firebase";
import { prettyBytes } from "../utils";

import { Tooltip } from "./Tooltip";

const dynamicLinkEndpoint = "https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=";

type Props = {
	index: number,
	file: File,
	setError: React.Dispatch<React.SetStateAction<string>>,
	finished: boolean[],
	setFinished: React.Dispatch<React.SetStateAction<boolean[]>>,
	fileUrl: string[],
	setFileUrl: React.Dispatch<React.SetStateAction<string[]>>,
}

export const FileUpload = (props: Props) => {
	const [loadFile, setLoadFile] = useState(0);
	const [clicking, setClicking] = useState(false);
	const [showTooltip, setShowTooltip] = useState(false);

	useEffect(() => {
		if (props.file.size > 10 * 1024 * 1024) {
			props.setError("File exceeds the upload limit (10MB)");
			return;
		}

		const uploadTask = storage.ref(`files/${props.file.name}`).put(props.file);
		uploadTask.on("state_changed", snapshot => {
			setLoadFile(Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100));
		}, error => {
			props.setError("Something went wrong...");
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
								 .then(data => {
									 let urlArray = props.fileUrl;
									 urlArray[props.index] = data.shortLink;
									 props.setFileUrl(urlArray);
									 let finArray = props.finished;
									 finArray[props.index] = true;
									 props.setFinished([...finArray]);
								 })
								 .catch(error => {
									 props.setError("Request failed.");
									 console.log(error);
								 });
						 });
		});
	}, []);

	const handleClick = () => {
		setClicking(true);
		setTimeout(() => setClicking(false), 100);

		if (loadFile != 100) return;
		navigator.clipboard.writeText(props.fileUrl[props.index - 1]);
	}

	return (
		<div className={"w-80 text-white select-none"}
				onClick={handleClick}
				onMouseEnter={() => loadFile == 100 ? setShowTooltip(true) : null}
				onMouseLeave={() => setShowTooltip(false)}
			>
			<div className={(!clicking ? "bg-btn-primary hover:bg-btn-hover" : "bg-btn-active") + " absolute h-9 rounded-full px-3 py-1 bg-btn-primary"}
				style={{ width: (loadFile / 5).toString() + "rem" }}
			/>
			<div className={"w-full h-9 rounded-full px-3 py-1 bg-btn-active"}>
				{showTooltip && <Tooltip clicking={clicking} />}
				<p className="w-56 inline relative pt-0.5 float-left truncate overflow-ellipsis text-md">{props.file.name}</p>
				<p className="inline relative pt-1 float-right text-sm">{prettyBytes(props.file.size)}</p>
			</div>
		</div>
	)
}
