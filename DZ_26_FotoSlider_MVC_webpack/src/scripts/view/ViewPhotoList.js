export default class ViewPhotoList {
  constructor(photos) {
    this._photosListContainer = photos;
  }

  renderPhotos(list) {
    this._photosListContainer.innerHTML = '';
    this._photosListContainer.insertAdjacentHTML(
      'beforeend',
      list.map((photoEl) => this.getPhotoHtml(photoEl)).join('\n')
    );
  }

  getPhotoHtml(photoEl) {
    return `<img class="photo-item" src="${photoEl.thumbnailUrl}" alt="${photoEl.title}">`;
  }
}
