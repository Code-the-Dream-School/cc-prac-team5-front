import React, { Fragment, useEffect, useState } from "react";
import { BiChevronDown, BiChevronLeft } from "react-icons/bi";
import { Listbox, Transition } from "@headlessui/react";
import setting from "../../assets/Images/setting.png";
import { useNavigate } from "react-router-dom";
import BottomMenu from "../../Components/BottomMenu/BottomMenu";
import { AuthAPI } from "../../common/API";
import trash from "../../assets/Images/trash.png";
import { toast } from "react-toastify";

const people = [
  { id: 0, name: "Status" },
  { id: 1, name: "Active" },
  { id: 2, name: "Pending" },
  { id: 3, name: "Approved" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Chore = () => {
  const navigate = useNavigate();
  const [task, setTask] = useState([]);
  const [children, setChildren] = useState([]);
  const [selected, setSelected] = useState(people[0]);

  const getAllTask = async () => {
    const response = await AuthAPI("/tasks");
    const getChild = await AuthAPI("/children");
    setTask(response.data.data);
    setChildren(getChild.data.data);
  };

  const handleDelete = async (id) => {
    const data = {
      method: "DELETE",
    };
    const response = await AuthAPI(`/tasks/${id}`, data);
    if (response.status === "success") {
      getAllTask();
      toast.success("tasks deleted successfully");
    }
  };
  useEffect(() => {
    getAllTask();
  }, []);

  return (
    <div className="max-w-[390px] mx-auto h-screen flex flex-col justify-between">
      <div className="overflow-y-auto">
        <div className="h-[738px]">
          <div className="flex justify-center gap-[30px] p-[45px_45px_0_35px]">
            <button className="bg-[#EEECEC] w-[33px] h-[33px] rounded-full shadow-shadow100 text-[#33363F] flex justify-center items-center">
              <BiChevronLeft className="text-[24px]" />
            </button>
            <h1 className="text-[25px] font-bold text-center">CHORES</h1>
          </div>
          <div className="px-[5px]">
            <div className="bg-[#B3C8E580] mt-[30px] rounded-xl">
              <table className="w-[97%] m-[6px]">
                <thead>
                  <tr>
                    <th className="text-start pt-[19px] font-normal pl-[4px] border-b-[1px] border-[#A5A5A5] text-[18px]">
                      Chore
                    </th>
                    <th className="pt-[19px] font-normal border-b-[1px] border-[#A5A5A5] text-[18px]">
                      Assigned
                    </th>
                    <th className="text-start pt-[19px] font-normal border-b-[1px] border-[#A5A5A5] text-[18px] w-[150px] pl-[31px]">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {task.map((val) => (
                    <tr className="px-[6px]" key={val._id}>
                      <>
                        <td className="border-b-[1px] border-[#A5A5A5] pt-[44px] text-[15px]">
                          {val.title}
                        </td>
                        {children
                          .filter((item) => item._id === val.assignedTo)
                          .map((item) => (
                            <td className="border-b-[1px] border-[#A5A5A5] pt-[44px] text-center text-[18px]">
                              <a href="assigned">{item.userName}</a>
                            </td>
                          ))}
                        <td className="pt-[44px] pl-[31px]">
                          <div className="flex items-center gap-2">
                            <Listbox value={selected} onChange={setSelected}>
                              {({ open }) => (
                                <>
                                  <div className="relative mt-2 w-full">
                                    <Listbox.Button className="relative bg-[#EAC41A] text-[#FFFFFF] rounded-[15px] text-[12px] font-semibold py-[4px] items-center text-start pl-[10px] w-full cursor-pointer">
                                      <span
                                        className="block truncate cursor-pointer"
                                        defaultValue="Status"
                                      >
                                        {selected.name}
                                      </span>
                                      <span className="pointer-events-none absolute inset-y-0 right-[2px] flex items-center">
                                        <BiChevronDown
                                          className="h-5 w-5"
                                          aria-hidden="true"
                                        />
                                      </span>
                                    </Listbox.Button>

                                    <Transition
                                      show={open}
                                      as={Fragment}
                                      leave="transition ease-in duration-100"
                                      leaveFrom="opacity-100"
                                      leaveTo="opacity-0"
                                    >
                                      <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-[15px] bg-[#EAC41A] py-1 text-base shadow-lg text-[12px]">
                                        {people.map((person) => (
                                          <Listbox.Option
                                            key={person.id}
                                            className={({ active }) =>
                                              classNames(
                                                active
                                                  ? "text-white text-[12px]"
                                                  : "text-[12px] text-white ",
                                                "relative select-none text-center cursor-pointer font-semibold"
                                              )
                                            }
                                            value={person}
                                          >
                                            {({ selected4, active }) => (
                                              <>
                                                <span
                                                  className={classNames(
                                                    selected4
                                                      ? "font-semibold"
                                                      : " font-semibold",
                                                    "block truncate"
                                                  )}
                                                >
                                                  {person.name}
                                                </span>
                                              </>
                                            )}
                                          </Listbox.Option>
                                        ))}
                                      </Listbox.Options>
                                    </Transition>
                                  </div>
                                </>
                              )}
                            </Listbox>
                            <button
                              onClick={() => navigate(`/editchore/${val._id}`)}
                            >
                              <img src={setting} alt="setting" />
                            </button>
                            <button onClick={() => handleDelete(val._id)}>
                              <img src={trash} alt="trash" />
                            </button>
                          </div>
                        </td>
                      </>
                    </tr>
                  ))}
                  <tr>
                    <td className="pb-[46px]"></td>
                    <td className="pb-[46px]"></td>
                    <td className="pb-[46px]"></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <button className="bg-[#77A4F4] mt-[20px] h-[54px] font-bold text-[17px] rounded-[15px] text-white w-full">
              Save Changes
            </button>
          </div>
        </div>
      </div>
      <BottomMenu />
    </div>
  );
};

export default Chore;
