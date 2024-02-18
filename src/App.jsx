import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Populares from "./components/Populares";

function App() {
	return (
		<>
			<main className="relative bg-black">
				{/* <Navbar /> */}
				<section className="">
					<Hero />
				</section>
				<section className="padding">
					<Populares />
				</section>
			</main>
		</>
	);
}

export default App;
