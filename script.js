const form = document.querySelector("form");
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const readStatus = document.querySelector("#read");
const newBookBtn = document.querySelector("#new-book");
const submitBtn = document.querySelector("#submit");

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
		const tableRow = document.createElement("tr");
		const bookTitle = document.createElement("td");
		const bookAuthor = document.createElement("td");
		const bookPages = document.createElement("td");
		const bookRead = document.createElement("td");
		const checkbox = document.createElement("input");
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
newBookBtn.addEventListener("click", () => {
	form.style.display = "block";
});

submitBtn.addEventListener("click", (e) => {
	e.preventDefault();
	let title = titleInput.value;
	let author = authorInput.value;
	let pages = pagesInput.value;
	let read = readStatus.checked;
	addBookToLibrary(title, author, pages, read);
	populateTable();
	resetForm();
});
