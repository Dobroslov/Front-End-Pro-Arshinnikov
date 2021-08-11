class ControllerPhotoList {
  constructor($albums, $photos) {
    this.initCollection();
    this.initView($albums, $photos);
  }

  initCollection() {
    this.collectionPhotoList = new CollectionPhotoList(ALBUMS_URL, PHOTOS_URL);

    this.collectionPhotoList.getAlbums().then(() => this.renderAlbumsList(this.collectionPhotoList.albumsList));
  }

  initView($albums, $photos) {
    this.ViewPhotoList = new ViewPhotoList($albums, $photos);
  }
}
