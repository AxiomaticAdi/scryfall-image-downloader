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
			<div
				style={{
					display: "flex",
					flexDirection: "column",
				}}
			>
				<h3>Instructions for use:</h3>
				Add one card per line in the format "[number] [card name]"
				<i>Example:</i>1 sol ring
			</div>
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
