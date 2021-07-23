class StickerManager {
  constructor(url) {
    this.url = url;
  }

  fetchSticker() {
    return fetch(this.url).then((resp) => resp.json());
  }

  createSticker(newSticker) {
    return fetch(this.url, {
      method: 'POST',
      body: JSON.stringify(newSticker),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((resp) => resp.json());
  }

  saveSticker(sticker) {
    return fetch(this.url + sticker.id, {
      method: 'PUT',
      body: JSON.stringify(sticker),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  deleteSticker(id) {
    return fetch(this.url + id, {
      method: 'DELETE',
    });
  }
}
