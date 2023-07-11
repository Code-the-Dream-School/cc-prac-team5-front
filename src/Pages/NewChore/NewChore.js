import React, { useState, useEffect } from "react";
import { BiChevronLeft } from "react-icons/bi";
import Upload from "../../assets/Images/upload.png";
import BottomMenu from "../../Components/BottomMenu/BottomMenu";
import Select from "react-select";
import { AuthAPI } from "../../common/API";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const NewChore = () => {
  const navigate = useNavigate()
  const [upload, setUpload] = useState(Upload);
  const [children, setChildren] = useState();
  const [assignedChildren, setAssignedChildren] = useState();
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [points, setPoints] = useState('')
  const [validTitle, setValidTitle] = useState('')
  const [validDecs, setValidDecs] = useState('')
  const [validPoints, setValidPoints] = useState('')
  const [validAssignChild, setValidAssignChild] = useState('')

  const handleChange = (value) => {
    const img = URL.createObjectURL(value.target.files[0]);
    console.log("img", img);
    setUpload(img);
  };

  const hanldeValidate = () => {
    let valid = false;
    if (title === "") {
      setValidTitle("Please Enter Title");
      valid = true;
    }
    if (description === "") {
      setValidDecs("Please Enter Description");
      valid = true;
    }
    if (points === "") {
      setValidPoints("Please Enter Points");
      valid = true;
    }
    if(assignedChildren === undefined){
      setValidAssignChild("Please Select Chore")
    }
    return valid;
  };
  console.log('assignedChildren', assignedChildren)
  const getAllChild = async () => {
    const response = await AuthAPI("/children");
    const options = response.data.data.map((value) => ({
      value: value._id,
      label: value.userName,
    }));

    setChildren(options);
  };

  useEffect(() => {
    getAllChild();
  }, []);

  const handleAssign = (e) => {
    setAssignedChildren(e);
  };

  const handleSave = async () => {
    if (!hanldeValidate()) {
      try{
        const data = {
          method: "POST",
          data: {
            title: title,
            description: description,
            points: points,
            assignedTo: assignedChildren.value
          },
        };
        const response = await AuthAPI(`/tasks`, data);
        if (response.status === "success") {
          navigate('/chore')
          toast.success("Chore added successfully");
        }
      } catch (error) {
        toast.error("Chore can not added successfully");
      }
    }
  };

  return (
    <div className="max-w-[390px] mx-auto h-screen flex flex-col justify-between">
      <div className="overflow-y-auto">
        <div className="p-[45px_45px_0_35px] h-[700px]">
          <div className="relative">
            <button onClick={() => navigate("/parentdashboard")} className="bg-[#EEECEC] w-[33px] h-[33px] rounded-full shadow-shadow100 text-[#33363F] flex justify-center items-center absolute">
              <BiChevronLeft className="text-[22px]" />
            </button>
            <h1 className="text-[25px] font-semibold text-center ml-[25px]">
              Create New Chore
            </h1>
          </div>
          <div className="mt-1 mx-auto">
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
          <div className="mt-[22px]">
            <div>
              <label className="w-full block font-semibold text-[15px] mb-[6px]">
                Chore name
              </label>
              <input
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
                className="w-full text-[15px] border-b-[#A5A5A5] border-b-[1px] outline-none"
              />
              {title === "" && <p className="text-[red] pt-2">{validTitle}</p>}
            </div>
            <div className="mt-[34px]">
              <label className="w-full block font-semibold text-[15px] mb-[6px]">
                Chore description
              </label>
              <input
                type="text"
                value={description}
                onChange={e => setDescription(e.target.value)}
                placeholder="Type here"
                className="w-full text-[15px] border-b-[#A5A5A5] border-b-[1px] outline-none"
              />
              {description === "" && <p className="text-[red] pt-2">{validDecs}</p>}
            </div>
            <div className="mt-[34px]">
              <label className="w-full block font-semibold text-[15px] mb-[6px]">
                Amount of points
              </label>
              <input
                type="number"
                value={points}
                onChange={e => setPoints(e.target.value)}
                defaultValue="25"
                className="w-full text-[15px] border-b-[#A5A5A5] border-b-[1px] outline-none"
              />
              {points === "" && <p className="text-[red] pt-2">{validPoints}</p>}
            </div>
          </div>
          <div className="mt-[30px] items-center gap-[10px] justify-center">
            <p className="font-semibold text-[15px]">Assign the chore to :</p>
            <div className=" gap-3 items-center">
              <Select
                onChange={handleAssign}
                defaultValue={assignedChildren}
                name="children"
                options={children}
                className="basic-multi-select"
                classNamePrefix="select"
              />
              {assignedChildren === undefined && <p className="text-[red] pt-2">{validAssignChild}</p>}
            </div>
          </div>
          <button
            onClick={handleSave}
            className="bg-[#77A4F4] mt-[50px] h-[54px] font-bold text-[17px] rounded-[15px] text-white w-full"
          >
            Save Changes
          </button>
        </div>
      </div>
      <BottomMenu />
    </div>
  );
};

export default NewChore;
