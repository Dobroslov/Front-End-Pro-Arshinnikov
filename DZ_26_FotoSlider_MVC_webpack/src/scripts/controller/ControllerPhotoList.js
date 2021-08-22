import CollectionAlbumsList from '../model/CollectionAlbumsList';
import CollectionPhotoList from '../model/CollectionPhotosList';
import ViewAlbumsList from '../view/ViewAlbumsList';
import ViewPhotoList from '../view/ViewPhotoList';
import config from '../config.js';

export default class ControllerPhotoList {
  constructor(albumsList, photosList, config) {
    this.initView(albumsList, photosList);
    this.initCollection(config);
    this.start();
  }

  initView(albumsList, photosList) {
    let functionConfig = {
      getAlbumsPhotos: this.getAlbumsPhotos.bind(this),
    };

    this.albumsListView = new ViewAlbumsList(albumsList, functionConfig);
    this.photoListView = new ViewPhotoList(photosList);
  }

  initCollection(config) {
    this.collectionAlbumsList = new CollectionAlbumsList(config.albumUrl);
    this.collectionPhotosList = new CollectionPhotoList(config.photosUrl);
  }

  start() {
    this.collectionAlbumsList.fetchDataAlbums().then(() => {
      this.albumsListView.renderAlbums(this.collectionAlbumsList.listAlbums);
      this.getAlbumsPhotos(this.collectionAlbumsList.listAlbums[0].id);
    });
  }

  getAlbumsPhotos(albumId) {
    this.collectionPhotosList.fetchDataPhotos(albumId).then(() => {
      this.photoListView.renderPhotos(this.collectionPhotosList.listPhotos);
    });
  }
}
