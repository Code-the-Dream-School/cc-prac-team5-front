/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { BiChevronLeft } from "react-icons/bi";
import Editbg from "../../assets/Images/editbg.png";
import Edit from "../../assets/svg/edit.svg";
import BottomMenu from "../../Components/BottomMenu/BottomMenu";
import { AuthAPI } from "../../common/API";
import Select from "react-select";
import { toast } from "react-toastify";

const EditChore = () => {
  const params = useParams()
  const navigate = useNavigate()
  const [upload, setUpload] = useState(Editbg);
  const [children, setChildren] = useState();
  const [assignedChildren, setAssignedChildren] = useState('');
  const [choreTitle, setChoreTitle] = useState('')
  const [choreDesc, setChoreDesc] = useState('')
  const [chorePoint, setChorePoint] = useState('')
  const [validTitle, setValidTitle] = useState('')
  const [validDecs, setValidDecs] = useState('')
  const [validPoints, setValidPoints] = useState('')

  const handleChange = (value) => {
    const img = URL.createObjectURL(value.target.files[0]);
    console.log("img", img);
    setUpload(img);
  };
  const getTask = async () => {
    const response = await AuthAPI(`/tasks/${params.id}`);
    const getChild = await AuthAPI("/children");
    const options = getChild.data.data.map((value) => ({
      value: value._id,
      label: value.userName,
    }));
    setChoreTitle(response.data.task.title)
    setChoreDesc(response.data.task.description)
    setChorePoint(response.data.task.points)
    setAssignedChildren({
      value: response.data.task.assignedTo._id, 
      label: response.data.task.assignedTo.userName
    })
    setChildren(options);
  };

  const handleAssign = (e) => {
    setAssignedChildren(e);
  };
  const hanldeValidate = () => {
    let valid = false;
    if (choreTitle === "") {
      setValidTitle("Please Enter Title");
      valid = true;
    }
    if (choreDesc === "") {
      setValidDecs("Please Enter Description");
      valid = true;
    }
    if (chorePoint === "") {
      setValidPoints("Please Enter Points");
      valid = true;
    }
    return valid;
  };
  const handleSave = async () => {
    if(!hanldeValidate()){
      try{
        const data = {
          method: "PATCH",
          data: {
            title: choreTitle,
            description: choreDesc,
            points: chorePoint,
            assignedTo: assignedChildren.value
          },
        };
        const response = await AuthAPI(`/tasks/${params.id}`, data);
        if (response.status === "success") {
          navigate('/chore')
          toast.success("Chore edited successfully");
        }
      } catch (error) {
        toast.error("Chore can not edited successfully");
      }
    }
  };

  useEffect(() => {
    getTask();
  }, []);


  return (
    <div className="max-w-[390px] mx-auto h-screen flex flex-col justify-between">
      <div className="overflow-y-auto">
        <div className="p-[45px_45px_0_35px] h-[656px]">
          <div className="relative">
            <button onClick={() => navigate("/parentdashboard")} className="bg-[#EEECEC] w-[33px] h-[33px] rounded-full shadow-shadow100 text-[#33363F] flex justify-center items-center absolute">
              <BiChevronLeft className="text-[22px]" />
            </button>
            <h1 className="text-[25px] font-semibold text-center">
              Edit Chore
            </h1>
          </div>
          <div className="mt-[48px] relative w-fit mx-auto">
            <input
              type="file"
              accept="image/jpg"
              onChange={(e) => handleChange(e)}
              className="mx-auto w-[22px] h-[22px] opacity-0 absolute bottom-[10px] right-0 z-10"
            />
            <div type="file">
              <img
                src={upload}
                alt="Upload"
                className="mx-auto w-[95px] h-[95px] rounded-full object-cover"
              />
              <div className="bg-[#F0F0F0] cursor-pointer w-[22px] h-[22px] rounded-full flex justify-center items-center absolute bottom-[10px] right-0">
                <img src={Edit} alt="Edit" />
              </div>
            </div>
          </div>
          <div className="mt-[22px]">
            <div>
              <label className="w-full block font-semibold text-[15px] mb-[6px]">
                Chore name
              </label>
              <input
                type="text"
                value={choreTitle}
                onChange={e => setChoreTitle(e.target.value)}
                className="w-full text-[15px] border-b-[#A5A5A5] border-b-[1px] outline-none"
              />
              {choreTitle === "" && <p className="text-[red] pt-2">{validTitle}</p>}
            </div>
            <div className="mt-[34px]">
              <label className="w-full block font-semibold text-[15px] mb-[6px]">
                Chore description
              </label>
              <input
                type="text"
                placeholder="Type here"
                value={choreDesc}
                onChange={e => setChoreDesc(e.target.value)}
                className="w-full text-[15px] border-b-[#A5A5A5] border-b-[1px] outline-none"
              />
              {choreDesc === "" && <p className="text-[red] pt-2">{validDecs}</p>}
            </div>
            <div className="mt-[34px]">
              <label className="w-full block font-semibold text-[15px] mb-[6px]">
                Amount of points
              </label>
              <input
                type="text"
                value={chorePoint}
                onChange={e => setChorePoint(e.target.value)}
                className="w-full text-[15px] border-b-[#A5A5A5] border-b-[1px] outline-none"
              />
              {chorePoint === "" && <p className="text-[red] pt-2">{validPoints}</p>}
            </div>
          </div>
          <div className="mt-[30px]  items-center gap-[10px] justify-center">
            <p className="font-semibold text-[15px]">Assign the chore to :</p>
            <div className="gap-3 items-center">
              <Select
                onChange={handleAssign}
                value={assignedChildren}
                name="children"
                options={children}
                className="basic-multi-select"
                classNamePrefix="select"
              />
            </div>
          </div>
          <button onClick={handleSave} className="bg-[#77A4F4] mt-[50px] h-[54px] font-bold text-[17px] rounded-[15px] text-white w-full">
            Save Changes
          </button>
        </div>
      </div>
      <BottomMenu />
    </div>
  );
};

export default EditChore;
