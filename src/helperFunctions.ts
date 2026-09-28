export function decklistToArray(decklist: string): string[] {
	const lines = decklist.split("\n");
	const cardArray: string[] = [];

	lines.forEach((line: string) => {
		const match = line.match(/^(\d+)\s+(.+)$/);
		if (match) {
			const count = parseInt(match[1], 10);
			const cardName = match[2];

			for (let i = 0; i < count; i++) {
				cardArray.push(cardName);
			}
		}
	});

	return cardArray;
}

export type CardImage = { name: string; url: string };

export async function fetchCard(card: string): Promise<CardImage[]> {
	try {
		const urlCardName: string = encodeURIComponent(card);
		const response = await fetch(
			"https://api.scryfall.com/cards/named?fuzzy=" + urlCardName,
			{ mode: "cors" },
		);

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		const cardData = await response.json();
		// Double-sided cards have images on their faces, not on the card itself.
		if (cardData.image_uris?.png) {
			return [{ name: card, url: cardData.image_uris.png }];
		}

		const faces: CardImage[] = (cardData.card_faces ?? [])
			.filter((face: { image_uris?: { png?: string } }) => face.image_uris?.png)
			.map((face: { name: string; image_uris: { png: string } }) => ({
				name: face.name,
				url: face.image_uris.png,
			}));
		if (faces.length > 0) {
			return faces;
		}
		throw new Error(`No PNG image available for ${card}`);
	} catch (error) {
		console.log(error);
		return [{ name: card, url: "ERROR" }];
	}
}
