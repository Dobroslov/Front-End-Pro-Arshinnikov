class ControllerPhotoList {
  constructor(albumsList, photosList, config) {
    this.albumsList = albumsList;
    this.photosList = photosList;
    this.albums = [];
    this.albumsListView = new ViewAlbumsList();
    // this.photoListView = new ViewPhotoList();
    this.collectionAlbumsList = new CollectionAlbumsList(config.albumUrl);
    // this.сollectionPhotoList = new CollectionPhotoList(config.photosUrl);
    this.start();
  }

  initAlbums(albums) {
    this.albums = albums;
    console.log('🚀 ~ initAlbums ~ albums', albums);
  }
  start() {
    let initAlbums = this.initAlbums.bind(this)
    this.collectionAlbumsList.fetchData().then(initAlbums);
  }
}
