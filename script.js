const form = document.querySelector("dialog");
const table = document.querySelector("table");
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const readStatus = document.querySelector("#read");
const newBookBtn = document.querySelector("#new-book");
const submitBtn = document.querySelector("#submit");
const cancelBtn = document.querySelector("#cancel");

const myLibrary = [];

function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
}

Book.prototype.toggleRead = function () {
	this.read = !this.read;
};

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
		const removeBook = document.createElement("td");
		const removeBtn = document.createElement("button");
		libraryTable.appendChild(tableRow);
		tableRow.appendChild(bookTitle);
		bookTitle.textContent = `${book.title}`;
		tableRow.appendChild(bookAuthor);
		bookAuthor.textContent = `${book.author}`;
		tableRow.appendChild(bookPages);
		bookPages.classList.add("center-td");
		bookPages.textContent = `${book.pages}`;
		tableRow.appendChild(bookRead);
		bookRead.classList.add("center-td");
		bookRead.appendChild(checkbox);
		checkbox.setAttribute("type", "checkbox");
		checkbox.checked = book.read;
		checkbox.addEventListener("change", () => {
			book.toggleRead();
		});
		tableRow.appendChild(removeBook);
		removeBook.classList.add("remove-cell");
		removeBook.appendChild(removeBtn);
		removeBtn.textContent = "X";
		removeBtn.addEventListener("click", () => {
			removeFromLibrary(book);
		});
	}
}

function removeFromLibrary(index) {
	myLibrary.splice(index, 1);
	populateTable();
	hideTable();
}

function resetForm() {
	titleInput.value = "";
	authorInput.value = "";
	pagesInput.value = "";
	readStatus.checked = false;
	form.close();
}

function hideTable() {
	if (myLibrary.length === 0) {
		table.classList.add("hide-table");
	} else if (myLibrary.length > 0) {
		table.classList.remove("hide-table");
	}
}

newBookBtn.addEventListener("click", () => {
	form.showModal();
});

submitBtn.addEventListener("click", (e) => {
	e.preventDefault();
	let title = titleInput.value;
	let author = authorInput.value;
	let pages = pagesInput.value;
	let read = readStatus.checked;
	addBookToLibrary(title, author, pages, read);
	populateTable();
	hideTable();
	resetForm();
});

cancelBtn.addEventListener("click", (e) => {
	e.preventDefault();
	resetForm();
});

hideTable();
