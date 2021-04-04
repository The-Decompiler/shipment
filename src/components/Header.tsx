import React from "react";

import icon from "../static/icon.png";

export const Header = () => {
	return (
		<div className="w-60 absolute top-4 left-1/2 transform -translate-x-1/3 z-50">
			<img className="absolute h-12" src={icon} alt="Header icon" />
			<h1 className="absolute top-2 right-1/3 text-2xl">shipment</h1>
		</div>
	)
}
