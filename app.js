let libraryList = document.querySelector('.library-list');

let myLibrary = [
		new Book("James Clear", "Atomic Habits: Tiny Changes, Remarkable Results", 285),	
		new Book("Cal Newport", "Deep Work: Rules for Focused Success in a Distracted World",190),
		new Book("Timothy Ferriss", "The 4-Hour Workweek: Escape 9-5, Live Anywhere, and Join the New Rich", 416),
		new Book("Carol S. Dweck", "Mindset: Changing The Way You think To Fulfill Your Potential", 292)
];

function Book(author, title, numberOfPages) {
	this.author = author
	this.title = title;
	this.numberOfPages = numberOfPages;
}

function addBookToLibrary(e) {
	e.preventDefault();
	let author = document.querySelector('.author-input');
	let title = document.querySelector('.title-input');
	let pages = document.querySelector('.page-input');

	if (author.value.length && title.value.length && pages.value.length) {
		myLibrary.push(new Book(author, title, pages));

		if (myLibrary.length == 1) {
			
			libraryList.innerHTML = `
					<article>
					<p>Author: ${author.value}</p>
					<p>Title: ${title.value}</p>
					<p>Number of pages: ${pages.value}</p>
					<button class="remove-book">remove</button>
					</article>`;			
		} else {

			libraryList.innerHTML += `
					<article>
					<p>Author: ${author.value}</p>
					<p>Title: ${title.value}</p>
					<p>Number of pages: ${pages.value}</p>
					<button class="remove-book">remove</button>
					</article>`;
		}

		author.value = "";
		title.value = "";
		pages.value = "";
	}

	document.querySelectorAll('.remove-book').forEach(book => {
		book.addEventListener('click', deleteBookFromLibrary)
	});
}

function showBooksFromLibrary() {

	let listbooks ="";

	myLibrary.forEach( book => {
		

		listbooks += `
				<article>
				<p>Author: ${book.author}</p>
				<p>Title: ${book.title}</p>
				<p>Number of pages: ${book.numberOfPages}</p>
				<button class="remove-book">remove</button>
				</article>`;

	});

	libraryList.innerHTML = listbooks;
	document.querySelectorAll('.remove-book').forEach(book => {
		book.addEventListener('click', deleteBookFromLibrary)
	}
);
}

function hasBooks() {
	return myLibrary.length > 0;
}

function deleteBookFromLibrary(e) {
	let index = e.target.parentNode.getAttribute('data-index');
	myLibrary.splice(index, 1);
	e.target.parentNode.remove();
	console.log(myLibrary);

	if (!hasBooks()) {
		libraryList.innerHTML = "<p>There aren't any books in the library.</p>"
	}

}

showBooksFromLibrary();

document.querySelector('.add-new').addEventListener('click', addBookToLibrary);