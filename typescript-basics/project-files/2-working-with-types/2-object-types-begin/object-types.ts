type Game = {
    title: string;
    genres: string[];
    price?: number;
};

let game: Game = {
    title: "Super Marios Sunshing",
    genres: ['platformer', 'adventure'],
    price: 35
}

console.log(game.price);


let gameTwo: Game = {
    title: "Super Marios Sunshing",
    genres: ['platformer', 'adventure'],
}

let games: Game[] = [game, gameTwo];

games.forEach( game => console.log((game.price ?? 0) * 100));
games.forEach( game => console.log((game.price?.toString())));
