import Image from "./Image";
import Title from "./Title";
import Author from "./Author";
import Price from "./Price";

import "./Book.css";

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
      <Price />
    </article>
  );
};

export default Book;
