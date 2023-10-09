import "./App.css";
import { CardEntryForm } from "./CardEntryForm";

function App() {
	return (
		<>
			<h1>Magic Card Image Downloader for Billy</h1>
			<div>
				<CardEntryForm />
			</div>
			<p className="credits">
				Powered by <a href="https://scryfall.com/docs/api">scryfall API</a>
			</p>
		</>
	);
}

export default App;
