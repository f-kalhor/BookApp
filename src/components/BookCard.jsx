import { FaHeart } from "react-icons/fa";
import styles from "./BookCard.module.css";
import { useState } from "react";

function BookCard({ data, likedBooksHandler}) {

  const [like, setLike] = useState(false);
  const { title, author, image, language, pages} = data;

  const likeHandler = () => {
    likedBooksHandler(data ,like)
    setLike((like) => !like);
  };
  return (
    <>
      <div className={styles.card}>
        <img src={image} alt={title} />
        <div className={styles.info}>
          <h3>{title}</h3>
          <p>{author}</p>
          <div>
            <span>{language}</span>
            <span>{pages}</span>
          </div>
        </div>
        <button onClick={likeHandler}>
          <FaHeart fontSize="1.5rem" color={like ? "red" : "#e0e0e0"} />
        </button>
      </div>
    </>
  );
}

export default BookCard;
