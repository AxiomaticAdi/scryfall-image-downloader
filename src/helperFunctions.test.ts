import { decklistToArray } from "./helperFunctions";

describe("decklistToArray", () => {
	const decklist = `1 Basilisk Collar
1 Commander's Plate
1 The Ozolith
2 Lightning Greaves`;

	it("should correctly parse a decklist into an array", () => {
		const result = decklistToArray(decklist);

		expect(result).toEqual([
			"Basilisk Collar",
			"Commander's Plate",
			"The Ozolith",
			"Lightning Greaves",
			"Lightning Greaves",
		]);
	});

	it("should return an empty array for an empty decklist", () => {
		expect(decklistToArray("")).toEqual([]);
	});
});
