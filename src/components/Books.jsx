import React from 'react'
import {books} from "../constants/mockData.js"
import BookCard from './BookCard.jsx';
function Books() {
    
  return (
    <>
        {books.map((book)=>(
            <BookCard  key={book.id} data={book}/>
        ))}
    </>
  )
}

export default Books
