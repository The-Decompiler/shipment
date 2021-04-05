import React, { useState, useEffect } from "react";
import { storage } from "../firebase";

const dynamicLinkEndpoint = "https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=";

type Props = {
	file: File,
	setError: React.Dispatch<React.SetStateAction<string>>,
}

export const FileUpload = (props: Props) => {
	const [loadFile, setLoadFile] = useState(0);
	const [fileUrl, setFileUrl] = useState("");
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
								 .then(data => setFileUrl(data.shortLink))
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
		navigator.clipboard.writeText(fileUrl);
	}

	return (
		<div className={"w-80 text-white select-none"}
				onClick={handleClick}
				onMouseEnter={() => loadFile == 100 ? setShowTooltip(true) : null}
				onMouseLeave={() => setShowTooltip(false)}
			>
			<div className={(!clicking ? "bg-btn-primary hover:bg-btn-hover" : "bg-btn-active") + " absolute h-8 rounded-full px-3 py-1 bg-btn-primary"}
				style={{ width: (loadFile / 5).toString() + "rem" }}
			/>
			<div className={"w-full h-8 rounded-full px-3 py-1 bg-btn-active"}>
				{showTooltip &&
					(<span className={((!clicking && loadFile == 100) ? "w-24 bg-black" : "w-16 bg-green-600") + " rounded-lg py-1 absolute left-1/2 transform -translate-x-1/2 -translate-y-8 text-white text-center text-xs"}>
						{(!clicking) ? "Click to Copy" : "Copied!"}
						<svg className={((!clicking && loadFile == 100) ? "text-black" : "text-green-600") + " absolute h-2 w-full left-0 top-full"} x="0px" y="0px" viewBox="0 0 255 255"><polygon className="fill-current" points="0,0 127.5,127.5 255,0" /></svg>
					</span>)}
				<p className="w-56 inline relative float-left truncate overflow-ellipsis text-md">{props.file.name}</p>
				<p className="inline relative pt-0.5 float-right text-sm">{props.file.size}</p>
			</div>
		</div>
	)
}
