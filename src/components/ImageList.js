import React from "react";
import "../css/imagelist.css";

const ImageList = (props) => {
  const images = props.images.map((image) => {
    return <img key={image.id} src={image.webformatURL} />;
  });
  return <div className="img-container">{images}</div>;
};

export default ImageList;
