import Header from "@/layout/Header";
import UploadCard from "@/components/upload/UploadCard";
import GlobalLayout from "@/layout/GlobalLayout";

const ProductUpload = () => {
  return (
    <>
      <GlobalLayout>
        <Header />
        <div className="max-w-[600px] m-auto">
          <UploadCard />
        </div>
      </GlobalLayout>
    </>
  );
};

export default ProductUpload;