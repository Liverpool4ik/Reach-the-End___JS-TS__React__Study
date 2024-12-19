//===================== 2222 //=================
// 1. Создать функцию х, у которой есть два параметра. Первый параметр name: string,
// второй параметр необязательный age: number. В теле функции по очереди выводим в консоль оба
// параметра. Вызываем функцию дважды, в первый раз передаем все аргументы, во второй только обязательные.

const x = (name: string, age?: number) => {
	console.log(name);
	console.log(age);
};

x("Life_is_Life", 111);

x("no Lofe");

//===================== 2222 //=================

// 2. Создать функцию y, которая выводит в консоль единственный параметр и после возвращает его. Создаем
// переменную z и присваиваем ей результат выполнения функции y. Выводим в консоль переменную z.

const y = (singleParam: any): any => {
	console.log(singleParam);
	return singleParam;
};

const z = y("Присвоили результат новой переменной---1111");

console.log(z);

//===================== 33333 //=================

// 3. Делаем пункт 1 и 2 с помощью написания двух вариантов создания функции. С помощью ключевого
// слова function и с помощью присваивания анонимной стрелочной функции. Типизируем функции.

const xx = (name: string, age?: number) => {
	console.log(name);
	console.log(age);
};

xx("Life_is_Life", 111);

xx("no Lofe");

//=========================

let xXx = function (name: string, age?: number): void {
	console.log(name);
	console.log(age);
};

xXx("Life_is_Life", 111);

xXx("no Lofe");

//======================

const yy = (singleParam: any): any => {
	console.log(singleParam);
	return singleParam;
};

const zz = yy("Присвоили результат новой переменной---1111");

console.log(zz);

//============
const yYy = function (singleParam1: any): any {
	console.log(singleParam1);
	return singleParam1;
};

const zZz = yYy("Присвоили результат новой переменной-2222");

console.log(zz);
//===================== 444 //=================
// 4. Необходимо реализовать объекты в соответствие с описанными типами и интерфейсами:

interface IList {
	data: number[];
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
	getData: (data: number[]) => number[];
}

const list: IList = {
	data: [1, 2, 3, 4, 5, 6],
	isOpen: true,
	setIsOpen(isOpen: boolean) {
		this.isOpen = isOpen;
	},
	getData(data: number[]) {
		return data;
	},
};
//====================

interface IUser {
	name: string;
	age: number;
	sayHello: (name: string) => void;
	isAdult: (age: number) => boolean;
}

const user: IUser = {
	name: "strongMan",
	age: 99,
	sayHello(name: string) {
		console.log(`Hello ${name}`);
	},
	isAdult(age: number) {
		console.log("no");
		return false;
	},
};

//===========================
type TaskType = {
	id: string;
	filter: string;
	isDone: boolean;
	seiIsDOne: () => void;
	setFilter: (filter: string) => void;
};

const task: TaskType = {
	id: "firstTask",
	filter: "frontEndTeam",
	isDone: true,
	seiIsDOne() {
		this.isDone = true;
	},
	setFilter(filter: string) {
		console.log(filter);
	},
};
