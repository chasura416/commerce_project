import { getDownloadURL, ref, uploadBytes, deleteObject } from "firebase/storage";
import { useState } from "react"
import { storage, auth } from "@/firebase";

const FileUpload = () => {
  const [ selectedFile, setSelectedFile ] = useState(null);

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    // ref 함수를 이용해서 Storage 내부 저장할 위치를 지정하고, uploadBytes 함수를 이용해서 파일을 저장합니다.
    const imageRef = ref(
      storage,
      `${auth.currentUser?.uid}/${selectedFile.name}`
    );
    await uploadBytes(imageRef, selectedFile);

    // 파일 URL 가져오기
    const downloadURL = await getDownloadURL(imageRef);
    console.log(downloadURL);
  };


  const deleteImage = async () => {
    const imageRef = ref(
      storage,
      `${auth.currentUser?.uid}/${selectedFile.name}`
    );

    await deleteObject(imageRef).then(() => {
      console.log("success")
    }).catch((error) => {
      console.log("failed")
    })
  }


  return (
    <div>
      <h2>파일 업로드 컴포넌트</h2>
      <input 
        className="border"
        type="file" 
        onChange={handleFileSelect} 
      />
      <button 
        className="border"
        onClick={handleUpload}>
          Upload
      </button>
      <button 
        className="border"
        onClick={deleteImage}>
          delete
      </button>
    </div>
  )
}

export default FileUpload;