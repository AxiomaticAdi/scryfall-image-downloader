import "./App.css";
import { CardEntryForm } from "./CardEntryForm";

function App() {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				height: "90vh",
				justifyContent: "space-between",
			}}
		>
			<h1>Magic Card Image Downloader for Billy</h1>
			<div>
				<CardEntryForm />
			</div>
			<p className="credits">
				Powered by <a href="https://scryfall.com/docs/api">scryfall API</a>
			</p>
		</div>
	);
}

export default App;
