import { FC, useState, ChangeEvent, FormEvent } from "react";
import { CardImage, decklistToArray, fetchCard } from "./helperFunctions";

export const CardEntryForm: FC = () => {
	const [cardNames, setCardNames] = useState<string>("");
	const [images, setImages] = useState<CardImage[]>([]);

	const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
		setCardNames(event.target.value);
	};

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		// Convert card names to array
		const processedCardArray = decklistToArray(cardNames);

		// Fetch all card images and set the URLs to state
		try {
			const cardImages = await Promise.all(processedCardArray.map(fetchCard));
			setImages(cardImages.flat());
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
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
					{images.map(({ name, url }, index) => (
						<a key={index} href={url} target="_blank" rel="noopener noreferrer">
							Image {index + 1}: {name}
						</a>
					))}
				</div>
			</div>
		</>
	);
};
