import React, { useState } from "react";
import { BiChevronLeft } from "react-icons/bi";
import Upload from "../../assets/Images/upload.png";
import BottomMenu from "../../modules/Landing/components/BottomMenu/BottomMenu";

const EditChild = () => {
  const [upload, setUpload] = useState(Upload);

  const handleChange = (value) => {
    const img = URL.createObjectURL(value.target.files[0]);
    console.log("img", img);
    setUpload(img);
  };
  return (
    <div className="max-w-[390px] mx-auto h-screen flex flex-col justify-between">
      <div className="overflow-y-auto">
        <div className="min-h-[708px]">
          <div className="pt-[17px]">
            <button className="bg-[#BCCEED] text-white font-bold text-[14px] rounded-[15px] w-[80px] h-[35px] flex justify-center items-center ml-auto">
              Sign Out
            </button>
            <div className="flex justify-center gap-[30px] p-[20px_45px_0_35px]">
              <button className="bg-[#EEECEC] w-[33px] h-[33px] rounded-full shadow-shadow100 text-[#33363F] flex justify-center items-center">
                <BiChevronLeft className="text-[24px]" />
              </button>
              <h1 className="text-[25px] font-bold text-center">Edit Child</h1>
            </div>
            <div className="mt-5 mx-auto">
              <input
                type="file"
                accept="image/jpg"
                onChange={(e) => handleChange(e)}
                className="mx-auto w-[121px] h-[121px] opacity-0 absolute rounded-full left-[49.5%] translate-x-[-50%]"
              />
              <div type="file">
                <img
                  src={upload}
                  alt="Upload"
                  className="mx-auto w-[121px] h-[121px] rounded-full object-cover"
                />
                <p className="text-[#7F7F7F] text-center text-[15px]">
                  Upload Chore image
                </p>
              </div>
            </div>
            <div className="px-[5px]">
              <div className="bg-[#B3C8E580] mt-[31px] rounded-[15px] px-[11px] pb-[11px]">
                <input
                  type="text"
                  placeholder="Username"
                  className="border-[#1A4F8B] border-[1px] bg-white rounded-md p-[12px_8px] mt-[50px] w-full"
                />
                <input
                  type="text"
                  placeholder="Balance"
                  className="border-[#1A4F8B] border-[1px] bg-white rounded-md p-[12px_8px] mt-[50px] mb-[50px] w-full"
                />
                <label className="text-[16px] font-semibold block mb-2">
                  Password
                </label>
                <div className="flex gap-5">
                  <input
                    type="number"
                    className="border-[#1A4F8B] border-[1px] bg-white rounded-md sm:p-[8px_27px] p-[8px_22px] sm:text-[20px] text-[18px] w-full outline-none"
                  />
                  <input
                    type="number"
                    className="border-[#1A4F8B] border-[1px] bg-white rounded-md sm:p-[8px_27px] p-[8px_22px] sm:text-[20px] text-[18px] w-full outline-none"
                  />
                  <input
                    type="number"
                    className="border-[#1A4F8B] border-[1px] bg-white rounded-md sm:p-[8px_27px] p-[8px_22px] sm:text-[20px] text-[18px] w-full outline-none"
                  />
                  <input
                    type="number"
                    className="border-[#1A4F8B] border-[1px] bg-white rounded-md sm:p-[8px_27px] p-[8px_22px] sm:text-[20px] text-[18px] w-full outline-none"
                  />
                </div>
              </div>
              <div className="text-center mt-[40px]">
                <button className="bg-[#77A4F4] w-[310px] mx-auto text-white rounded-[15px] p-[15px]">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BottomMenu />
    </div>
  );
};

export default EditChild;
