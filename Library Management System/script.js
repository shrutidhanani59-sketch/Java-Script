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
        document.querySelector('div').innerHTML += `<h2>Book ID : ${element.BookId}</h2>  <h2>Book Name :  ${element.BookName}</h2> <h2> Book Author Name : ${element.AuthorName}</h2> <h2> Book Category : ${element.Category}</h2>  <h2> Book Quantity :${element.Quantity}</h2> `;
    }

  
}

document.querySelector('.issue').onclick = function () {
    var name = prompt("Enter the book Name : ");
    var bool = false
    for (const element of books) {
        if (element.BookName === name) 
        {
            if(element.Quantity > 0)
            {
                element.Quantity--;
            document.querySelector('div').innerHTML += `<h2>Book ID : ${element.BookId}</h2>  <h2>Book Name :  ${element.BookName}</h2> <h2> Book Author Name : ${element.AuthorName}</h2> <h2> Book Category : ${element.Category}</h2>  <h2> Book Quantity :${element.Quantity}</h2> `;
                bool= true;
            }
            else
            {
                alert("Out of stock");
            }
            break;
        }
    }
    
    if(!bool)
    {
        alert("Book is not avable");
    }
}


document.querySelector('.return').onclick = function () {
    var name = prompt("Enter the book Name : ");
    var bool = false    
    for (const element of books) {
        if (element.BookName === name) {
            element.Quantity++;

            document.querySelector('div').innerHTML += `<h2>Book ID : ${element.BookId}</h2>  <h2>Book Name :  ${element.BookName}</h2> <h2> Book Author Name : ${element.AuthorName}</h2> <h2> Book Category : ${element.Category}</h2>  <h2> Book Quantity :${element.Quantity}</h2> `;
            bool=true;

        }

    }
    if(!bool)
    {
        alert("Book is not avable");
    }
}

document.querySelector('.delet').onclick = function ()
{
   var deletname = prompt("Enter the book name you went to delet");
    var bool = false    
   
    for (let i = 0; i < books.length; i++) {
        if (books[i].BookName === deletname) {
           books.splice(i,1);
            document.querySelector('div').innerHTML += `<h2>Book ID : ${element.BookId}</h2>  <h2>Book Name :  ${element.BookName}</h2> <h2> Book Author Name : ${element.AuthorName}</h2> <h2> Book Category : ${element.Category}</h2>  <h2> Book Quantity :${element.Quantity}</h2> `;
            bool=true;
        }

    }
   if(!bool)
    {
        alert("Book is not avable");
    }
}
document.querySelector('.status').onclick = function()
{
    var bookstatus = prompt("Enter Book Name");
    var bool = false    

    for (const element of books) 
    {
        if(element.BookName === bookstatus)
        {
           alert("Book is Available");
           bool=true;
            
        }
        else
        {
            alert("Out of stock");
        }
        break;
    }
 if(!bool)
    {
        alert("Book is not avable");
    }
}

document.querySelector('.total').onclick = function () {

     alert("Total Books : " + books.length);

}