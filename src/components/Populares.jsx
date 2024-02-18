import React from "react";
import ReactPlayer from "react-player";
import video from "../assets/videos/abrazo-serpiente.mp4";
import { Link } from "react-router-dom";

const Populares = () => {
	return (
		<section
			id="spoiler"
			className="relative flex justify-between max-container max-sm:mt-12 h-[600px] -mt-24"
		>
			<div className="border-white border-4 w-[600px] rounded-md h-[650px]">
				<div className="m-6 text-white -mt-6">
					<ReactPlayer
						// className="h-full"
						url={video}
						width={"100%"}
						controls
					/>
					<h1 className="text-2xl font-bold pt-4">
						¿Como empezamos?
					</h1>
					<p className="mt-4">
						Lorem Ipsum is simply dummy text of the printing and
						typesetting industry. Lorem Ipsum has been the
						industry's standard dummy text ever since the 1500s,
						when an unknown printer took a galley of type and
						scrambled it to make a type specimen book.
					</p>
					<Link to={"/donacion"}>
						<button class="bg-pink-900 hover:bg-pink-950 text-white font-bold py-2 px-4 border border-pink-900 rounded mt-4">
							Realizar inversión
						</button>
					</Link>
				</div>
			</div>
			<div className="border-white border-4 w-[600px] rounded-md h-[650px]">
				<div className="m-6 text-white -mt-6">
					<ReactPlayer
						// className="h-full"
						url={video}
						width={"100%"}
						controls
					/>
					<h1 className="text-2xl font-bold pt-4">
						¿Como empezamos?
					</h1>
					<p className="mt-4">
						Lorem Ipsum is simply dummy text of the printing and
						typesetting industry. Lorem Ipsum has been the
						industry's standard dummy text ever since the 1500s,
						when an unknown printer took a galley of type and
						scrambled it to make a type specimen book.
					</p>
					<Link to={"/donacion"}>
						<button class="bg-pink-900 hover:bg-pink-950 text-white font-bold py-2 px-4 border border-pink-900 rounded mt-4">
							Realizar inversión
						</button>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Populares;
