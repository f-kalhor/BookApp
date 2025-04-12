import { useState } from "react";

import { books as booksData} from "../constants/mockData.js";
import BookCard from "./BookCard.jsx";
import SideCard from "./SideCard.jsx";
import styles from "./Book.module.css";
import Search from "./Search.jsx";
function Books() {
  const [books ,setBooks]=useState(booksData)
  const [liked, setLiked] = useState([]);
  const [search ,setSearch]=useState([]);

  const likedBooksHandler = (book, status) => {
    console.log(book, status);
    if (status) {
      //unlike a book
      const newLikedList = liked.filter((i) => i.id !== book.id);
      setLiked(newLikedList);
    } else {
      //like a book
      setLiked((liked) => [...liked, book]);
    }
  };
  const searchHandler =()=>{
    if(search){
      const newBooks =booksData.filter((book) => book.title.toLowerCase().includes(search))
      setBooks(newBooks)
    }else{
      setBooks(booksData)
    }

  }
  return (
    <>
      <Search search={search} setSearch={setSearch} searchHandler={searchHandler}/>
      <div className={styles.container}>
        <div className={styles.cards}>
          {books.map((book) => (
            <BookCard
              key={book.id}
              data={book}
              likedBooksHandler={likedBooksHandler}
            />
          ))}
        </div>
        <div className={styles.favorite}>
          <h4>Favorite</h4>
          {!!liked.length && (
            <div>
              {liked.map((book) => (
                <SideCard key={book.id} data={book} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Books;
