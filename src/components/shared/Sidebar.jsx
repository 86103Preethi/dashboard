//rfc
import React from 'react'
import { FcCloseUpMode,FcCancel } from "react-icons/fc";
import { Link, useLocation } from 'react-router-dom';
import { DASHBOARD_SIDEBAR_BOTTOM_LINKS, DASHBOARD_SIDEBAR_LINKS } from '../../lib/const/navigation';
import classNames from 'classnames';

const linkclasses='text-white flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'

export default function Sidebar() {

  return (
    <div className='flex flex-col bg-black w-60 p-3 text-white'>
    
      {/* LOGO */}
      <div className='flex items-center gap-2 px-1 py-3'>   
      <FcCloseUpMode fontSize={34}/>
      <span className= ' text-neutral-200 text-2xl font-bold'>STATIC's</span>
       </div>
      

      {/* sidebar1 */}
      <div className='flex-1 py-8 flex flex-col gap-0.5'>
        {DASHBOARD_SIDEBAR_LINKS.map((item) =>(
            <SidebarLink key={item.key} item={item} />  
        ))}
      </div>


       {/* sidebar2 */}
      <div className='flex flex-col gap-0.5 pt-2 border-t border-neutral-700' >
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
            <SidebarLink key={item.key} item={item}/>
        ))}
        <div
            className={classNames( 'text-red-400 cursor-pointer',linkclasses)}>
            <span className='text-xl'><FcCancel/></span>
            Logout
        </div>
       
      </div>
    </div>
  )
}

  
function SidebarLink({item}){
    const {pathname} = useLocation()

    return(
        <Link 
            to={item.path} 
            className={classNames(pathname===item.path? ' bg-neutral-700 text-white' :'text-neutral-400',linkclasses)}>
            <span className='text-xl'>{item.icon}</span>
            {item.label}
        </Link>
    )
}
