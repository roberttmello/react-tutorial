import "./Book.css";

const Book = ({imageURL, title, author, price}) => {
  return (
    <article className="book">
      <img src={imageURL} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <span>{price}</span>
    </article>
  );
};

export default Book;
