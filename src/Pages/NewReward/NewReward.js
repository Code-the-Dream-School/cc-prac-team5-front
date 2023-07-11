import React, { useState } from 'react';
import { BiChevronLeft } from 'react-icons/bi';
import { AuthAPI } from "../../common/API";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Upload from '../../assets/Images/upload.png';
import BottomMenu from '../../Components/BottomMenu/BottomMenu';

const NewReward = () => {
    const navigate = useNavigate()
    const [upload, setUpload] = useState(Upload)
    const [rTitle, setRTitle] = useState('')
    const [rDescription, setRDescription] = useState('')
    const [rPoints, setRPoints] = useState('')
    const [validRTitle, setValidRTitle] = useState('')
    const [validRDecs, setValidRDecs] = useState('')
    const [validRPoints, setValidRPoints] = useState('')

    const handleChange = (value) => {
        const img = URL.createObjectURL(value.target.files[0])
        console.log("img", img)
        setUpload(img)
    }
    const hanldeValidate = () => {
        let valid = false;
        if (rTitle === "") {
          setValidRTitle("Please Enter Title");
          valid = true;
        }
        if (rDescription === "") {
          setValidRDecs("Please Enter Description");
          valid = true;
        }
        if (rPoints === "") {
          setValidRPoints("Please Enter Points");
          valid = true;
        }
        return valid;
      };
    const handleSave = async () => {
        if(!hanldeValidate()){
            try{
              const data = {
                method: "POST",
                data: {
                  title: rTitle,
                  description: rDescription,
                  points: rPoints
                },
              };
              const response = await AuthAPI(`/rewards`, data);
              if (response.status === "success") {
                navigate('/rewards2')
                toast.success("Rewards added successfully");
              }
            } catch (error) {
              toast.error("Rewards can not added successfully");
            }
        }
      };

    return (
        <div className='max-w-[390px] mx-auto h-screen flex flex-col justify-between'>
            <div className='overflow-y-auto'>
                <div className='p-[45px_45px_0_35px] h-[656px]'>
                    <div className='relative'>
                        <button className='bg-[#EEECEC] w-[33px] h-[33px] rounded-full shadow-shadow100 text-[#33363F] flex justify-center items-center absolute'><BiChevronLeft className='text-[22px]' /></button>
                        <h1 className='text-[25px] font-semibold text-center'>Add new reward</h1>
                    </div>
                    <div className='mt-1 mx-auto'>
                        <input type="file" accept='image/jpg' onChange={(e) => handleChange(e)} className='mx-auto w-[121px] h-[121px] opacity-0 absolute rounded-full left-[49.5%] translate-x-[-50%]' />
                        <div type='file'>
                            <img src={upload} alt="Upload" className='mx-auto w-[121px] h-[121px] rounded-full object-cover' />
                            <p className='text-[#7F7F7F] text-center text-[15px]'>Upload Chore image</p>
                        </div>
                    </div>
                    <div className='mt-[22px]'>
                        <div>
                            <label className='w-full block font-semibold text-[15px] mb-[6px]'>Reward name</label>
                            <input 
                                type="text" 
                                value={rTitle}
                                onChange={e => setRTitle(e.target.value)} 
                                className='w-full text-[15px] border-b-[#A5A5A5] border-b-[1px] outline-none' 
                            />
                            {rTitle === "" && <p className="text-[red] pt-2">{validRTitle}</p>}
                        </div>
                        <div className='mt-[34px]'>
                            <label className='w-full block font-semibold text-[15px] mb-[6px]'>Reward Description</label>
                            <input 
                                type="text"
                                value={rDescription}
                                onChange={e => setRDescription(e.target.value)}
                                placeholder='Type here' 
                                className='w-full text-[15px] border-b-[#A5A5A5] border-b-[1px] outline-none' 
                            />
                            {rDescription === "" && <p className="text-[red] pt-2">{validRDecs}</p>}
                        </div>
                        <div className='mt-[34px]'>
                            <label className='w-full block font-semibold text-[15px] mb-[6px]'>Point</label>
                            <input 
                                type="number" 
                                value={rPoints}
                                onChange={e => setRPoints(e.target.value)}
                                className='w-full text-[15px] border-b-[#A5A5A5] border-b-[1px] outline-none' 
                            />
                            {rPoints === "" && <p className="text-[red] pt-2">{validRPoints}</p>}
                        </div>
                    </div>
                    <button onClick={handleSave} className='bg-[#77A4F4] mt-[50px] h-[54px] font-bold text-[17px] rounded-[15px] text-white w-full'>Save Changes</button>
                </div>
            </div>
            <BottomMenu />
        </div>
    )
}

export default NewReward