import React, { Fragment } from 'react'
import {FcSearch,FcEditImage,FcSettings, FcCancel} from "react-icons/fc";
import { BiSolidMessageError } from "react-icons/bi";
import {  MdNotificationsActive  } from "react-icons/md";
import { Popover,Transition, Menu } from '@headlessui/react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';



export default function Header() {   
 const navigate = useNavigate()



  return (
    <div className='bg-white h-16 px-4 flex justify-between items-center '>
        <div className='relative'>
            <FcSearch fontsize={24} 
            className='text-gray-400 absolute mt-3 ml-1 '/>
            <input type='text' placeholder='Search....' 
            className='text-sm focus:outline-none active:outline-none h-10 w-[80rem] border border-gray-400 rounded-sm px-7 '/>
        </div>


        <div className='flex items-center justify-end gap-2 ml-40 mr-2'>
        <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={classNames(open && 'bg-gray-100',
                'p-1.5 rounded-sm inline-flex items-center text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100')}
            >
            <BiSolidMessageError fontSize={24}/>
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className=' absolute right-0 z-10 mt-2.5 w-88'>
                <div className='bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5  px-2 py-2.5 '>
                <strong className='text-gray-700 font-bold'>Messsages!</strong>
                <div className='mt-2 py-1 text-sm '>This is message panel</div>
                </div>
                </Popover.Panel>               
            </Transition>
            </>
            )}
            </Popover>

           <Popover className="relative">
           {({ open }) => (
           <>
            <Popover.Button
              className={
                ' p-1.5 rounded-sm inline-flex items-center text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100 '}
            >
            <MdNotificationsActive fontSize={24}/> 
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className='absolute right-0 z-10 mt-2.5 w-88'>
                <div className='bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5  px-2 py-2.5 '>
                <strong className='text-gray-700 font-bold'>Notifications!</strong>
                <div className='mt-2 py-1 text-sm '>This is Notofication panel</div>
                </div>
                </Popover.Panel>               
              </Transition>
            </>
            )}
            </Popover>
            

            {/* profile image */}
            <Menu as="div" className="relative">
           <div className='inline-flex'>
           <Menu.Button className="inline-flex rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-400">
            {/* <span className=''>Open User Menu</span> */}
            <div className='h-8 w-10 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center'  
              style={{backgroundImage:'url("https://img.freepik.com/premium-photo/woman-blue-blazer-holds-tablet-her-hands_889227-11422.jpg?w=996")'}}>
                <span className='sr-only '>MARIYANO</span>
            </div>
          </Menu.Button>
        </div>  
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="origin-top-right 2-10 absolute right-0 mt-2 w-48 rounded-sm shadow-md p-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              
              <Menu.Item>
                {({ active }) => (
                 <div className={classNames(active && 'bg-gray-100','text-gray-700 focus:bg-gray-200 cursor-pointer round-sm px-4 py-2')}
                     onClick={() => navigate('/profile')}>
                    < FcEditImage className=' inline-block h-4 mb-1 mr-2'/> Your Profile 
                  </div>
                )}
              </Menu.Item>  
              
              <Menu.Item>
                {({ active }) => (
                 <div className={classNames(active && 'bg-gray-100','text-gray-700 focus:bg-gray-200 cursor-pointer round-sm px-4 py-2')}
                     onClick={() => navigate('/settings')}>
                   <FcSettings className=' inline-block h-4 mb-1 mr-2'/>   Settings 
                  </div>
                )}
              </Menu.Item>  

              <Menu.Item>
                {({ active }) => (
                 <div className={classNames(active && 'bg-gray-100','text-gray-700 focus:bg-gray-200 cursor-pointer round-sm px-4 py-2')}
                     onClick={() => navigate('/logout')}>
                   <FcCancel className=' inline-block h-4 mb-1 mr-2'/>  Logout
                  </div>
                )}
              </Menu.Item>  



            </Menu.Items>    
            </Transition>
        </Menu>
        </div>
    </div>
  )
}
