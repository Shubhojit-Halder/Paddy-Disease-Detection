import axios from "axios";
import React, { useEffect, useState } from "react";

const ImageUploader = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  const [data, setData] = useState();
  const [image, setImage] = useState(false);
  const [isLoading, setIsloading] = useState(false);

  const sendFile = async (event) => {
    event.preventDefault();
    if (image) {
      let formData = new FormData();
      formData.append("file", selectedFile);
      let res = await axios({
        method: "post",
        url: "http://localhost:8000/predict",
        data: formData,
      });
      if (res.status === 200) {
        setData(res.data);
        console.log(res.data);
      } else {
        return;
      }
      setIsloading(false);
    }
  };

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);
  }, [selectedFile]);

  useEffect(() => {
    if (!preview) {
      return;
    }
    setIsloading(true);
  }, [preview]);

  const onSelectFile = (e) => {
    const files = e.target.files;
    if (!files || files.length === 0) {
      setSelectedFile(undefined);
      setImage(false);
      setData(undefined);
      return;
    }
    setSelectedFile(files[0]);
    setData(undefined);
    setImage(true);
  };

  return (
    <>
      <div>
        {image ? (
          <>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img style={{ width: "250px", height: "250px" }} src={preview} />
            </div>
          </>
        ) : (
          <></>
        )}

        <div
          style={{
            marginTop: "1.25rem",
            textAlign: "center",
            fontSize: "1.2rem",
            fontWeight: "700",
          }}
        >
          {data && (
            <>
              <p> Disease : {data.class}</p>
              <p>
                Confidence: {(parseFloat(data.confidence) * 100).toFixed(2)}
              </p>
            </>
          )}
        </div>
        <form onSubmit={sendFile}>
          <div className="input-group">
            <label htmlFor="name">Select an image</label>
            <input
              type="file"
              accept="image/*"
              id="name"
              onChange={onSelectFile}
            />
          </div>
          <button type="submit" className="submit-btn" onSubmit={sendFile}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default ImageUploader;
