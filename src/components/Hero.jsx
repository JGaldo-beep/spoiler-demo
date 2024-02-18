import React from "react";
import ReactPlayer from "react-player";
import video from "../assets/videos/abrazo-serpiente.mp4";
const Hero = () => {
	return (
		<div className="min-h-screen w-full">
			<ReactPlayer
				className="h-full"
				url={video}
				width={"100%"}
				height={"100%"}
				playing
				muted
				loop
			/>
		</div>
	);
};

export default Hero;
