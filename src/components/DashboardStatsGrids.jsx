import React from 'react'
import { FcOrganization,FcPieChart,FcBusinesswoman,FcComboChart} from "react-icons/fc";

function DashboardStatsGrids() {

  const statsData = [
    {
      title: 'Total Sales',
      amount: '$4556.66',
      change: '+455',
      changeColor: 'text-green-500',
      icon: <FcOrganization className='text-2xl text-white' />,
      bgColor: 'bg-sky-300'
    },
    {
      title: 'Total Revenue',
      amount: '$8907.66',
      change: '-95',
      changeColor: 'text-red-500',
      icon: <FcPieChart className='text-2xl text-white' />,
      bgColor: 'bg-purple-300'
    },
    {
      title: 'Total Members',
      amount: '$4556.66',
      change: '+455',
      changeColor: 'text-green-500',
      icon: <FcBusinesswoman className='text-2xl text-white' />,
      bgColor: 'bg-yellow-200'
    },
    {
      title: 'Overall',
      amount: '$57596.66',
      change: '+566',
      changeColor: 'text-green-500',
      icon: <FcComboChart className='text-2xl text-white' />,
      bgColor: 'bg-rose-300'
    }
  ];



  const BoxWrapper = ({children}) => {   //we use this fun to avoid using same css in multiple places
    return <div className='bg-white text-black rounded-sm p-4 flex-1 border border-gray-200 flex items-center'>
    {children}
    </div>
  }

  return (
    <div className='flex gap-7 w-full flex-wrap'>
      {statsData.map((item,index) => (
          <BoxWrapper key={index}>
          {/* icon */}
          <div className={`rounded-full h-12 w-12 flex items-center justify-center ${item.bgColor}`}>
              {item.icon}
            </div>
          {/* values */}
          <div className='pl-4'>
          <span className=' text-sm text-gray-500 font-light'>{item.title}</span>
          <div className='flex items-center'>
            <strong className='text-xl text-gray-700 font-semibold'>{item.amount}</strong>
            <span className={`text-sm pl-2 ${item.changeColor}`}>{item.change}</span>
          </div>
          </div>
        </BoxWrapper>
      ))}
    </div>
  )


}
 export default DashboardStatsGrids;

