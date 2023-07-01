import React, { useState } from 'react';
import { BiChevronLeft } from 'react-icons/bi';
import Upload from '../../assets/Images/upload.png';
import avtar1 from '../../assets/Images/avtar1.png';
import avtar2 from '../../assets/Images/avtar2.png';
import BottomMenu from '../../modules/Landing/components/BottomMenu/BottomMenu';

const NewChore = () => {
    const [upload, setUpload] = useState(Upload)

    const handleChange = (value) => {
        const img = URL.createObjectURL(value.target.files[0])
        console.log("img", img)
        setUpload(img)
    }
    return (
        <div className='max-w-[390px] mx-auto h-screen flex flex-col justify-between'>
            <div className='overflow-y-auto'>
                <div className='p-[45px_45px_0_35px] h-[700px]'>
                    <div className='relative'>
                        <button className='bg-[#EEECEC] w-[33px] h-[33px] rounded-full shadow-shadow100 text-[#33363F] flex justify-center items-center absolute'><BiChevronLeft className='text-[22px]' /></button>
                        <h1 className='text-[25px] font-semibold text-center ml-[25px]'>Create New Chore</h1>
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

export default NewChore