import React from 'react';
import { BiChevronLeft } from 'react-icons/bi';
import tab from '../../assets/Images/tab.png';
import mc from '../../assets/Images/mc.png';
import ice from '../../assets/Images/ice.png';
import girl from '../../assets/Images/girl.png';
import star from '../../assets/Images/star1.png';
import BottomMenu from '../../modules/Landing/components/BottomMenu/BottomMenu';

const Reward = [
    {
        img: tab,
        time: 'Tablet time',
        num: '25'
    },
    {
        img: mc,
        time: 'Happy meal',
        num: '40'
    },
    {
        img: ice,
        time: 'Ice Cream',
        num: '30'
    },
    {
        img: girl,
        time: 'Visit Katy',
        num: '45'
    },
]

const Rewards2 = () => {
    return (

        <div className='max-w-[390px] mx-auto h-screen flex flex-col justify-between'>
            <div className='overflow-y-auto'>
                <div className='p-[45px_45px_0_35px] h-[690px]'>
                    <div className='flex justify-center items-center gap-6'>
                        <button className='bg-[#EEECEC] w-[33px] h-[33px] rounded-full shadow-shadow100 text-[#33363F] flex justify-center items-center'><BiChevronLeft className='text-[22px]' /></button>
                        <h1 className='text-[25px] font-semibold text-center'>Rewards</h1>
                    </div>
                    <a href="/addnewrewards" className='bg-[#77A4F4] mt-[50px] h-[54px] font-bold text-[17px] rounded-[15px] text-white w-full flex justify-center items-center'>
                        + Add new reward
                    </a>
                    <div className='mt-[57px] flex flex-col gap-[21px]'>
                        {Reward.map((data, key) =>
                            <div key={key} className='bg-[#C9DDF833] rounded-[10px] p-[9px_13px] flex items-start gap-[29px]'>
                                <img src={data.img} alt="img" />
                                <div>
                                    <h1 className='font-bold text-[20px]'>{data.time}</h1>
                                    <div className='mt-[9px] text-[20px] font-medium flex items-center gap-[4px]'>{data.num} <img src={star} alt="star" /></div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <BottomMenu />
        </div>
    )
}

export default Rewards2