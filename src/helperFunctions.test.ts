import { decklistToArray, fetchCard } from "./helperFunctions";

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


describe("fetchCard", () => {
	afterEach(() => jest.restoreAllMocks());

	it("returns the card image for a single-faced card", async () => {
		const mockFetch = jest.spyOn(global, "fetch").mockResolvedValue({
			ok: true,
			json: async () => ({ image_uris: { png: "https://example.com/sol-ring.png" } }),
		} as Response);

		expect(await fetchCard("Sol Ring")).toEqual([
			{ name: "Sol Ring", url: "https://example.com/sol-ring.png" },
		]);
		expect(mockFetch).toHaveBeenCalledWith(
			"https://api.scryfall.com/cards/named?fuzzy=Sol%20Ring",
			{ mode: "cors" },
		);
	});

	it("returns both PNGs for a double-faced card", async () => {
		jest.spyOn(global, "fetch").mockResolvedValue({
			ok: true,
			json: async () => ({
				card_faces: [
					{ name: "Delver of Secrets", image_uris: { png: "https://example.com/front.png" } },
					{ name: "Insectile Aberration", image_uris: { png: "https://example.com/back.png" } },
				],
			}),
		} as Response);

		expect(await fetchCard("Delver of Secrets")).toEqual([
			{ name: "Delver of Secrets", url: "https://example.com/front.png" },
			{ name: "Insectile Aberration", url: "https://example.com/back.png" },
		]);
	});

	it("prefers the card-level image for a split card with faces", async () => {
		jest.spyOn(global, "fetch").mockResolvedValue({
			ok: true,
			json: async () => ({
				image_uris: { png: "https://example.com/split.png" },
				card_faces: [{ name: "Fire" }, { name: "Ice" }],
			}),
		} as Response);

		expect(await fetchCard("Fire // Ice")).toEqual([
			{ name: "Fire // Ice", url: "https://example.com/split.png" },
		]);
	});
});
