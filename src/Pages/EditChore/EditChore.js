import React, { useState } from 'react';
import { BiChevronLeft } from 'react-icons/bi';
import Editbg from '../../assets/Images/editbg.png';
import Edit from '../../assets/svg/edit.svg';
import avtar1 from '../../assets/Images/avtar1.png';
import avtar2 from '../../assets/Images/avtar2.png';
import BottomMenu from '../../modules/Landing/components/BottomMenu/BottomMenu';

const EditChore = () => {
    const [upload, setUpload] = useState(Editbg);

    const handleChange = (value) => {
        const img = URL.createObjectURL(value.target.files[0])
        console.log("img", img)
        setUpload(img)
    }
    return (
        <div className='max-w-[390px] mx-auto h-screen flex flex-col justify-between'>
            <div className='overflow-y-auto'>
                <div className='p-[45px_45px_0_35px] h-[656px]'>
                    <div className='relative'>
                        <button className='bg-[#EEECEC] w-[33px] h-[33px] rounded-full shadow-shadow100 text-[#33363F] flex justify-center items-center absolute'><BiChevronLeft className='text-[22px]' /></button>
                        <h1 className='text-[25px] font-semibold text-center'>Edit Chore</h1>
                    </div>
                    <div className='mt-[48px] relative w-fit mx-auto'>
                        <input type="file" accept='image/jpg' onChange={(e) => handleChange(e)} className='mx-auto w-[22px] h-[22px] opacity-0 absolute bottom-[10px] right-0 z-10' />
                        <div type='file'>
                            <img src={upload} alt="Upload" className='mx-auto w-[95px] h-[95px] rounded-full object-cover' />
                            <div className='bg-[#F0F0F0] cursor-pointer w-[22px] h-[22px] rounded-full flex justify-center items-center absolute bottom-[10px] right-0'>
                                <img src={Edit} alt="Edit" />
                            </div>
                        </div>
                    </div>
                    <div className='mt-[22px]'>
                        <div>
                            <label className='w-full block font-semibold text-[15px] mb-[6px]'>Chore name</label>
                            <input type="text" defaultValue='Do Homework' className='w-full text-[15px] border-b-[#A5A5A5] border-b-[1px] outline-none' />
                        </div>
                        <div className='mt-[34px]'>
                            <label className='w-full block font-semibold text-[15px] mb-[6px]'>Chore description</label>
                            <input type="text" placeholder='Type here' className='w-full text-[15px] border-b-[#A5A5A5] border-b-[1px] outline-none' />
                        </div>
                        <div className='mt-[34px]'>
                            <label className='w-full block font-semibold text-[15px] mb-[6px]'>Amount of points</label>
                            <input type="text" defaultValue='25' className='w-full text-[15px] border-b-[#A5A5A5] border-b-[1px] outline-none' />
                        </div>
                    </div>
                    <div className='mt-[30px] flex items-center gap-[10px] justify-center'>
                        <p className='font-semibold text-[15px]'>Assign the chore to :</p>
                        <div className='flex gap-3 items-center'>
                            <img src={avtar1} alt="avtar1" />
                            <img src={avtar2} alt="avtar2" />
                        </div>
                    </div>
                    <button className='bg-[#77A4F4] mt-[50px] h-[54px] font-bold text-[17px] rounded-[15px] text-white w-full'>Save Changes</button>
                </div>
            </div>
            <BottomMenu />
        </div>
    )
}

export default EditChore