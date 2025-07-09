import React from 'react'
import { FcOrganization,FcPieChart,FcBusinesswoman,FcComboChart} from "react-icons/fc";

function DashboardStatsGrids() {


  function BoxWrapper({children}){   //we use this fun to avoid using same css in multiple places
    return <div className='bg-white text-black rounded-sm p-4 flex-1 border border-gray-200 flex items-center'>
    {children}
    </div>
 }

  return (
    <div className='flex gap-7 w-full'>

      <BoxWrapper>
        {/* icon */}
        <div className='rounded-full h-12 w-12 flex items-center justify-center bg-sky-300'>
          <FcOrganization className='text-2xl text-white'/>
        </div>
        {/* values */}
        <div className='pl-4'>
        <span className=' text-sm text-gray-500 font-light'>Total Sales</span>
        <div className='flex items-center'>
          <strong className='text-xl text-gray-700 font-semibold'>$4556.66</strong> 
          <span className='text-sm text-green-500 pl-2'>+455</span>
        </div>
        </div>
      </BoxWrapper>
       
      <BoxWrapper >
        {/* icon */}
        <div className='rounded-full h-12 w-12 flex items-center justify-center bg-purple-300'>
          <FcPieChart className='text-2xl text-white'/>
        </div>
        {/* values */}
        <div className='pl-4'>
        <span className=' text-sm text-gray-500 font-light'>Total Revenue</span>
        <div className='flex items-center'>
          <strong className='text-xl text-gray-700 font-semibold'>$8907.66</strong> 
          <span className='text-sm text-red-500 pl-2'>-95</span>
        </div>
        </div>
      </BoxWrapper>



      <BoxWrapper>
        {/* icon */}
        <div className='rounded-full h-12 w-12 flex items-center justify-center bg-yellow-200'>
          <FcBusinesswoman className='text-2xl text-white'/>
        </div>
        {/* values */}
        <div className='pl-4'>
        <span className=' text-sm text-gray-500 font-light'>Total Members</span>
        <div className='flex items-center'>
          <strong className='text-xl text-gray-700 font-semibold'>$4556.66</strong> 
          <span className='text-sm text-green-500 pl-2'>+455</span>
        </div>
        </div>
      </BoxWrapper>

      <BoxWrapper>
        {/* icon */}
        <div className='rounded-full h-12 w-12 flex items-center justify-center bg-rose-300'>
          <FcComboChart className='text-2xl text-white'/>
        </div>
        {/* values */}
        <div className='pl-4'>
        <span className=' text-sm text-gray-500 font-light'>Overall </span>
        <div className='flex items-center'>
          <strong className='text-xl text-gray-700 font-semibold'>$57596.66</strong> 
          <span className='text-sm text-green-500 pl-2'>+566</span>
        </div>
        </div>
      </BoxWrapper>
      
    </div>
  )


}
 export default DashboardStatsGrids;

