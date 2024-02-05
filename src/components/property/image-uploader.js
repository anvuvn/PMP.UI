import React from 'react';
import { Navigate } from 'react-router-dom';
import ImageService from '../../service/image-service';

const ImagesUpload = () => {
  const [files, setFiles] = React.useState(null);
  const [fileUploaded, setFileUploaded] = React.useState(false);

  const onFileChange = (event) => {
    setFiles(event.target.files);
  };

  const onUpload = (event) => {
    event.preventDefault();
    const formData = new FormData();

    for (const key of Object.keys(files)) {
      formData.append('files', files[key]);
    }

    ImageService.uploadImage(formData)
      .then((response) => {
        console.log(response.data);
        setFileUploaded(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="row">
      <div className="card col-md-6 offset-md-3 mt-5">
        <h3 className="text-center">Upload Image</h3>
        <div className="card-body">
          <form onSubmit={onUpload}>
            <div>
              <label>Select a file:</label>
              <input
                className="mx-2"
                type="file"
                name="file"
                onChange={onFileChange}
                multiple
              ></input>
            </div>

            <button className="btn btn-success btn-sm mt-3" type="submit">
              Upload
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ImagesUpload;
