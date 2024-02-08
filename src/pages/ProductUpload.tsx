import Header from "@/layout/Header";
import useFileUpload from "@/hooks/upload/useFileUpload";
import { Button } from "@/components/ui/button";

const ProductUpload = () => {
  const {
    selectedFile,
    text,
    products,
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
          <img src={selectedFile} />
          <input className="border" type="file" onChange={handleFileSelect} />
          <label>제목 : </label>
          <input
            className="border"
            type="text"
            value={text}
            name="text"
            onChange={onChange}
            required
          ></input>
          <label>내용 : </label>
          <textarea className="border min-h-52" />
          <Button 
            onClick={addProduct}>
              작성하기
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ProductUpload;