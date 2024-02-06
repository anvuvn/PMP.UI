import API from './base-service';

const ImageService = {
  getAllImages: async function () {
    let result = await API.get('/image/all');
    return result.data;
  },

  uploadImage: function (fileFormData) {
    return API.post('/image/upload', fileFormData);
  },
};

export default ImageService;
