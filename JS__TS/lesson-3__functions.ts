// console.log(1);
// function NameOfThisFunction() {
// 	console.log("inner Console.log");
// }

// console.log(3);
// console.log(4);
// NameOfThisFunction();
// NameOfThisFunction();
// NameOfThisFunction();

// function NameOfThisFunction() {
// 	return 20;
// }

// const a = NameOfThisFunction();

// console.log(a);

function NameOfThisFunction(
	yearFounded: number,
	colour: string,
	manager: string = "Mister Nobodyyyyyeee"
): string {
	return `${yearFounded}, ${colour}, ${manager}`;
}

const a = NameOfThisFunction(1899, "red");

console.log(a);
console.log(
	"==================================================================="
);
//==========================================================================

const someFunc1 = (
	manager: string,
	colour: string,
	yearFounded: number,
	stadium: string
) => `${stadium}, ${manager}, ${yearFounded},${colour}`;

const aaabbbccc = someFunc1("Pep Guardiolla", "RedSocks", 1899, "Anfield");
console.log(aaabbbccc);
//==========================================================================
console.log(
	"==================================================================="
);

function childs(): void {
	console.log(2);
}
