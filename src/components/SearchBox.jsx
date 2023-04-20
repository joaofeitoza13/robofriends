export const SearchBox = ({ searchChange }) => {
  return (
    <div id="search-box">
      <input
        id="input"
        className="tc"
        type="search"
        placeholder="enter robot name"
        onChange={searchChange}
      />
    </div>
  )
}
