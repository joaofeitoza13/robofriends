const SearchBox = ({ searchChange }) => {
  return (
    <div>
      <input
        id="search-box"
        className="tc"
        type="search"
        placeholder="enter robot name"
        onChange={searchChange}
      />
    </div>
  )
}

export default SearchBox
