import Header from "@/layout/Header";
import useFileUpload from "@/hooks/upload/useFileUpload";
import { Button } from "@/components/ui/button";

const ProductUpload = () => {
  const {
    selectedFile,
    products,
    title,
    price,
    image,
    content,
    fileInput,
    imageUpload,
    images,
    uploadStep,
    handleFileSelect,
    handleUpload,
    deleteImage,
    selectImg,
    onChange,
    addProduct,
  } = useFileUpload();

  return (
    <div>
      <Header />
      <h2>판매 글 작성</h2>
      <form className="p-10">
        <div className="flex flex-col border p-10 h-full">
          <img src={selectedFile} alt="응 안떠"/>
          <input className="border" type="file" onChange={handleFileSelect} />
          <label>제목 : </label>
          <input
            className="border"
            type="text"
            value={title}
            name="title"
            onChange={onChange}
            required
          ></input>
          <label>가격 : </label>
          <input
            className="border"
            type="text"
            value={price}
            name="price"
            onChange={onChange}
            required
          ></input>
          <label>내용 : </label>
          <input
            className="border"
            type="textarea"
            value={content}
            name="content"
            onChange={onChange}
            required
          ></input>
          <label>내용 : </label>
          <textarea 
            className="border min-h-52" 
          />
          <Button 
            onClick={handleUpload}>
              작성하기
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ProductUpload;