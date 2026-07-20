import { useState } from "react";

function UploadForm() {
  const [fileName, setFileName] = useState("");
  const [status, setStatus] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!fileName) {
      setStatus("Оберіть файл перед завантаженням.");
      return;
    }

    setIsUploading(true);
    setStatus("");

    await new Promise((resolve) => setTimeout(resolve, 1200));

    setStatus(`Файл «${fileName}» успішно завантажено.`);
    setIsUploading(false);
  };

  return (
    <div className="component-card">
      <h3>Форма завантаження</h3>
      <p>Цей приклад імітує завантаження файлу й показує стан процесу.</p>

      <form onSubmit={handleSubmit} className="upload-card">
        <input
          type="file"
          onChange={(event) => {
            const selectedFile = event.target.files?.[0];
            setFileName(selectedFile ? selectedFile.name : "");
          }}
        />
        <button type="submit" disabled={isUploading}>
          {isUploading ? "Завантажуємо..." : "Завантажити файл"}
        </button>
      </form>

      {status && <p className="form-status-box">{status}</p>}
    </div>
  );
}

export default UploadForm;