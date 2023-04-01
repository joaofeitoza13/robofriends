export const PaginationButton = ({
  currentPage,
  isFirstPage,
  prevPage,
  nextPage,
  button,
  children,
}) => {
  return button === 'prev' ? (
    <button
      className={isFirstPage(currentPage)}
      onClick={() => prevPage()}
      onKeyDown={(event) => (event.key == 37 ? prevPage() : null)}
    >
      Prev
    </button>
  ) : (
    <button
      className="next"
      onClick={() => nextPage()}
      onKeyDown={(event) => (event.key == 39 ? nextPage() : null)}
    >
      {children}
    </button>
  )
}
