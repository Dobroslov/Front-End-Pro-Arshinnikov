$(document).ready(function () {
  const STICKER_URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/stickers/';

  const template = $('#stickerItemTemplate').html();
  const stickerList = $('#list__stickers');

  let stickersArr = [];
  
  $('#add__sticker').on('click', onAddStickerClick);

  $('#list__stickers')
    .on('click', 'span.delete__btn', function () {
      let itemId = $(this).parent('li').attr('data-sticker-id');
      deleteSticker(itemId);
    })
    .on('focusout', '.description', function () {
      let itemId = $(this).parent('li').attr('data-sticker-id');
      let description = $(this).val();
      let sticker = { id: itemId, description: description };
      saveSticker(sticker);
    });

  function deleteSticker(id) {
    fetch(STICKER_URL + id, {
      method: 'DELETE',
    }).then(() => {
      stickersArr = stickersArr.filter((item) => item.id !== id);
      renderList(stickersArr);
    });
  }

  function onAddStickerClick(event) {
    event.preventDefault();
    submitForm();
  }

  init();

  function init() {
    fetchSticker();
  }

  function fetchSticker() {
    fetch(STICKER_URL)
      .then((resp) => resp.json())
      .then(setStickers)
      .then(renderList);
  }

  function setStickers(data) {
    return (stickersArr = data);
  }

  function renderList(list) {
    $(stickerList).html(list.map(getItemHtml).join(''));
  }

  function getItemHtml({ description, id }) {
    return template
      .replace('{{description}}', description)
      .replace('{{id}}', id);
  }

  function submitForm() {
    const newSticker = getFormData();
    createSticker(newSticker);
  }

  function getFormData() {
    return { description: '' };
  }

  function createSticker(newSticker) {
    fetch(STICKER_URL, {
      method: 'POST',
      body: JSON.stringify(newSticker),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then(addSticker);
  }

  function addSticker(sticker) {
    stickersArr.push(sticker);
    renderList(stickersArr);
  }

  function saveSticker(sticker) {
    fetch(STICKER_URL + sticker.id, {
      method: 'PUT',
      body: JSON.stringify(sticker),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((resp) => resp.json);
  }
});
