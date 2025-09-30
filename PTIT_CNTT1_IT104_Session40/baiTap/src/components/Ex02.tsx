import axios from "axios";
import { useState } from "react";

type UploadedItem = {
  url: string;
  public_id: string;
};

export default function Ex02() {
  const [files, setFiles] = useState<File[]>([]);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [uploaded, setUploaded] = useState<UploadedItem[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const picked = Array.from(e.target.files);

    setFiles(picked);
    setUploaded([]);
    setError(null);
  };

  const uploadAll = async () => {
    if (!files.length) return;
    setIsUploading(true);
    setError(null);

    const endpoint = `https://api.cloudinary.com/v1_1/dwzqispdh/image/upload`;

    try {
      const results = await Promise.all(
        files.map((file) => {
          const formData = new FormData();
          formData.append("file", file);
          formData.append("upload_preset", "Session40");
          return axios.post(endpoint, formData);
        })
      );

      const list: UploadedItem[] = results.map((res) => ({
        url: res.data.secure_url,
        public_id: res.data.public_id,
      }));

      setUploaded(list);
    } catch (err: unknown) {
      setError("Đã xảy ra lỗi khi upload file.");
      console.error(err);
    } finally {
      setIsUploading(false);
    }
  };

  const resetAll = () => {
    setFiles([]);
    setUploaded([]);
    setError(null);
  };

  return (
    <div
      style={{ maxWidth: 720, margin: "24px auto", fontFamily: "sans-serif" }}
    >
      <h2>Upload nhiều ảnh lên Cloudinary</h2>

      <div style={{ marginBottom: 12 }}>
        <input type="file" accept="image/*" multiple onChange={handleSelect} />
      </div>

      {files.length > 0 && (
        <div style={{ marginBottom: 12 }}>
          <strong>Đã chọn:</strong> {files.length} file
          <ul style={{ marginTop: 8 }}>
            {files.map((f) => (
              <li key={f.name} style={{ lineHeight: "1.8" }}>
                {f.name}
              </li>
            ))}
          </ul>
          <button onClick={uploadAll} disabled={isUploading}>
            {isUploading ? "Đang upload..." : "Upload tất cả"}
          </button>
          <button
            onClick={resetAll}
            style={{ marginLeft: 8 }}
            disabled={isUploading}
          >
            Reset
          </button>
        </div>
      )}

      {error && (
        <div style={{ color: "red", marginTop: 12 }}>
          <strong>Lỗi:</strong> {error}
        </div>
      )}

      {uploaded.length > 0 && (
        <div style={{ marginTop: 16 }}>
          <h3>Danh sách URL đã upload</h3>
          <ol>
            {uploaded.map((item) => (
              <li key={item.public_id} style={{ marginBottom: 12 }}>
                <a href={item.url} target="_blank" rel="noreferrer">
                  {item.url}
                </a>
                <div style={{ marginTop: 6 }}>
                  <img
                    src={item.url}
                    alt={item.public_id}
                    style={{ width: 160, height: "auto", borderRadius: 8 }}
                  />
                </div>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}
