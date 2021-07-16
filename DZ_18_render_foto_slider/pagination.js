class Pagination {
  constructor(pageSize, listLenght, activePageNumber) {
    this.pageSize = pageSize; // количество элементов на странице
    this.listLenght = listLenght; // общее количество эллементов в массиве
    this.activePageNumber = activePageNumber; //значение или номер выбранной страницы
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
