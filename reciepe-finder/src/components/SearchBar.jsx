import React,{useState} from 'react'
import "./styles/Searchbar.css"
const SearchBar = ({onSearch,onClear}) => {
    const [query,setQuery]=useState("")
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(query.trim()==="") return

        onSearch(query);
    }
    const handleClear=()=>{
        setQuery("")
        onClear()

    }
  return (
    <form onSubmit={handleSubmit} className="search-bar">
  <div className="input-wrapper">
    <input
      className="input"
      type="text"
      placeholder="Search for a recipe..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />

    {query && (
      <button
        type="button"
        className="clear-btn"
        onClick={handleClear}
      >
        ✕
      </button>
    )}
  </div>

  <button className="btn1" type="submit">
    Search
  </button>
</form>
  )
}

export default SearchBar