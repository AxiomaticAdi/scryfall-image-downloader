import { FC, useState, ChangeEvent, FormEvent } from "react";
import { decklistToArray, fetchCard } from "./helperFunctions";

export const CardEntryForm: FC = () => {
	const [cardNames, setCardNames] = useState<string>("");
	const [imageUrls, setImageUrls] = useState<string[]>([]);
	const [cardArray, setCardArray] = useState<string[]>([]);

	const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
		setCardNames(event.target.value);
	};

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		// Convert card names to array
		const processedCardArray = decklistToArray(cardNames);
		setCardArray(processedCardArray); // Set the card array to state here

		// Fetch all card images and set the URLs to state
		try {
			const urls = await Promise.all(processedCardArray.map(fetchCard));
			setImageUrls(urls);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<h4>Enter Magic Card Names (up to 50)</h4>
			<div style={{ display: "flex", flexDirection: "column" }}>
				<form
					onSubmit={handleSubmit}
					style={{ display: "flex", flexDirection: "column" }}
				>
					<textarea
						id="cardNamesTextarea"
						rows={10}
						cols={50}
						value={cardNames}
						onChange={handleInputChange}
						placeholder="Enter card names..."
					/>
					<button type="submit">Fetch Images</button>
				</form>

				<div style={{ display: "flex", flexDirection: "column" }}>
					{imageUrls.map((url, index) => (
						<a key={index} href={url} target="_blank" rel="noopener noreferrer">
							Image {index + 1}: {cardArray[index]}
						</a>
					))}
				</div>
			</div>
		</>
	);
};
