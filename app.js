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
	let author = document.querySelector('.author-input').value.trim();
	let title = document.querySelector('.title-input').value.trim();
	let pages = document.querySelector('.page-input').value.trim();

	if (author && title && pages) {
		myLibrary.push(new Book(author, title, pages));

		libraryList.innerHTML += `
				<article>
				<p>Author: ${author}</p>
				<p>Title: ${title}</p>
				<p>Number of pages: ${pages}</p>
				<button class="remove-book">remove</button>
				</article>`;

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

function deleteBookFromLibrary(e) {
	let index = e.target.parentNode.getAttribute('data-index');
	myLibrary.splice(index, 1);
	e.target.parentNode.remove();
	console.log(myLibrary);

}

showBooksFromLibrary();

document.querySelector('.add-new').addEventListener('click', addBookToLibrary);