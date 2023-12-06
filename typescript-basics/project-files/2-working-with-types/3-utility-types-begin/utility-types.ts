type Book = {
    title: string;
    author: string;
    genres: string[];
    eBook: boolean;
    readingAge?: number;
};

const book1: Partial<Book> = {
    title: "Atlas Shrugged",
    author: "Ayan Rand",
};

console.log(book1);

const book2: Required<Book> = {
    title: '1985',
    author: 'George Orwell',
    genres: ['sci-fi', 'dystopian'],
    eBook: false,
    readingAge: 18,
}

const book3: Readonly<Book> = {
    title: 'Harry Potter',
    author: 'J K Rowling',
    genres: ['fantasy', 'high fantasy'],
    eBook: true,
    readingAge: 11,
}

type Books = {
    read: Book[],
    notRead: Book[]
}

const books = {
    read: [book2],
    notRead: [book3],
    wantToRead: [book1]
}