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

// function NameOfThisFunction(
// 	yearFounded,
// 	colour,
// 	manager = "Mister Nobodyyyyyeee"
// ) {
// 	return `${yearFounded}, ${colour}, ${manager}`;
// }

// const a = NameOfThisFunction(1899, "red");

// console.log(a);

const someFunc = (manager, colour, yearFounded, stadium) => {
	return `${stadium}, ${manager}, ${yearFounded},${colour}}`;
};

const aaabbbccc = someFunc("Pep Guardiolla", "RedSocks", 1899, "Anfield");
console.log(aaabbbccc);
