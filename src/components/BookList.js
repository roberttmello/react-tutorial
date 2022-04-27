import Book from "./Book";
import "./BookList.css";

import books from "../books";

const BookList = () => {
  return (
    <section className="booklist">
     {
       books.map((book)=>(
         <Book key={book.id} {...book} />
       ))
     }
    </section>
  );
};

export default BookList;
