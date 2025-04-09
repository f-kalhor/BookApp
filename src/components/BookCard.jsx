import React, { useState } from 'react'
import { FaHeart } from "react-icons/fa";
import styles from "./BookCard.module.css"

function BookCard({data:{title,author,image,language,pages}}) {

    const[like,setLike]=useState(false)

    const likeHandler=()=>{
        setLike((like)=> !like)
    }
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
                <FaHeart fontSize="1.5rem" color={like?"red" :"#e0e0e0"}/>
            </button>
        </div>
    </>
  )
}

export default BookCard
