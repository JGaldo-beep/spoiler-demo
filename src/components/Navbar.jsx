import React from "react";
import hamburger from "../assets/icons/hamburger.svg";
import { navLinks } from "../constans";
import spoiler from "../assets/images/spoiler.png";

const Navbar = () => {
	return (
		<header className="sm:px-16 px-8 py-8 fixed z-10 w-full">
			<nav className="flex justify-between items-center max-container">
				{/* Logo */}
				<a href="/">
					<img src={spoiler} alt="Logo" className="w-40" />
				</a>

				{/* Services */}
				<ul className="text-white-400 flex flex-1 justify-center gap-16 items-center max-lg:hidden">
					{navLinks.map(items => (
						<li key={items.label}>
							<a
								className="font-montserrat leading-normal text-lg "
								href={items.href}
							>
								{items.label}
							</a>
						</li>
					))}
				</ul>

				<div>
					<button className="bg-transparent hover:bg-pink-900 text-white-400 font-semibold hover:text-white-400 py-2 px-4 border border-white-400 hover:border-transparent rounded">
						Sign Up
					</button>
				</div>

				<div className="hidden max-lg:block">
					<img
						src={hamburger}
						width={25}
						height={25}
						alt="Hamburguer"
					/>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
