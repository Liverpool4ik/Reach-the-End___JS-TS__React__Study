//===================== 2222 //=================
// 1. Создать функцию х, у которой есть два параметра. Первый параметр name: string,
// второй параметр необязательный age: number. В теле функции по очереди выводим в консоль оба
// параметра. Вызываем функцию дважды, в первый раз передаем все аргументы, во второй только обязательные.
var x = function (name, age) {
    console.log(name);
    console.log(age);
};
x("Life_is_Life", 111);
x("no Lofe");
//===================== 2222 //=================
// 2. Создать функцию y, которая выводит в консоль единственный параметр и после возвращает его. Создаем
// переменную z и присваиваем ей результат выполнения функции y. Выводим в консоль переменную z.
var y = function (singleParam) {
    console.log(singleParam);
    return singleParam;
};
var z = y("Присвоили результат новой переменной---1111");
console.log(z);
//===================== 33333 //=================
// 3. Делаем пункт 1 и 2 с помощью написания двух вариантов создания функции. С помощью ключевого
// слова function и с помощью присваивания анонимной стрелочной функции. Типизируем функции.
var xx = function (name, age) {
    console.log(name);
    console.log(age);
};
xx("Life_is_Life", 111);
xx("no Lofe");
//=========================
var xXx = function (name, age) {
    console.log(name);
    console.log(age);
};
xXx("Life_is_Life", 111);
xXx("no Lofe");
//======================
var yy = function (singleParam) {
    console.log(singleParam);
    return singleParam;
};
var zz = yy("Присвоили результат новой переменной---1111");
console.log(zz);
//============
var yYy = function (singleParam1) {
    console.log(singleParam1);
    return singleParam1;
};
var zZz = yYy("Присвоили результат новой переменной-2222");
console.log(zz);
var list = {
    data: [1, 2, 3, 4, 5, 6],
    isOpen: true,
    setIsOpen: function (isOpen) {
        this.isOpen = isOpen;
    },
    getData: function (data) {
        return data;
    },
};
var user = {
    name: "strongMan",
    age: 99,
    sayHello: function (name) {
        console.log("Hello ".concat(name));
    },
    isAdult: function (age) {
        console.log("no");
        return false;
    },
};
var task = {
    id: "firstTask",
    filter: "frontEndTeam",
    isDone: true,
    seiIsDOne: function () {
        this.isDone = true;
    },
    setFilter: function (filter) {
        console.log(filter);
    },
};
