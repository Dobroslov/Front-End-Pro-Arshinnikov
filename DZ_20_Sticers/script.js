$(document).ready(function () {
  let STICKER_URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/stickers/';

  let template = $('#stickerItemTemplate').html();
  let stickerList = $('#list__stickers'); 
  
  let stickersArr = [];
  let stickerManager = new StickerManager(STICKER_URL);

  stickerManager.fetchSticker().then(setStickers).then(renderList);

  $('#add__sticker').on('click', function () {
    let newDescriptionElement = $('#newElementDescription');
    let newSticker = prepareStickerData(newDescriptionElement.val());

    newDescriptionElement.val('');
    stickerManager.createSticker(newSticker).then(addSticker);
  });

  $('#list__stickers')
    .on('click', 'span.delete__btn', function () {
      let itemId = $(this).parent('li').attr('data-sticker-id');

      stickerManager.deleteSticker(itemId).then(() => {
        stickersArr = stickersArr.filter((item) => item.id !== itemId);

        renderList(stickersArr);
      });
    })

    .on('focusout', '.description', function () {
      let itemId = $(this).parent('li').attr('data-sticker-id');
      let description = $(this).val();
      let sticker = { id: itemId, description: description };

      stickerManager.saveSticker(sticker).then((resp) => resp.json);
    });

  function prepareStickerData(text) {
    return { description: text };
  }

  function getItemHtml({ description, id }) {
    return template
      .replace('{{description}}', description)
      .replace('{{id}}', id);
  }

  function addSticker(sticker) {
    stickersArr.push(sticker);
    renderList(stickersArr);
  }

  function setStickers(data) {
    return (stickersArr = data);
  }

  function renderList(list) {
    $(stickerList).html(list.map(getItemHtml).join(''));
  }
});
