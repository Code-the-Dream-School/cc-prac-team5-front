/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { BiChevronLeft } from "react-icons/bi";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Upload from "../../assets/Images/upload.png";
import { AuthAPI } from "../../common/API";
import BottomMenu from "../../Components/BottomMenu/BottomMenu";

const EditChild = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [upload, setUpload] = useState(Upload);
  const [userName, setUserName] = useState("");
  const [pin, setPin] = useState("");
  const [validateUser, setValidateUser] = useState("");
  const [validatePin, setValidatePin] = useState("");
  const [validBal, setValidBal] = useState("");
  const [checkRange, setCheckRange] = useState("");
  const [checkUserName, setCheckUserName] = useState("");
  const [balance, setBalance] = useState("");

  const hanldeValidate = () => {
    let valid = false;
    if (userName === "") {
      setValidateUser("Please Enter Username");
      valid = true;
    }
    if (pin === "") {
      setValidatePin("Please Enter Pin");
      valid = true;
    }
    if (pin.length !== 4) {
      setCheckRange("Please Enter 4 digit pin");
      valid = true;
    }
    if (balance === "") {
      setValidBal("Please Enter Balance");
      valid = true;
    }
    return valid;
  };

  const handleChange = async (e) => {
    const img = URL.createObjectURL(e.target.files[0]);
    console.log("img", img);

    setUpload(img);
  };
  const handlePinChange = (index, value) => {
    setPin((prevPins) => {
      const newPin = prevPins.split("");
      newPin[index] = value;
      return newPin.join("");
    });

    if (index < 3 && value !== "") {
      const nextPin = document.getElementById(`pin-inputs-${index + 1}`);
      nextPin.focus();
    }
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const getChild = async () => {
    const response = await AuthAPI(`/children/${params.id}`);
    setUserName(response.data.data?.userName);
    setBalance(response.data.data?.totalPoints);
    setUpload(response.data.data?.image);
  };

  const handleEditChild = async () => {
    if (!hanldeValidate()) {
      try {
        const data = {
          method: "PATCH",
          data: {
            userName: userName,
            pin: pin,
            totalPoints: balance,
          },
        };
        const response = await AuthAPI(`/children/${params.id}`, data);
        if (response.status === "success") {
          toast.success("Child edited successfully");
          setCheckUserName("");
          setUserName("");
          setPin(["", "", "", ""]);
          navigate("/parentdashboard");
        } else {
          setCheckUserName("Username is already exits");
        }
      } catch (error) {
        toast.error("Child can not edited successfully");
      }
    }
  };

  const handleBalance = (e) => {
    setBalance(e.target.value);
  };

  useEffect(() => {
    getChild();
  }, []);
  return (
    <div className="max-w-[390px] mx-auto h-screen flex flex-col justify-between">
      <div className="overflow-y-auto">
        <div className="min-h-[708px]">
          <div className="pt-[17px]">
            <button
              className="bg-[#BCCEED] text-white font-bold text-[14px] rounded-[15px] w-[80px] h-[35px] flex justify-center items-center ml-auto"
              onClick={handleLogout}
            >
              Sign Out
            </button>
            <div className="flex justify-center gap-[30px] p-[20px_45px_0_35px]">
              <button
                className="bg-[#EEECEC] w-[33px] h-[33px] rounded-full shadow-shadow100 text-[#33363F] flex justify-center items-center"
                onClick={() => navigate("/parentdashboard")}
              >
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
                  Upload Child image
                </p>
              </div>
            </div>
            <div className="px-[5px]">
              <div className="bg-[#B3C8E580] mt-[31px] rounded-[15px] px-[11px] pb-[11px]">
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Username"
                  className="border-[#1A4F8B] outline-none border-[1px] bg-white rounded-md p-[12px_8px] mt-[50px] w-full"
                />
                {userName === "" && (
                  <p className="text-[red] pt-2">{validateUser}</p>
                )}
                <p className="text-[red]">{checkUserName}</p>
                <input
                  type="text"
                  placeholder="Balance"
                  onChange={handleBalance}
                  value={balance}
                  className="border-[#1A4F8B] outline-none border-[1px] bg-white rounded-md p-[12px_8px] my-3 w-full"
                />
                {balance === "" && <p className="text-[red]">{validBal}</p>}
                <label className="text-[16px] font-semibold block pt-3 mb-2">
                  Password
                </label>
                <div className="flex gap-5">
                  <input
                    id="pin-inputs-0"
                    type="password"
                    maxLength={1}
                    value={pin[0]}
                    onChange={(e) => handlePinChange(0, e.target.value)}
                    className="border-[#1A4F8B] border-[1px] bg-white rounded-md sm:p-[8px_27px] p-[8px_22px] sm:text-[20px] text-[18px] w-full outline-none"
                  />
                  <input
                    id="pin-inputs-1"
                    type="password"
                    maxLength={1}
                    value={pin[1]}
                    onChange={(e) => handlePinChange(1, e.target.value)}
                    className="border-[#1A4F8B] border-[1px] bg-white rounded-md sm:p-[8px_27px] p-[8px_22px] sm:text-[20px] text-[18px] w-full outline-none"
                  />
                  <input
                    id="pin-inputs-2"
                    type="password"
                    maxLength={1}
                    value={pin[2]}
                    onChange={(e) => handlePinChange(2, e.target.value)}
                    className="border-[#1A4F8B] border-[1px] bg-white rounded-md sm:p-[8px_27px] p-[8px_22px] sm:text-[20px] text-[18px] w-full outline-none"
                  />
                  <input
                    id="pin-inputs-3"
                    type="password"
                    maxLength={1}
                    value={pin[3]}
                    onChange={(e) => handlePinChange(3, e.target.value)}
                    className="border-[#1A4F8B] border-[1px] bg-white rounded-md sm:p-[8px_27px] p-[8px_22px] sm:text-[20px] text-[18px] w-full outline-none"
                  />
                </div>
                {pin === "" && <p className="text-[red] pt-2">{validatePin}</p>}
                {pin.length !== 4 && pin !== "" ? (
                  <p className="text-[red]">{checkRange}</p>
                ) : (
                  ""
                )}
              </div>
              <div className="text-center mt-[40px]">
                <button
                  onClick={handleEditChild}
                  className="bg-[#77A4F4] w-[310px] mx-auto text-white rounded-[15px] p-[15px]"
                >
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
