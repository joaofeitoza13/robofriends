const SearchBox = ({ searchChange }) => {
  return (
    <div>
      <input
        id="searchBox"
        className="tc"
        type="search"
        placeholder="search robots"
        onChange={searchChange}
      />
    </div>
  )
}

export default SearchBox
