import Header from "@/layout/Header";
import UploadCard from "@/components/upload/UploadCard";

const ProductUpload = () => {
  return (
    <>
      <Header />
      <div className="max-w-[900px] m-auto">
        <UploadCard />
      </div>

    </>
  );
};

export default ProductUpload;