class ViewPhotoList {
  constructor($albums, $photos) {
    this._albumsListConatiner = $albums;
    this._photosListContainer = $photos;

    this.initView();
  }

  initView() {
    renderData();
  }

  renderData() {
    const pagination = getPaginationObj(arr);
    renderPagination(pagination);
    renderPhotosOnPage(arrPhotos);
  }
  renderPagination() {
    for (let index = 0; index < numberOfPages; index++) {
      _albumsListConatiner.append(getPaginationItemHtml(index + 1));
    }
  }

  getPaginationItemHtml(index) {
  return '<li class="page">{{number}}</li>'.replace('{{number}}', index); 

  getPaginationObj() {}
}
