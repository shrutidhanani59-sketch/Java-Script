var books = [];

document.querySelector('.add').onclick = function () {
    var book = {
        BookId: Number(prompt("Enter the Book ID : ")),
        BookName: prompt("Enter Book Name : "),
        AuthorName: prompt("Enter Book Author Name : "),
        Category: prompt("Enter Book Category : "),
        Quantity: Number(prompt("Enter Book Quentity : "))
    }
    books.push(book);
    console.log(books);
};

document.querySelector('.Display').onclick = function () {
    for (const element of books) {
        document.querySelector('div').innerHTML += `<h2>Book ID ${element.BookId}</h2>  <h2>${element.BookName}</h2> <h2>${element.AuthorName}</h2> <h2>${element.Category}</h2>  <h2>${element.Quantity}</h2> `;
    }
}

document.querySelector('.issue').onclick = function () {
    var name = prompt("Enter the book Name : ");
    for (const element of books) {
        if (element.BookName = name) {
            document.querySelector('div').innerHTML += `<h2>${element.BookId}</h2>  <h2>${element.BookName}</h2> <h2>${element.AuthorName}</h2> <h2>${element.Category}</h2>  <h2>${element.Quantity}</h2> `;

        }

        if(element.Quantity>0)
        {
            element.Quantity--;
        }
        else
        {
            console.log("Out of Stock");
            
        }
    }

} 

document.querySelector('.return').onclick = function ()
{

}