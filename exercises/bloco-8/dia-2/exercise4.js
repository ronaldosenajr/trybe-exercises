const assert = require('assert');

const books = [
	{
		id: 1,
		name: 'As Crônicas de Gelo e Fogo',
		genre: 'Fantasia',
		author: {
			name: 'George R. R. Martin',
			birthYear: 1948,
		},
		releaseYear: 1991,
	},
	{
		id: 2,
		name: 'O Senhor dos Anéis',
		genre: 'Fantasia',
		author: {
			name: 'J. R. R. Tolkien',
			birthYear: 1892,
		},
		releaseYear: 1954,
	},
	{
		id: 3,
		name: 'Fundação',
		genre: 'Ficção Científica',
		author: {
			name: 'Isaac Asimov',
			birthYear: 1920,
		},
		releaseYear: 1951,
	},
	{
		id: 4,
		name: 'Duna',
		genre: 'Ficção Científica',
		author: {
			name: 'Frank Herbert',
			birthYear: 1920,
		},
		releaseYear: 1965,
	},
	{
		id: 5,
		name: 'A Coisa',
		genre: 'Terror',
		author: {
			name: 'Stephen King',
			birthYear: 1947,
		},
		releaseYear: 1986,
	},
	{
		id: 6,
		name: 'O Chamado de Cthulhu',
		genre: 'Terror',
		author: {
			name: 'H. P. Lovecraft',
			birthYear: 1890,
		},
		releaseYear: 1928,
	},
];

const expectedResult = [
	{
		id: 1,
		name: 'As Crônicas de Gelo e Fogo',
		genre: 'Fantasia',
		author: { name: 'George R. R. Martin', birthYear: 1948 },
		releaseYear: 1991,
	},
	{
		id: 5,
		name: 'A Coisa',
		genre: 'Terror',
		author: { name: 'Stephen King', birthYear: 1947 },
		releaseYear: 1986,
	},
	{
		id: 4,
		name: 'Duna',
		genre: 'Ficção Científica',
		author: { name: 'Frank Herbert', birthYear: 1920 },
		releaseYear: 1965,
	},
	{
		id: 2,
		name: 'O Senhor dos Anéis',
		genre: 'Fantasia',
		author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
		releaseYear: 1954,
	},
	{
		id: 3,
		name: 'Fundação',
		genre: 'Ficção Científica',
		author: { name: 'Isaac Asimov', birthYear: 1920 },
		releaseYear: 1951,
	},
	{
		id: 6,
		name: 'O Chamado de Cthulhu',
		genre: 'Terror',
		author: { name: 'H. P. Lovecraft', birthYear: 1890 },
		releaseYear: 1928,
	},
];

//Ex 4.
function booksOrderedByReleaseYearDesc() {
	return books.sort((a, b) => b.releaseYear - a.releaseYear);
}

assert.deepStrictEqual(booksOrderedByReleaseYearDesc(), expectedResult);

//Ex 5.
const expectedResult2 = false;

function everyoneWasBornOnSecXX() {
	return books.every((book) => book.author.birthYear >= 1901 && book.author.birthYear <= 2000);
}

assert.strictEqual(everyoneWasBornOnSecXX(), expectedResult2);

//Ex 6.
const expectedResult3 = true;

function someBookWasReleaseOnThe80s() {
	return books.some((book) => book.releaseYear >= 1980 && book.releaseYear < 1990);
}

assert.strictEqual(someBookWasReleaseOnThe80s(), expectedResult3);

const expectedResult4 = false;

function authorUnique() {
	return books.every((book) =>
		!books.some((bookSome) =>
			(bookSome.author.birthYear === book.author.birthYear)
			&& (bookSome.author.name !== book.author.name)));
}

assert.strictEqual(authorUnique(), expectedResult4);