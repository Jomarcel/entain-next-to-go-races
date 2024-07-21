export const getPageIndices = (
  page: number,
  limit: number,
  totalItems: number,
) => {
  const totalPages = Math.ceil(totalItems / limit);
  const currentPage = Math.min(page, totalPages);

  const lastPageIndex = currentPage * limit;
  const firstPageIndex = lastPageIndex - limit;

  return {
    firstPageIndex: Math.max(firstPageIndex, 0),
    lastPageIndex: Math.min(lastPageIndex, totalItems),
  };
};
