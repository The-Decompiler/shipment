import React from "react";

import icongs from "../static/icon-gs.png";

export const Footer = () => {
	return (
		<div className="w-56 absolute bottom-12 left-1/2 transform -translate-x-1/3 z-10">
			<img className="absolute h-8" src={icongs} alt="Footer icon" />
			<p className="absolute top-1 right-1/3 text-sm">© shipment 2021</p>
		</div>
	)
}
