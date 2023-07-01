
import React from 'react';
import reward from '../../assets/Images/reward.png';
import star from '../../assets/Images/Star.png';

const BottomMenu2 = () => {
    return (
        <>
            <div className='shadow-shadow200 rounded-t-xl flex justify-between items-center px-[32px] py-[12px] mt-[20px]'>
                <div>
                    <img src={star} alt='star' />
                    <p className='text-[8px] font-bold mt-[11px] text-center'>MY LIST</p>
                </div>
                <div>
                    <a href="/rewards" className='cursor-pointer'>
                        <img src={reward} alt='reward' />
                    </a>
                    <p className='text-[8px] font-bold mt-[11px] text-center'>REWARDS</p>
                </div>
            </div>
        </>
    )
}

export default BottomMenu2