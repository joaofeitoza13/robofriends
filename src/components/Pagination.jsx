import { PaginationButton } from './PaginationButton'

export function Pagination({ currentPage, setCurrentPage }) {
  const prevPage = () =>
    currentPage >= 1 ? setCurrentPage(currentPage - 1) : null

  const nextPage = () => setCurrentPage(currentPage + 1)

  const navigateToPage = (page) =>
    page > 0 ? setCurrentPage(page) : setCurrentPage(currentPage)

  const isFirstPage = (page) => (page === 1 ? 'prev disabled' : 'prev')

  return (
    <div id="pagination">
      <PaginationButton
        id="pagination"
        currentPage={currentPage}
        prevPage={prevPage}
        isFirstPage={isFirstPage}
        button={'prev'}
      >
        Prev
      </PaginationButton>
      <input
        className="tc f3 black"
        placeholder={`${currentPage}`}
        onChange={(e) => navigateToPage(Number(e.target.value))}
      />
      <PaginationButton id="pagination" nextPage={nextPage} button={'next'}>
        Next
      </PaginationButton>
    </div>
  )
}
