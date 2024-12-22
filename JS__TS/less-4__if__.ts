let myMoney = 9000;

let trainingCost = 1500;

if (myMoney < trainingCost) {
	console.log("Твоей з.п. Хватит на оплату тренировки");
} else if (myMoney === trainingCost) {
	console.log("Ого... эта тренировка многим не по зубам");
} else {
	console.log("else");
}

///======== ПРОВЕРКА ЧЁТНОЕ ЛИ ЧИСЛО ИЛИ НЕТ

let a = 99;
let b = 2;
let c = a % b;
if (c === 0) {
	console.log("значит наша перемення - чётное число");
} else {
	console.log("наша переменная - НЕчётная!!!!");
}
//================================
for (let i = 1; i < 5; i++) {
	debugger;
	console.log(i);
}

//==========================

const clubs = [
	"Liverpool",
	"Man Utd",
	"Chelsea",
	"Bolton",
	"Stoke City",
	"Northampton",
];

for (let i = 0; i < clubs.length; i++) {
	console.log(`Your best clubs in all leagues ARE ==>> ${clubs[i]}`);
	console.log(clubs[i]);
}
