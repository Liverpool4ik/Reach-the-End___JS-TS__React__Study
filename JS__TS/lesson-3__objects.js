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
var children = {
    name: "George",
    surName: "Alekseichyk",
    birth: 2017,
    goal: 10,
    goals: function () {
        console.log("The BEST player of this Tournment is ".concat(this.name));
    },
    footballFriends: {
        name: "Олег",
    },
    teamPlayed: ["ДЮСШ-4", "Мастер мяча", "Spartak"],
};
console.log(children.goals());