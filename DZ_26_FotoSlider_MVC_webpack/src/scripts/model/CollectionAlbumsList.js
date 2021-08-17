class CollectionAlbumsList {
  constructor(url) {
    this._url = url;
  }

  fetchData() {
    return fetch(this._url)
      .then((resp) => resp.json())      
  }
}
