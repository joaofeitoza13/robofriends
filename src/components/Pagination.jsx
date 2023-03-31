export function Pagination({ currentPage, setCurrentPage }) {
  const prevPage = () =>
    currentPage >= 1 ? setCurrentPage(currentPage - 1) : null

  const nextPage = () => setCurrentPage(currentPage + 1)

  const navigateToPage = (page) =>
    page > 0 ? setCurrentPage(page) : setCurrentPage(currentPage)

  return (
    <div id="pagination">
      <button
        className={currentPage === 1 ? 'prev disabled' : 'prev'}
        onClick={() => prevPage()}
        onKeyDown={(event) => (event.key == 37 ? prevPage() : null)}
      >
        Prev
      </button>
      <input
        className="tc f3 black"
        placeholder={`${currentPage}`}
        onChange={(e) => navigateToPage(Number(e.target.value))}
      />
      <button
        className="next"
        onClick={() => nextPage()}
        onKeyDown={(event) => (event.key == 39 ? nextPage() : null)}
      >
        Next
      </button>
    </div>
  )
}
