let form = document.querySelector("form");
let titleInput = document.querySelector("#title");
let authorInput = document.querySelector("#author");
let pagesInput = document.querySelector("#pages");
let readStatus = document.querySelector("#read");

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
	let libraryTable = document.querySelector("tbody");
	libraryTable.textContent = "";
	for (let i = 0; i < myLibrary.length; i++) {
		let book = myLibrary[i];
		let tableRow = document.createElement("tr");
		let bookTitle = document.createElement("td");
		let bookAuthor = document.createElement("td");
		let bookPages = document.createElement("td");
		let bookRead = document.createElement("td");
		let checkbox = document.createElement("input");
		libraryTable.appendChild(tableRow);
		tableRow.appendChild(bookTitle);
		bookTitle.textContent = `${book.title}`;
		tableRow.appendChild(bookAuthor);
		bookAuthor.textContent = `${book.author}`;
		tableRow.appendChild(bookPages);
		bookPages.textContent = `${book.pages}`;
		tableRow.appendChild(bookRead);
		bookRead.appendChild(checkbox);
		checkbox.setAttribute("type", "checkbox");
		checkbox.checked = book.read;
	}
}

function resetForm() {
	titleInput.value = "";
	authorInput.value = "";
	pagesInput.value = "";
	readStatus.checked = false;
	form.style.display = "none";
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
	populateTable();
	resetForm();
});
