class CollectionPhotoList {
  constructor(urlAlbums, urlPhotos) {
    this._urlPhotos = urlPhotos;
    this._urlAlbums = urlAlbums;

    this.photosList = [];
    this.albumsList = [];
  }
  getAlbums() {
    return fetch(this._urlAlbums)
      .then((resp) => resp.json())
      .then((data) => this.setAlbums(data));
  }

  setAlbums(data) {
    return (this.albumsList = data);
  }

  getPhotos() {}
}
