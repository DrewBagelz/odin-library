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

function populateTable() {
	for (let i = 0; i < myLibrary.length; i++) {}
}

let newBookBtn = document.querySelector("#new-book");
newBookBtn.addEventListener("click", () => {
	form.style.display = "block";
});

let submitBtn = document.querySelector("#submit");
submitBtn.addEventListener("click", (e) => {
	e.preventDefault();
	let title = document.querySelector("#title").value;
	let author = document.querySelector("#author").value;
	let pages = document.querySelector("#pages").value;
	let read = document.querySelector("#read").checked;
	addBookToLibrary(title, author, pages, read);
	console.log(myLibrary);
});
