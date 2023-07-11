
import React, { Fragment, useEffect, useState } from "react";
import { BiChevronLeft } from "react-icons/bi";
import { Dialog, Transition } from "@headlessui/react";
import star from "../../assets/Images/star1.png";
import food from "../../assets/Images/food.png";
import { AiFillPlusCircle } from "react-icons/ai";
import BottomMenu2 from "../../Components/BottomMenu2/BottomMenu2";
import { useNavigate } from "react-router-dom";
import { AuthAPI } from "../../common/API";
import rewardsIcon from "../../assets/Images/rewards-icon.png";

const Rewards = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [rewards, setRewards] = useState();

  const getAllChild = async () => {
    const response = await AuthAPI("/rewards");

    setRewards(response.data?.data);
  };

  useEffect(() => {
    getAllChild();
  }, []);
  return (
    <div className="max-w-[390px] mx-auto h-screen flex flex-col justify-between bg-bg100 bg-no-repeat">
      <div className="overflow-y-auto">
        <div className="sm:p-[45px_35px_0_35px] p-[45px_20px_0_20px] h-[700px]">
          <div className="flex justify-center items-center gap-6">
            <button
              onClick={() => navigate("/parentdashboard")}
              className="bg-[#EEECEC] w-[33px] h-[33px] rounded-full shadow-shadow100 text-[#33363F] flex justify-center items-center"
            >
              <BiChevronLeft className="text-[24px]" />
            </button>
            <h1 className="text-[25px] font-semibold text-center">Rewards</h1>
          </div>
          <div className="mt-[57px] flex flex-col gap-[21px]">
            {rewards?.map((data, key) => (
              <div
                key={key}
                className="bg-[#C9DDF8CC] rounded-[10px] p-[9px_13px] flex items-center sm:gap-[21px] gap-[10px] "
              >
                <div className="flex items-start sm:gap-[29px] gap-[14px]">
                  <img
                    src={rewardsIcon}
                    alt="img"
                    className="w-[75px] h-[75px] rounded-full object-cover"
                  />
                  <div className="w-[191px]">
                    <h1 className="font-bold text-[20px]">{data.title}</h1>
                    <div className="mt-[9px] text-[20px] font-medium flex items-center gap-[4px]">
                      {data.points} <img src={star} alt="star" />
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setOpen(true);
                  }}
                >
                  <AiFillPlusCircle className="text-[#20A82E] text-[40px]" />
                </button>
              </div>
            ))}
          </div>
          <div className="mt-[30px] text-center">
            <button className="bg-[#BCCEED] rounded-[15px] text-white text-[22px] font-bold w-[223px]">
              Points <br />
              <span className="text-[40px]">50</span>
            </button>
          </div>
        </div>
      </div>
      <BottomMenu2 />

      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-[#292727D4] transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full justify-center p-4 text-center items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all w-[321px] px-[38px] pt-[26px] pb-[19px]">
                  <div>
                    <p className="text-[20px] font-medium text-center mb-[11px]">
                      Confirm your rewards
                    </p>
                    <img
                      src={rewardsIcon}
                      alt="rewards-icon"
                      className="w-[245px] h-[142px] object-cover"
                    />
                    <div className="text-center">
                      <button
                        className="bg-[#6BE5604D] text-[#1D5F18E5] w-[215px] h-[34px] rounded-[10px] text-[20px] font-medium shadow-[0px_4px_4px_0px_#00000040] mx-auto mt-[15px]"
                        onClick={() => navigate("/earnrewards")}
                      >
                        Approve
                      </button>
                      <button
                        className="bg-[#F228284D] text-[#894242E5] w-[215px] h-[34px] rounded-[10px] text-[20px] font-medium shadow-[0px_4px_4px_0px_#00000040] mx-auto mt-[11px]"
                        onClick={() => setOpen(false)}
                      >
                        Disapprove
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};

export default Rewards;
