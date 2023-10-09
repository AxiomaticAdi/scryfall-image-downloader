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

export async function fetchCard(card: string): Promise<string> {
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
		return cardData.image_uris.png;
	} catch (error) {
		console.log(error);
		return "ERROR";
	}
}
