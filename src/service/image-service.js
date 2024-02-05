import API from './base-service';

const ImageService = {
  getAllImages: async function () {
    return API.get('/image/all');
  },

  uploadImage: async function (fileFormData) {
    return API.post('/image/upload', fileFormData);
  },
};

export default ImageService;
