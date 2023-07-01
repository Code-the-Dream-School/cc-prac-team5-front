import React from 'react';
import setting from '../../assets/Images/setting.png';
import trash from '../../assets/Images/trash.png';
import { useNavigate } from 'react-router-dom';
import BottomMenu from '../../modules/Landing/components/BottomMenu/BottomMenu';

const ParentDashboard = () => {
    const navigate = useNavigate();
    return (
        <div className='max-w-[390px] mx-auto h-screen flex flex-col justify-between'>
            <div className='overflow-y-auto'>
                <div className='min-h-[708px]'>
                    <div className='pt-[17px]'>
                        <button className='bg-[#BCCEED] text-white font-bold text-[14px] rounded-[15px] w-[80px] h-[35px] flex justify-center items-center ml-auto'>Sign Out</button>
                        <h1 className='text-[25px] font-bold text-center mt-3'>Parent Dashboard</h1>
                        <div className='px-[5px]'>
                            <div className='bg-[#B3C8E580] mt-[45px] rounded-[15px]'>
                                <div>
                                    <h1 className='text-[20px] font-semibold pt-[20px] text-center'>Children</h1>
                                    <div className='bg-[#A5A5A5] h-[1px] mx-[5px] relative after:absolute after:right-0 after:content-[""] after:w-[5px] after:h-[6px] after:rounded-full after:bg-[#A5A5A5] after:top-[-2px] before:top-[-2px] before:absolute before:left-0 before:content-[""] before:w-[5px] before:h-[6px] before:rounded-full before:bg-[#A5A5A5]'></div>
                                </div>
                                <div className='p-[5px] mt-[30px]'>
                                    <table className='w-full'>
                                        <thead>
                                            <tr className='border-b-[1px] border-[#A5A5A5]'>
                                                <th className='text-start font-semibold pl-[6px]'>Name</th>
                                                <th className='text-center font-semibold'>Balance</th>
                                                <th className='text-start font-semibold w-[90px]'>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className='border-b-[1px] border-[#A5A5A5]'>
                                                <td className='pl-[6px] pt-[32px] font-semibold text-[14px]'>User1</td>
                                                <td className='text-center pt-[32px] font-semibold text-[14px]'>50</td>
                                                <td className='text-center pt-[32px]'>
                                                    <div className='flex gap-[21px]'>
                                                        <button onClick={() => navigate("/editchild")}>
                                                            <img src={setting} alt="setting" />
                                                        </button>
                                                        <img src={trash} alt="trash" />
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className='border-b-[1px] border-[#A5A5A5]'>
                                                <td className='pl-[6px] pt-[32px] font-semibold text-[14px]'>User2</td>
                                                <td className='text-center pt-[32px] font-semibold text-[14px]'>300</td>
                                                <td className='text-center pt-[32px]'>
                                                    <div className='flex gap-[21px]'>
                                                        <button onClick={() => navigate("/editchild")}>
                                                            <img src={setting} alt="setting" />
                                                        </button>
                                                        <img src={trash} alt="trash" />
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className='pb-[100px]'></td>
                                                <td className='pb-[100px]'></td>
                                                <td className='pb-[100px]'></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className='bg-[#B3C8E580] mt-[31px] rounded-[15px] px-[11px] pb-[11px]'>
                                <input type="text" placeholder='Username' className='border-[#1A4F8B] border-[1px] bg-white rounded-md p-[12px_8px] mt-[50px] w-full' />
                                <div className='text-end'>
                                    <button className='bg-[#EAC41A] rounded-[15px] text-[14px] text-white font-semibold p-[9px_17px] mt-[43px]'>Add Child</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <BottomMenu />
        </div>
    )
}

export default ParentDashboard