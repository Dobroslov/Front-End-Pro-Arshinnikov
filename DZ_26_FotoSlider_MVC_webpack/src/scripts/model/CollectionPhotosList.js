export default class CollectionPhotoList {
  constructor(url) {
    this.cache = [];
    this._url = url;
    this.listPhotos = [];
  }

  fetchDataPhotos(id) {
    return this.fetchDataFromCache(id).then((data) => (this.listPhotos = data));
  }

  fetchDataFromCache(id) {
    if (this.cache[id] === undefined) {
      this.cache[id] = this.fetchFromServer(id);
    }
    return this.cache[id];
  }

  fetchFromServer(id) {
    return fetch(this._url.replace('{{Id}}', id)).then((resp) => resp.json());
  }
}
