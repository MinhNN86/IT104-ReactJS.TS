import React, { useCallback, useState } from "react";
import axios from "axios";

import { useDropzone } from "react-dropzone";
interface AcceptedFile extends File {
  path?: string;
}
export default function Ex01() {
  const [file, setFile] = useState<File | null>(null);
  const [imageUlr, setImageUlr] = useState<string>("");
  const [isUploading, setIsUploading] = useState<boolean>(false);

  const onDrop = useCallback((acceptedFiles: AcceptedFile[]) => {
    console.log(acceptedFiles);
    setFile(acceptedFiles[0] || null);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleUpload = async () => {
    if (!file) {
      alert("Vui lòng chọn file");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "Session40");

    setIsUploading(true);
    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dwzqispdh/image/upload",
        formData
      );
      if (response.status === 200) {
        setImageUlr(response.data.secure_url);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div style={{ margin: 100 }}>
      <div
        {...getRootProps()}
        style={{
          border: "2px solid black",
          padding: 10,
          width: 400,
        }}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Thả file vào đây ...</p>
        ) : (
          <p>Kéo và thả file vào đây, hoặc bấm để chọn file</p>
        )}
      </div>
      <div>{file ? file.name : "Chưa có file"}</div>
      {!imageUlr && <button onClick={handleUpload}>Upload</button>}
      <img src={imageUlr} alt="" />
      <div>{isUploading && <div className="loader">Đang tải ảnh...</div>}</div>
    </div>
  );
}
