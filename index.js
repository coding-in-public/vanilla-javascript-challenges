const peeps = [
	{
		name: "Chris",
		isBlonde: false,
		age: 23,
		favoriteNumbers: [0, 4, 6],
	},
	{
		name: "Carol",
		isBlonde: true,
		favoriteNumbers: [12, 19],
	},
	{
		name: "Nicole",
		age: 15,
		favoriteNumbers: [4, 9],
	},
];

// 1. Write your own custom filter method.
//
// Longer description: Write a higher order function returns a new array from the `peeps` array, but only those who meet your condition. You may not use the built-in `filter` method. Abstract the function to work with any array and condition.

function myFilter(arr, filterFn) {
	let newArray = [];
	for (const item of arr) {
		if (filterFn(item)) {
			newArray.push(item);
		}
	}
	return newArray;
}

const withAges = myFilter(peeps, (p) => p.age);

// 2. Write your own custom map method.
//
// Longer description: Write a higher order function returns a new array from the `peeps` array. You may not use the built-in `map` method. Abstract the function to work with any array and condition.

function myMap(arr, mapperFn) {
	let newArray = [];
	for (const item of arr) {
		newArray.push(mapperFn(item));
	}
	return newArray;
}

const withCapNames = myMap(peeps, (p) => p.name.toUpperCase());

// 3. Write your own custom reduce method.
//
// Longer description: Write a higher order function returns a single value from the `peeps` array. You may not use the built-in `reduce` method. Abstract the function to work with any array, condition, and original/return value.
// Bonus: can you add up all numbers in favorite arrays?

function myReduce(arr, reducerFn, initialValue) {
	let start = initialValue;
	for (const item of arr) {
		start = reducerFn(start, item);
	}
	return start;
}

// const totalAges = myReduce(peeps, (acc, p) => acc + (p?.age ?? 0), 0);
const totalFavs = myReduce(
	peeps,
	(acc, p) =>
		acc + myReduce(p.favoriteNumbers, (innerAcc, num) => innerAcc + num, 0),
	0,
);
// console.log("🚀 ~ totalFavs:", totalFavs);

// 4. Write your own custom find method.
//
// Longer description: Write a higher order function that returns the first instance of your array that matches your query. You may not use the built-in `find` method. Abstract the function to work with any array and condition.

function myFind(arr, findFn) {
	for (const item of arr) {
		if (findFn(item)) {
			return item;
		}
	}
	return undefined;
}

const first23 = myFind(peeps, (p) => p.age === 23);

// 5. Write your own game score tracker that returns a function to track a game's score. Create a few games and track their scores.

function createScoredGame() {
	let score = 0;
	return (changedScore = 0) => {
		score += changedScore;
		return score;
	};
}

const soccerGame = createScoredGame();
const footballGame = createScoredGame();

console.log("🚀 ~ soccerGame:", soccerGame());
soccerGame(2);
console.log("🚀 ~ soccerGame:", soccerGame());

console.log("🚀 ~ footballGame:", footballGame());
footballGame(3);
console.log("🚀 ~ footballGame:", footballGame());
footballGame(5);
console.log("🚀 ~ footballGame:", footballGame());
