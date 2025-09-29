import axios from "axios";
import { useState } from "react";

export default function UploadFile() {
  const [file, setFile] = useState<File | null>(null);
  const [imageUrl, setImageUlr] = useState<string>("");
  const [isUploading, setIsUploading] = useState<boolean>(false);

  const handleChangeFile = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };
  const handleUpload = async () => {
    if (!file) {
      alert("Vui lòng chọn file");
      return;
    }
    // Lấy dữ liệu từ người dùng và truyền vào formData
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "demo_upload"); // tên folder trên cloudinary
    formData.append("cloud_name", "dwzqispdh"); // tên tài khoản  trên cloudinary

    //Hiển thị loading
    setIsUploading(true);

    // Gọi API
    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dwzqispdh/image/upload",
        formData
      );

      console.log("Response: ", response);
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
    <div>
      <h2>Ảnh vừa upload</h2>
      <img src={imageUrl} alt="" />
      <input
        type="file"
        title="Choose a file to upload"
        onChange={handleChangeFile}
      />
      <button onClick={handleUpload}>Upload</button>
      {isUploading && <div className="loader">Đang tải ảnh...</div>}
    </div>
  );
}
