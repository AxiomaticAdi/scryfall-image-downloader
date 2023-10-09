import "./App.css";
import { CardEntryForm } from "./CardEntryForm";
import { Instructions } from "./Instructions";
import gitLogo from "/src/assets/github-logo-white.svg";

function App() {
	return (
		<div
			id="page"
			style={{
				display: "flex",
				flexDirection: "column",
				height: "90vh",
				justifyContent: "space-between",
			}}
		>
			<div id="top">
				<h1>Scryfall MTG Card Image Download Engine</h1>
				<Instructions />
			</div>

			<div
				id="middle-1"
				style={{
					display: "flex",
					flexDirection: "column",
				}}
			>
				<h4>Enter Magic Card Names (up to 50)</h4>
				<CardEntryForm />
			</div>

			<div className="bottom">
				<a href="https://github.com/AxiomaticAdi/scryfall-image-downloader">
					<img
						src={gitLogo}
						height="50px"
						width="auto"
						title="my github"
						alt="my github"
					/>
				</a>
			</div>
		</div>
	);
}

export default App;
