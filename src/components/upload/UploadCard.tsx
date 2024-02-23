import useFileUpload from "@/hooks/upload/useFileUpload";
import { Button } from "@/components/ui/button";
import { MdAddPhotoAlternate } from "react-icons/md";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";


const UploadCard = () => {
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
    selectImg,
    onChange,
    addProduct,
    UploadImgUrl,
    selectFile,
    handleImageFile,
  } = useFileUpload();

  return (
    <>
      <form className="p-10">
      <h2>판매 글 작성</h2>
        <div className="flex flex-col border p-10 h-full gap-2">
          {/* {image ?
            <img src={image} alt="떳단다"/>
            :
            <img src="" alt="아니란다"/>
          }
          <img src={imageUpload} alt="응 안떠"/>
          {images?.map((item) => {
            return (
              <div>
                <div>
                  {}
                  <img src={images} alt="이미지 미리보기" />
                  <div
                    className=""
                  >
                    델리트 버튼
                  </div>
                </div>
              </div>
            )
          })} */}
          <Label>이미지 추가</Label>
          <div
            className="border min-h-20 p-4 flex"
          >
            <Label 
              className="cursor-pointer"
              htmlFor="picture"
            >
              <MdAddPhotoAlternate size={40} />
            </Label>
            <Input 
              id="picture"
              type="file"
              multiple
              accept="image/*" 
              name="image"
              ref={fileInput}
              onChange={selectFile}
              style={{display: "none"}} 
            />
          </div>
          <Label>제목 :</Label>
          <Input
            className="border pl-2"
            type="text"
            value={title}
            name="title"
            onChange={onChange}
            placeholder="제목"
            required
           />
          <Label>가격 :</Label>
          <Input
            className="border pl-2"
            type="number"
            value={price}
            name="price"
            onChange={onChange}
            placeholder="가격"
            required
          />
          <Label>내용 : </Label>
          <Textarea
            className="border min-h-52 p-2"
            value={content}
            name="content"
            onChange={onChange}
            placeholder="상세 내용"
            required
          ></Textarea>
          <Button 
            onClick={addProduct}>
              작성하기
          </Button>
        </div>
      </form>
    </>
  );
};

export default UploadCard;