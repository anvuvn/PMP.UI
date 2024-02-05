import React, { Component, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import ImageService from '../../service/image-service';

export const ImagesViewer = () => {
  const [images, setImages] = React.useState([]);
  useEffect(() => {
    ImageService.getAllImages()
      .then((response) => {
        setImages(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const extract_image = (img) => {
    return 'data:image/png;base64,' + img;
  };

  return (
    <div>
      <h2 className="mt-3 text-center mb-5">My Images</h2>
      <div className="row justify-content-center">
        {images.map((image) => (
          <div key={image.id} className="px-0 m-2 border bg-light col-3">
            <div className="hovereffect">
              <img
                src={extract_image(image.image)}
                width="330"
                height="300"
                alt="no"
              ></img>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
