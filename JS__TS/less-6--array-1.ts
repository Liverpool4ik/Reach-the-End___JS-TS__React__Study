const a: Array<any> = [];
const b: any[] = [1, -6, false, "", "city"];
const c: string[] = ["sss", "dddd", "sad"];
const d: [boolean, number, string] = [false, 1, "someText"];

///=====================================

interface someObjectFirst {
	name: string;
}

interface someObjectSecond {
	data: [string, string];
}

const e: someObjectFirst[] = [];

const f: someObjectFirst[] = [
	{ name: "dddd" },
	{ name: "ssddd" },
	{ name: "dslfkjfkslsasdklvkjf" },
];

const g: someObjectSecond[] = [
	{ data: ["stringggg", "sdds"] },
	{ data: ["stringggg", "sa"] },
	{ data: ["stringggg", "s"] },
];
