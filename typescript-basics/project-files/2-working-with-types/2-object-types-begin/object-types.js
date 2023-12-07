"use strict";
let game = {
    title: "Super Marios Sunshing",
    genres: ['platformer', 'adventure'],
    price: 35
};
console.log(game.price);
let gameTwo = {
    title: "Super Marios Sunshing",
    genres: ['platformer', 'adventure'],
};
let games = [game, gameTwo];
games.forEach(game => console.log((game.price ?? 0) * 100));
games.forEach(game => console.log((game.price?.toString())));
