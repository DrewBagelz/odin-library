let form = document.querySelector("form");

const myLibrary = [];

function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
	let book = new Book(title, author, pages, read);
	myLibrary.push(book);
}

let newBookBtn = document.querySelector("#new-book");
newBookBtn.addEventListener("click", () => {
	form.style.display = "block";
});
