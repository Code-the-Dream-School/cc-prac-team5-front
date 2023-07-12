import React, { useEffect, useState } from "react";
import setting from "../../assets/Images/setting.png";
import trash from "../../assets/Images/trash.png";
import { useNavigate } from "react-router-dom";
import BottomMenu from "../../Components/BottomMenu/BottomMenu";
import { AuthAPI } from "../../common/API";
import { toast } from "react-toastify";

const ParentDashboard = () => {
  const navigate = useNavigate();
  const [child, setChild] = useState([]);
  const [userName, setUserName] = useState("");
  const [pin, setPin] = useState("");
  const [validateUser, setValidateUser] = useState("");
  const [validatePin, setValidatePin] = useState("");
  const [checkRange, setCheckRange] = useState("");
  const [checkUserName, setCheckUserName] = useState("");

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
    return valid;
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
  const handleChild = async () => {
    if (!hanldeValidate()) {
      try {
        const data = {
          method: "POST",
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
          data: {
            userName: userName,
            pin: pin,
          },
        };
        const response = await AuthAPI("/parents/createChild", data);
        if (response.status === "success") {
          getAllChild();
          toast.success("Child added successfully");
          setCheckUserName("");
          setUserName("");
          setPin(["", "", "", ""]);
          localStorage.setItem("childToken", response.token);
        } else {
          setCheckUserName("Username is already exits");
        }
      } catch (error) {
        toast.error("Child can not added successfully");
      }
    }
  };
  const getAllChild = async () => {
    const response = await AuthAPI("/children");
    setChild(response);
  };

  const handleDelete = async (id) => {
    console.log(id);
    const data = {
      method: "DELETE",
    };
    const response = await AuthAPI(`/children/${id}`, data);
    if (response.status === "success") {
      getAllChild();
      toast.success("Child deleted successfully");
    }
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  useEffect(() => {
    getAllChild();
  }, []);

  console.log(child);

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
            <h1 className="text-[25px] font-bold text-center mt-3">
              Parent Dashboard
            </h1>
            <div className="px-[5px]">
              <div className="bg-[#B3C8E580] mt-[45px] rounded-[15px]">
                <div>
                  <h1 className="text-[20px] font-semibold pt-[20px] text-center">
                    Children
                  </h1>
                  <div className='bg-[#A5A5A5] h-[1px] mx-[5px] relative after:absolute after:right-0 after:content-[""] after:w-[5px] after:h-[6px] after:rounded-full after:bg-[#A5A5A5] after:top-[-2px] before:top-[-2px] before:absolute before:left-0 before:content-[""] before:w-[5px] before:h-[6px] before:rounded-full before:bg-[#A5A5A5]'></div>
                </div>
                <div className="p-[5px] mt-[30px]">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-[1px] border-[#A5A5A5]">
                        <th className="text-start font-semibold pl-[6px]">
                          Name
                        </th>
                        <th className="text-center font-semibold">Balance</th>
                        <th className="text-start font-semibold w-[90px]">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {child.data?.data.map((value, item) => (
                        <tr
                          className="border-b-[1px] border-[#A5A5A5]"
                          key={item}
                        >
                          <td className="pl-[6px] pt-[32px] font-semibold text-[14px]">
                            {value.userName}
                          </td>
                          <td className="text-center pt-[32px] font-semibold text-[14px]">
                            {value.totalPoints}
                          </td>
                          <td className="text-center pt-[32px]">
                            <div className="flex gap-[21px]">
                              <button
                                onClick={() =>
                                  navigate(`/editchild/${value._id}`)
                                }
                              >
                                <img src={setting} alt="setting" />
                              </button>
                              <button onClick={() => handleDelete(value._id)}>
                                <img src={trash} alt="trash" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                      <tr>
                        <td className="pb-[100px]"></td>
                        <td className="pb-[100px]"></td>
                        <td className="pb-[100px]"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="bg-[#B3C8E580] mt-[31px] rounded-[15px] px-[11px] pb-[11px]">
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Username"
                  className="border-[#1A4F8B] border-[1px] bg-white rounded-md p-[12px_8px] mt-[50px] w-full"
                />
                {userName === "" && (
                  <p className="text-[red] pt-2">{validateUser}</p>
                )}
                <p className="text-[red]">{checkUserName}</p>
                <div className="flex gap-5 my-2">
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
                {pin === "" && <p className="text-[red]">{validatePin}</p>}
                {pin.length !== 4 && pin !== "" ? (
                  <p className="text-[red]">{checkRange}</p>
                ) : (
                  ""
                )}
                <div className="text-end">
                  <button
                    className="bg-[#EAC41A] rounded-[15px] text-[14px] text-white font-semibold p-[9px_17px] mt-[43px]"
                    onClick={handleChild}
                  >
                    Add Child
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BottomMenu />
    </div>
  );
};

export default ParentDashboard;
