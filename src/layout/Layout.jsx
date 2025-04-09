import React from 'react'
import styles from "./Layout.module.css"
function Layout({children}) {
  return (
    <>
        <header className={styles.header}>
            <h1>Book App</h1>
            <p>
                <a href="#">Botostart</a>|React Course Practice
            </p>
        </header>
            {children}
        <footer className={styles.footer}>developed by smile :)</footer>
    </>
  )
}

export default Layout
