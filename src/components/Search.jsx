import { IoMdSearch } from "react-icons/io";

import styles from "./Search.module.css"

function Search({search,setSearch,searchHandler}) {
 
  return (
    <div className={styles.search}>
      <input type="text" placeholder='search books' value={search} onChange={e => setSearch(e.target.value.toLocaleLowerCase())}/>
      <button onClick={searchHandler}><IoMdSearch/></button>
      {console.log(search)
      }
    </div>
  )
}

export default Search
