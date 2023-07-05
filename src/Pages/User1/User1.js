import React, { Fragment, useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import { Listbox, Transition } from '@headlessui/react';
import BottomMenu2 from '../../modules/Landing/components/BottomMenu2/BottomMenu2';

const people = [
    { id: 0, name: 'Status' },
    { id: 1, name: 'Started' },
    { id: 2, name: 'Complate' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const User1 = () => {
    const [selected, setSelected] = useState(people[0])
    const [selected2, setSelected2] = useState(people[0])
    const [selected3, setSelected3] = useState(people[0])
    const [selected4, setSelected4] = useState(people[0]);
    const [selected5, setSelected5] = useState(people[0]);
    return (
        <div className='max-w-[390px] mx-auto h-screen flex flex-col justify-between'>
            <div className='overflow-y-auto'>
                <div className='h-[708px]'>
                    <div className='bg-bg100 bg-no-repeat pt-[56px] px-[12px]'>
                        <div className='flex justify-between items-center'>
                            <button className='bg-[#BCCEED] text-white font-bold text-[14px] rounded-[15px] w-[80px] h-[35px] flex justify-center items-center'>Profiles</button>
                            <button className='bg-[#BCCEED] text-white font-bold text-[14px] rounded-[15px] w-[80px] h-[35px] flex justify-center items-center'>Sign Out</button>
                        </div>
                        <h1 className='text-[25px] font-bold text-center text-white mt-[10px]'>Hi, User1</h1>
                        <div className='px-[5px]'>
                            <div className='bg-[#B3C8E5D9] mt-[57px] rounded-xl p-[11px]'>
                                <h1 className='font-bold text-[20px] border-b-[#A5A5A5] border-b-[1px] text-center'>User1’s Chores</h1>
                                <div className='flex w-full gap-[15px] items-end mt-[48px]'>
                                    <Listbox value={selected} onChange={setSelected}>
                                        {({ open }) => (
                                            <>
                                                <div className="relative w-[82px]">
                                                    <Listbox.Button className="relative bg-[#EAC41A] text-[#FFFFFF] rounded-[15px] text-[12px] font-semibold py-[4px] items-center text-start pl-[6px] w-[82px] cursor-pointer">
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
                                    <div className='border-b-[1px] border-[#A5A5A5] text-[15px] w-full'>Do Homework</div>
                                </div>
                                <div className='flex w-full gap-[15px] items-end mt-[48px]'>
                                    <Listbox value={selected2} onChange={setSelected2}>
                                        {({ open }) => (
                                            <>
                                                <div className="relative w-[82px]">
                                                    <Listbox.Button className="relative bg-[#EAC41A] text-[#FFFFFF] rounded-[15px] text-[12px] font-semibold py-[4px] items-center text-start pl-[6px] w-[82px] cursor-pointer">
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
                                    <div className='border-b-[1px] border-[#A5A5A5] text-[15px] w-full'>Do dishes</div>
                                </div>
                                <div className='flex w-full gap-[15px] items-end mt-[48px]'>
                                    <Listbox value={selected4} onChange={setSelected4}>
                                        {({ open }) => (
                                            <>
                                                <div className="relative w-[82px]">
                                                    <Listbox.Button className="relative bg-[#EAC41A] text-[#FFFFFF] rounded-[15px] text-[12px] font-semibold py-[4px] items-center text-start pl-[6px] w-[82px] cursor-pointer">
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
                                    <div className='border-b-[1px] border-[#A5A5A5] text-[15px] w-full'>Clean Room</div>
                                </div>
                                <div className='flex w-full gap-[15px] items-end mt-[48px]'>
                                    <Listbox value={selected5} onChange={setSelected5}>
                                        {({ open }) => (
                                            <>
                                                <div className="relative w-[82px]">
                                                    <Listbox.Button className="relative bg-[#EAC41A] text-[#FFFFFF] rounded-[15px] text-[12px] font-semibold py-[4px] items-center text-start pl-[6px] w-[82px] cursor-pointer">
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
                                    <div className='border-b-[1px] border-[#A5A5A5] text-[15px] w-full'>Clean Room</div>
                                </div>
                                <div className='flex w-full gap-[15px] items-end mt-[48px] mb-[50px]'>
                                    <Listbox value={selected3} onChange={setSelected3}>
                                        {({ open }) => (
                                            <>
                                                <div className="relative w-[82px]">
                                                    <Listbox.Button className="relative bg-[#EAC41A] text-[#FFFFFF] rounded-[15px] text-[12px] font-semibold py-[4px] items-center text-start pl-[6px] w-[82px] cursor-pointer">
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
                                    <div className='border-b-[1px] border-[#A5A5A5] text-[15px] w-full'>Feed dog</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <BottomMenu2 />
        </div>
    )
}

export default User1