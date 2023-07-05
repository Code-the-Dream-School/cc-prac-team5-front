import React from 'react';
import reward1 from '../../assets/Images/reward1.png';
import food from '../../assets/Images/food.png';
import star1 from '../../assets/Images/star1.png';
import { BiChevronLeft } from 'react-icons/bi';
import BottomMenu2 from '../../modules/Landing/components/BottomMenu2/BottomMenu2';

const Reward = [
    {
        img: reward1,
        time: 'Tablet time',
        num: '25'
    },
    {
        img: food,
        time: 'Happy meal',
        num: '40'
    },
]


const EarnReward = () => {
    return (
        <div className='max-w-[390px] mx-auto h-screen flex flex-col justify-between bg-bg100 bg-no-repeat'>
            <div className='overflow-y-auto'>
                <div className='sm:p-[45px_35px_0_35px] p-[45px_20px_0_20px] h-[700px]'>
                    <div className='flex justify-center items-center gap-6'>
                        <button className='bg-[#EEECEC] w-[33px] h-[33px] rounded-full shadow-shadow100 text-[#33363F] flex justify-center items-center'><BiChevronLeft className='text-[24px]' /></button>
                        <h1 className='text-[25px] font-semibold text-center'>Earned Rewards</h1>
                    </div>
                    <div className='mt-[57px] flex flex-col gap-[21px]'>
                        {Reward.map((data, key) =>
                            <div key={key} className='bg-[#C9DDF8CC] rounded-[10px] p-[9px_13px] flex items-center sm:gap-[21px] gap-[10px] '>
                                <div className='flex items-start sm:gap-[29px] gap-[14px]'>
                                    <img src={data.img} alt="img" className='w-[75px] h-[75px] rounded-full object-cover' />
                                    <div className='w-[191px]'>
                                        <h1 className='font-bold text-[20px]'>{data.time}</h1>
                                        <div className='mt-[9px] text-[20px] font-medium flex items-center gap-[4px]'>{data.num} <img src={star1} alt="star" /></div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className='mt-[30px] text-center'>
                        <button className='bg-[#BCCEED] rounded-[15px] text-white text-[22px] font-bold w-[223px]'>
                            Points <br /><span className='text-[40px]'>50</span>
                        </button>
                    </div>
                </div>
            </div><BottomMenu2 />
        </div>
    )
}

export default EarnReward