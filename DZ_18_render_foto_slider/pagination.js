class Pagination {
  constructor(pageSize, listLenght, activePageNumber) {
    this.pageSize = pageSize;
    this.listLenght = listLenght;
    this.activePageNumber = activePageNumber;
  }
  getPagesNumber() {
    return Math.ceil(this.listLenght / this.pageSize);
  }
  getPageSize() {
    return this.pageSize;
  }

  getActivePageNumber() {
    return this.activePageNumber;
  }

  setActivePageNumber(activePageNumber) {
    this.activePageNumber = activePageNumber;
  }
}
