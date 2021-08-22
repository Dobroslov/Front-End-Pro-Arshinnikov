export default class ViewAlbumsList {
  constructor(albumsList, functionConfig) {
    this._albumsList = albumsList;
    this.functionConfig = functionConfig;
    this.initEventClick();
  }

  initEventClick() {
    this._albumsList.addEventListener(
      'click',
      this.onAlbumsListClick.bind(this)
    );
  }

  renderAlbums(list) {
    this._albumsList.insertAdjacentHTML(
      'beforeend',
      list.map((albumEl) => this.getAlbumHtml(albumEl)).join('\n')
    );
  }

  getAlbumHtml(albumEl) {
    return `<li><a class="album-item" data-id ="${albumEl.id}">${albumEl.id}</a></li>`;
  }

  onAlbumsListClick(e) {
    let id = e.target.dataset.id;
    if (id !== undefined) {
      this.functionConfig.getAlbumsPhotos(id);
    }
  }
}
