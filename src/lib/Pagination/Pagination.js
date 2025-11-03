class Pagination {
  static getFirstPage(hyper) {
    return 1;
  }

  static getPrevPage(hyper, n) {
    if ("currentPage" in hyper) {
      let {currentPage} = hyper
      if (Number.isInteger(n) && n > 0) {
        return Math.max(currentPage - n, 1)
      } else {
        return Math.max(currentPage - 1, 1)
      }
    }
    return 1;
  }

  static getNextPage(hyper, n) {
    if (["currentPage", "totalPages"].every(key => key in hyper)) {
      let {currentPage, totalPages} = hyper
      if (Number.isInteger(n) && n > 0) {
        return Math.min(currentPage + n, totalPages)
      } else {
        return Math.min(currentPage + 1, totalPages)
      }
    }
    return 1;
  }

  static getLastPage(hyper) {
    if ("totalPages" in hyper) {
      let { totalPages } = hyper
      return totalPages;
    } else {
      return 1;
    }
  }

  static constructPages(hyper, resultLength = 5) {
    if (["currentPage", "totalPages"].every(key => key in hyper)) {
      let {currentPage, totalPages} = hyper;
      let offset = Math.min(totalPages - (resultLength - 1), Math.max(currentPage - Math.floor((resultLength - 1) / 2), 1));
      return [...Array(resultLength).keys()]
        .map(x => x + offset)
        .filter(x => x > 0)
      ;
    }
    return []
  }
}

export default Pagination
