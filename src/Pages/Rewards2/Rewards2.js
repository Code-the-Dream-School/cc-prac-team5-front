import React, { useEffect, useState } from "react";
import { BiChevronLeft } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import rewardsIcon from "../../assets/Images/rewards-icon.png";
import star from "../../assets/Images/star1.png";
import { AuthAPI } from "../../common/API";
import BottomMenu from "../../Components/BottomMenu/BottomMenu";
import trash from "../../assets/Images/trash.png";
import { toast } from "react-toastify";

const Rewards2 = () => {
  const navigate = useNavigate();
  const [rewards, setRewards] = useState();

  const getAllChild = async () => {
    const response = await AuthAPI("/rewards");

    setRewards(response.data.data);
  };

  useEffect(() => {
    getAllChild();
  }, []);

  const handleDelete = async (id) => {
    const data = {
      method: "DELETE",
    };
    const response = await AuthAPI(`/rewards/${id}`, data);
    if (response.status === "success") {
      getAllChild();
      toast.success("rewards deleted successfully");
    }
  };

  return (
    <div className="max-w-[390px] mx-auto h-screen flex flex-col justify-between">
      <div className="overflow-y-auto">
        <div className="p-[45px_45px_0_35px] h-[690px]">
          <div className="flex justify-center items-center gap-6">
            <button
              onClick={() => navigate("/parentdashboard")}
              className="bg-[#EEECEC] w-[33px] h-[33px] rounded-full shadow-shadow100 text-[#33363F] flex justify-center items-center"
            >
              <BiChevronLeft className="text-[22px]" />
            </button>
            <h1 className="text-[25px] font-semibold text-center">Rewards</h1>
          </div>
          <a
            href="/addnewrewards"
            className="bg-[#77A4F4] mt-[50px] h-[54px] font-bold text-[17px] rounded-[15px] text-white w-full flex justify-center items-center"
          >
            + Add new reward
          </a>
          <div className="mt-[57px] flex flex-col gap-[21px]">
            {rewards?.map((data, key) => (
              <div
                key={key}
                className="bg-[#C9DDF833] rounded-[10px] p-[9px_13px] flex items-start gap-[29px]"
              >
                <img src={rewardsIcon} alt="img" />
                <div>
                  <h1 className="font-bold text-[20px]">{data.title}</h1>
                  <div className="mt-[9px] text-[20px] font-medium flex items-center gap-[4px]">
                    {data.points} <img src={star} alt="star" />{" "}
                    <button onClick={() => handleDelete(data._id)}>
                      <img src={trash} alt="trash" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <BottomMenu />
    </div>
  );
};

export default Rewards2;
