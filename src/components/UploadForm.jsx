import { useActionState } from 'react';

// Функция обработки загрузки файла
async function handleFileUpload(prevState, formData) {
  try {
    await new Promise(resolve => setTimeout(resolve, 2000));
    return { success: true, message: 'Файл успешно загружен!' };
  } catch (error) {
    return { success: false, message: 'Ошибка при загрузке файла.' };
  }
}

function UploadForm() {
  const [uploadStatus, uploadFileAction, isUploading] = useActionState(handleFileUpload, null);

  return (
    <form>
      <input type="file" name="file" />
      <button formAction={uploadFileAction} disabled={isUploading}>
        {isUploading ? 'Загружаем...' : 'Загрузить файл'}
      </button>

      {uploadStatus && (
        <p className={uploadStatus.success ? 'success' : 'error'}>
          {uploadStatus.message}
        </p>
      )}
    </form>
  );
}

export default UploadForm;