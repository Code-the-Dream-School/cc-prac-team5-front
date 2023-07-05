import React, { Fragment, useState } from 'react';
import { BiChevronDown, BiChevronLeft } from 'react-icons/bi';
import { Listbox, Transition } from '@headlessui/react'
import setting from '../../assets/Images/setting.png';
import { useNavigate } from 'react-router-dom';
import BottomMenu from '../../modules/Landing/components/BottomMenu/BottomMenu';

const people = [
    { id: 0, name: 'Status' },
    { id: 1, name: 'Active' },
    { id: 2, name: 'Pending' },
    { id: 3, name: 'Approved' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Chore = () => {
    const [selected, setSelected] = useState(people[0]);
    const [selected2, setSelected2] = useState(people[0]);
    const [selected3, setSelected3] = useState(people[0]);
    const [selected4, setSelected4] = useState(people[0]);
    const [selected5, setSelected5] = useState(people[0]);
    const navigate = useNavigate();
    return (
        <div className='max-w-[390px] mx-auto h-screen flex flex-col justify-between'>
            <div className='overflow-y-auto'>
                <div className='h-[738px]'>
                    <div className='flex justify-center gap-[30px] p-[45px_45px_0_35px]'>
                        <button className='bg-[#EEECEC] w-[33px] h-[33px] rounded-full shadow-shadow100 text-[#33363F] flex justify-center items-center'><BiChevronLeft className='text-[24px]' /></button>
                        <h1 className='text-[25px] font-bold text-center'>CHORES</h1>
                    </div>
                    <div className='px-[5px]'>
                        <div className='bg-[#B3C8E580] mt-[30px] rounded-xl'>
                            <table className='w-[97%] m-[6px]'>
                                <thead>
                                    <tr>
                                        <th className='text-start pt-[19px] font-normal pl-[4px] border-b-[1px] border-[#A5A5A5] text-[18px]'>Chore</th>
                                        <th className='pt-[19px] font-normal border-b-[1px] border-[#A5A5A5] text-[18px]'>Assigned</th>
                                        <th className='text-start pt-[19px] font-normal border-b-[1px] border-[#A5A5A5] text-[18px] w-[150px] pl-[31px]'>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='px-[6px]'>
                                        <td className='border-b-[1px] border-[#A5A5A5] pt-[44px] text-[15px]'>Clean Room</td>
                                        <td className='border-b-[1px] border-[#A5A5A5] pt-[44px] text-center text-[18px]'>
                                            <a href="/user1">User1</a>
                                        </td>
                                        <td className='pt-[44px] pl-[31px]'>
                                            <div className='flex items-center gap-2'>
                                                <Listbox value={selected4} onChange={setSelected4}>
                                                    {({ open }) => (
                                                        <>
                                                            <div className="relative mt-2 w-full">
                                                                <Listbox.Button className="relative bg-[#EAC41A] text-[#FFFFFF] rounded-[15px] text-[12px] font-semibold py-[4px] items-center text-start pl-[10px] w-full cursor-pointer">
                                                                    <span className="block truncate cursor-pointer" defaultValue='Status'>{selected4.name}</span>
                                                                    <span className="pointer-events-none absolute inset-y-0 right-[2px] flex items-center">
                                                                        <BiChevronDown className="h-5 w-5" aria-hidden="true" />
                                                                    </span>
                                                                </Listbox.Button>

                                                                <Transition
                                                                    show={open}
                                                                    as={Fragment}
                                                                    leave="transition ease-in duration-100"
                                                                    leaveFrom="opacity-100"
                                                                    leaveTo="opacity-0"
                                                                >
                                                                    <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-[15px] bg-[#EAC41A] py-1 text-base shadow-lg text-[12px]">
                                                                        {people.map((person) => (
                                                                            <Listbox.Option
                                                                                key={person.id}
                                                                                className={({ active }) =>
                                                                                    classNames(
                                                                                        active ? 'text-white text-[12px]' : 'text-[12px] text-white ',
                                                                                        'relative select-none text-center cursor-pointer font-semibold'
                                                                                    )
                                                                                }
                                                                                value={person}
                                                                            >
                                                                                {({ selected4, active }) => (
                                                                                    <>
                                                                                        <span className={classNames(selected4 ? 'font-semibold' : ' font-semibold', 'block truncate')}>
                                                                                            {person.name}
                                                                                        </span>
                                                                                    </>
                                                                                )}
                                                                            </Listbox.Option>
                                                                        ))}
                                                                    </Listbox.Options>
                                                                </Transition>
                                                            </div>
                                                        </>
                                                    )}
                                                </Listbox>
                                                <button onClick={() => navigate("/editchore")}>
                                                    <img src={setting} alt="setting" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className='px-[6px]'>
                                        <td className='border-b-[1px] border-[#A5A5A5] pt-[60px] text-[15px]'>Walk dog</td>
                                        <td className='border-b-[1px] border-[#A5A5A5] pt-[60px] text-center text-[18px]'>
                                            <a href="/user1">User1</a>
                                        </td>
                                        <td className='pt-[60px] pl-[31px]'>
                                            <div className='flex items-center gap-2'>
                                                <Listbox value={selected5} onChange={setSelected5}>
                                                    {({ open }) => (
                                                        <>
                                                            <div className="relative mt-2 w-full">
                                                                <Listbox.Button className="relative bg-[#EAC41A] text-[#FFFFFF] rounded-[15px] text-[12px] font-semibold py-[4px] items-center text-start pl-[10px] w-full cursor-pointer">
                                                                    <span className="block truncate cursor-pointer" defaultValue='Status'>{selected5.name}</span>
                                                                    <span className="pointer-events-none absolute inset-y-0 right-[2px] flex items-center">
                                                                        <BiChevronDown className="h-5 w-5" aria-hidden="true" />
                                                                    </span>
                                                                </Listbox.Button>

                                                                <Transition
                                                                    show={open}
                                                                    as={Fragment}
                                                                    leave="transition ease-in duration-100"
                                                                    leaveFrom="opacity-100"
                                                                    leaveTo="opacity-0"
                                                                >
                                                                    <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-[15px] bg-[#EAC41A] py-1 text-base shadow-lg text-[12px]">
                                                                        {people.map((person) => (
                                                                            <Listbox.Option
                                                                                key={person.id}
                                                                                className={({ active }) =>
                                                                                    classNames(
                                                                                        active ? 'text-white text-[12px]' : 'text-[12px] text-white ',
                                                                                        'relative select-none text-center cursor-pointer font-semibold'
                                                                                    )
                                                                                }
                                                                                value={person}
                                                                            >
                                                                                {({ selected4, active }) => (
                                                                                    <>
                                                                                        <span className={classNames(selected5 ? 'font-semibold' : ' font-semibold', 'block truncate')}>
                                                                                            {person.name}
                                                                                        </span>
                                                                                    </>
                                                                                )}
                                                                            </Listbox.Option>
                                                                        ))}
                                                                    </Listbox.Options>
                                                                </Transition>
                                                            </div>
                                                        </>
                                                    )}
                                                </Listbox>
                                                <button onClick={() => navigate("/editchore")}>
                                                    <img src={setting} alt="setting" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className='px-[6px]'>
                                        <td className='border-b-[1px] border-[#A5A5A5] pt-[60px] text-[15px]'>Do Homework</td>
                                        <td className='border-b-[1px] border-[#A5A5A5] pt-[60px] text-center text-[18px]'>
                                            <a href="/user1">User1</a>
                                        </td>
                                        <td className='pt-[60px] pl-[31px]'>
                                            <div className='flex items-center gap-2'>
                                                <Listbox value={selected} onChange={setSelected}>
                                                    {({ open }) => (
                                                        <>
                                                            <div className="relative mt-2 w-full">
                                                                <Listbox.Button className="relative bg-[#EAC41A] text-[#FFFFFF] rounded-[15px] text-[12px] font-semibold py-[4px] items-center text-start pl-[10px] w-full cursor-pointer">
                                                                    <span className="block truncate cursor-pointer" defaultValue='Status'>{selected.name}</span>
                                                                    <span className="pointer-events-none absolute inset-y-0 right-[2px] flex items-center">
                                                                        <BiChevronDown className="h-5 w-5" aria-hidden="true" />
                                                                    </span>
                                                                </Listbox.Button>

                                                                <Transition
                                                                    show={open}
                                                                    as={Fragment}
                                                                    leave="transition ease-in duration-100"
                                                                    leaveFrom="opacity-100"
                                                                    leaveTo="opacity-0"
                                                                >
                                                                    <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-[15px] bg-[#EAC41A] py-1 text-base shadow-lg text-[12px]">
                                                                        {people.map((person) => (
                                                                            <Listbox.Option
                                                                                key={person.id}
                                                                                className={({ active }) =>
                                                                                    classNames(
                                                                                        active ? 'text-white text-[12px]' : 'text-[12px] text-white ',
                                                                                        'relative select-none text-center cursor-pointer font-semibold'
                                                                                    )
                                                                                }
                                                                                value={person}
                                                                            >
                                                                                {({ selected, active }) => (
                                                                                    <>
                                                                                        <span className={classNames(selected ? 'font-semibold' : ' font-semibold', 'block truncate')}>
                                                                                            {person.name}
                                                                                        </span>
                                                                                    </>
                                                                                )}
                                                                            </Listbox.Option>
                                                                        ))}
                                                                    </Listbox.Options>
                                                                </Transition>
                                                            </div>
                                                        </>
                                                    )}
                                                </Listbox>
                                                <button onClick={() => navigate("/editchore")}>
                                                    <img src={setting} alt="setting" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className='px-[6px]'>
                                        <td className='border-b-[1px] border-[#A5A5A5] pt-[60px] text-[15px]'>Feed dog</td>
                                        <td className='border-b-[1px] border-[#A5A5A5] pt-[60px] text-center text-[18px]'>
                                            <a href="/user1">User1</a>
                                        </td>
                                        <td className='pt-[60px] pl-[31px]'>
                                            <div className='flex items-center gap-2'>
                                                <Listbox value={selected2} onChange={setSelected2}>
                                                    {({ open }) => (
                                                        <>
                                                            <div className="relative mt-2 w-full">
                                                                <Listbox.Button className="relative bg-[#EAC41A] text-[#FFFFFF] rounded-[15px] text-[12px] font-semibold py-[4px] items-center text-start pl-[10px] w-full cursor-pointer">
                                                                    <span className="block truncate cursor-pointer" defaultValue='Status'>{selected2.name}</span>
                                                                    <span className="pointer-events-none absolute inset-y-0 right-[2px] flex items-center">
                                                                        <BiChevronDown className="h-5 w-5" aria-hidden="true" />
                                                                    </span>
                                                                </Listbox.Button>

                                                                <Transition
                                                                    show={open}
                                                                    as={Fragment}
                                                                    leave="transition ease-in duration-100"
                                                                    leaveFrom="opacity-100"
                                                                    leaveTo="opacity-0"
                                                                >
                                                                    <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-[15px] bg-[#EAC41A] py-1 text-base shadow-lg text-[12px]">
                                                                        {people.map((person) => (
                                                                            <Listbox.Option
                                                                                key={person.id}
                                                                                className={({ active }) =>
                                                                                    classNames(
                                                                                        active ? 'text-white text-[12px]' : 'text-[12px] text-white ',
                                                                                        'relative select-none text-center cursor-pointer font-semibold'
                                                                                    )
                                                                                }
                                                                                value={person}
                                                                            >
                                                                                {({ selected2, active }) => (
                                                                                    <>
                                                                                        <span className={classNames(selected2 ? 'font-semibold' : ' font-semibold', 'block truncate')}>
                                                                                            {person.name}
                                                                                        </span>
                                                                                    </>
                                                                                )}
                                                                            </Listbox.Option>
                                                                        ))}
                                                                    </Listbox.Options>
                                                                </Transition>
                                                            </div>
                                                        </>
                                                    )}
                                                </Listbox>
                                                <button onClick={() => navigate("/editchore")}>
                                                    <img src={setting} alt="setting" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className='px-[6px]'>
                                        <td className='border-b-[1px] border-[#A5A5A5] pt-[60px] text-[15px]'>Sweep floor</td>
                                        <td className='border-b-[1px] border-[#A5A5A5] pt-[60px] text-center text-[18px]'>unassigned</td>
                                        <td className='pt-[60px] pl-[31px]'>
                                            <div className='flex items-center gap-2'>
                                                <Listbox value={selected3} onChange={setSelected3}>
                                                    {({ open }) => (
                                                        <>
                                                            <div className="relative mt-2 w-full">
                                                                <Listbox.Button className="relative bg-[#EAC41A] text-[#FFFFFF] rounded-[15px] text-[12px] font-semibold py-[4px] items-center text-start pl-[10px] w-full cursor-pointer">
                                                                    <span className="block truncate cursor-pointer" defaultValue='Status'>{selected3.name}</span>
                                                                    <span className="pointer-events-none absolute inset-y-0 right-[2px] flex items-center">
                                                                        <BiChevronDown className="h-5 w-5" aria-hidden="true" />
                                                                    </span>
                                                                </Listbox.Button>

                                                                <Transition
                                                                    show={open}
                                                                    as={Fragment}
                                                                    leave="transition ease-in duration-100"
                                                                    leaveFrom="opacity-100"
                                                                    leaveTo="opacity-0"
                                                                >
                                                                    <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-[15px] bg-[#EAC41A] py-1 text-base shadow-lg text-[12px]">
                                                                        {people.map((person) => (
                                                                            <Listbox.Option
                                                                                key={person.id}
                                                                                className={({ active }) =>
                                                                                    classNames(
                                                                                        active ? 'text-white text-[12px]' : 'text-[12px] text-white ',
                                                                                        'relative select-none text-center cursor-pointer font-semibold'
                                                                                    )
                                                                                }
                                                                                value={person}
                                                                            >
                                                                                {({ selected3, active }) => (
                                                                                    <>
                                                                                        <span className={classNames(selected3 ? 'font-semibold' : ' font-semibold', 'block truncate')}>
                                                                                            {person.name}
                                                                                        </span>
                                                                                    </>
                                                                                )}
                                                                            </Listbox.Option>
                                                                        ))}
                                                                    </Listbox.Options>
                                                                </Transition>
                                                            </div>
                                                        </>
                                                    )}
                                                </Listbox>
                                                <button onClick={() => navigate("/editchore")}>
                                                    <img src={setting} alt="setting" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='pb-[46px]'></td>
                                        <td className='pb-[46px]'></td>
                                        <td className='pb-[46px]'></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <button class="bg-[#77A4F4] mt-[20px] h-[54px] font-bold text-[17px] rounded-[15px] text-white w-full">Save Changes</button>
                    </div>
                </div>
            </div>
            <BottomMenu />
        </div>
    )
}

export default Chore