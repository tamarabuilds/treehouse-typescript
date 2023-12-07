"use strict";
const book1 = {
    title: "Atlas Shrugged",
    author: "Ayan Rand",
};
console.log(book1);
const book2 = {
    title: '1985',
    author: 'George Orwell',
    genres: ['sci-fi', 'dystopian'],
    eBook: false,
    readingAge: 18,
};
const book3 = {
    title: 'Harry Potter',
    author: 'J K Rowling',
    genres: ['fantasy', 'high fantasy'],
    eBook: true,
    readingAge: 11,
};
const books = {
    read: [book2],
    notRead: [book3],
    wantToRead: [book1]
};
