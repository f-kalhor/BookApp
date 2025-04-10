import { useState } from "react";
import { books } from "../constants/mockData.js";
import BookCard from "./BookCard.jsx";
function Books() {
  const [liked, setLiked] = useState([]);

  const likedBooksHandler = (book, status) => {
    console.log(book, status);
    if (status) {    //unlike a book 
      const newLikedList = liked.filter((i) => i.id !== book.id);
      setLiked(newLikedList);
    }else{            //like a book
      setLiked(liked=> [...liked , book])
    }
    console.log("liked:" , liked);
    
  };
  return (
    <>
      <div>
        {books.map((book) => (
          <BookCard
            key={book.id}
            data={book}
            likedBooksHandler={likedBooksHandler}
          />
        ))}
      </div>
      <div></div>
    </>
  );
}

export default Books;
