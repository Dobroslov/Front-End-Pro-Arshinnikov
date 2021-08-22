export default class CollectionAlbumsList {
  constructor(url) {
    this._url = url;
    this.listAlbums = [];
  }

  fetchDataAlbums() {
    return fetch(this._url).then((resp) =>
      resp.json().then((data) => (this.listAlbums = data))
    );
  }
}
