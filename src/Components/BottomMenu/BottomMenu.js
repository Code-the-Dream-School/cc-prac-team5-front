import React from 'react';
import choreCreate from '../../assets/Images/chore-create.png';
import reward from '../../assets/Images/reward.png';
import chore from '../../assets/Images/chores.png';
import star from '../../assets/Images/Star.png';

const BottomMenu = () => {
    return (
        <>
            <div className='shadow-shadow200 rounded-t-xl flex justify-between items-center px-[32px] py-[12px] mt-[20px]'>
                <div>
                    <a href="/newchore" className='cursor-pointer'>
                        <img src={choreCreate} alt='choreCreate' />
                    </a>
                    <p className='text-[8px] font-bold mt-[11px] text-center'>CREATE CHORE</p>
                </div>
                <div>
                    <a href="/rewards" className='cursor-pointer'>
                        <img src={reward} alt='reward' />
                    </a>
                    <p className='text-[8px] font-bold mt-[11px] text-center'>REWARDS</p>
                </div>
                <div>
                    <a href="/editchore" className='cursor-pointer'>
                        <img src={chore} alt='chore' />
                    </a>
                    <p className='text-[8px] font-bold mt-[11px] text-center'>CHORES</p>
                </div>
                <div>
                    <img src={star} alt='star' />
                    <p className='text-[8px] font-bold mt-[11px] text-center'>DASHBOARD</p>
                </div>
            </div>
        </>
    )
}

export default BottomMenu