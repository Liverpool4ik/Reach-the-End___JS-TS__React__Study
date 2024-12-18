// interface IChildren {
// 	name: string;
// 	surName: string;
// 	birth: number;
// 	goal: number;
// 	goals: () => void;
// 	footballFriends: {
// 		name: string;
// 	};
// 	teamPlayed: any[];
// }

// const children: IChildren = {
// 	name: "George",
// 	surName: "Alekseichyk",
// 	birth: 2017,
// 	goal: 10,
// 	goals() {
// 		console.log(`The BEST player of this Tournment is ${this.name}`);
// 	},

// 	footballFriends: {
// 		name: "Олег",
// 	},

// 	teamPlayed: ["ДЮСШ-4", "Мастер мяча", "Spartak"],
// };

// console.log(children.goals());

//======================================================== second Method ==============

type playersType = {
	name: string;
	surName: string;
	birth: number;
	goal: number;
	goals: () => void;
	footballFriens: {
		name: string;
	};
	teamPlayed: any[];
};

const players = {
	name: "George",
	surName: "Alekseichyk",
	birth: 2017,
	goal: 10,
	goals() {
		console.log(`The BEST player of this Tournment is ${this.name}`);
	},

	footballFriends: {
		name: "Олег",
	},

	teamPlayed: ["ДЮСШ-4", "Мастер мяча", "Spartak"],
};

console.log(players.goals());
