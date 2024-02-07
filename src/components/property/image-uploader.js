import React, { useEffect } from 'react';
import { Navigate, useSearchParams } from 'react-router-dom';
import ImageService from '../../service/image-service';
import { ImagesViewer } from './image-viewer';

const ImagesUpload = (props) => {
  const [files, setFiles] = React.useState(null);
  const [fileUploaded, setFileUploaded] = React.useState(false);
  const [propertyId, setPropertyId] = React.useState();
  const [images, setImages] = React.useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const reloadImage = ()=>{
    let pid = searchParams.get("id");
    setPropertyId(pid);
    ImageService.getPropertyImages(pid)
      .then((response) => {
        console.log(response.data);
        setImages(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    
    reloadImage();

  }, []);

  const onFileChange = (event) => {
    setFiles(event.target.files);
  };
 
  const onUpload = (event) => {
    event.preventDefault();

    if(!files){
      alert('Please select a file');
      return;
    }

    const formData = new FormData();

    formData.append('property_id', searchParams.get("id"));
    for (const key of Object.keys(files)) {
      formData.append('files', files[key]);
    }

    ImageService.uploadImage(formData)
      .then((response) => {
        
        console.log(response);
        setFileUploaded(true);
        reloadImage();
        // navigate to property details page
        //navigate('/property/' + searchParams.get("id"));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (    
    <>
      <h2 style={{textAlign:'center'}}>Upload images for property</h2>
      <h6 style={{fontStyle:'italic', textAlign:'center', color:'red'}}>(uploading new images will override the older ones)</h6>
      <div className="row">
        <div className="card col-md-6 offset-md-3 mt-5"> 
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
              {fileUploaded ? <div style={{color:'green'}}>File uploaded successfully</div> : ''}
            </form>
          </div>
        </div>
        <ImagesViewer images={images}></ImagesViewer>
      </div>
    </>
  );
};

export default ImagesUpload;
