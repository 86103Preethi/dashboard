import React from 'react';
import DashboardStatsGrid from '../components/DashboardStatsGrids';
import TransactionChart from '../components/TransactionChart';
import RecentOrders from '../components/RecentOrders';
import BuyerProfilePieChart from './BuyerProfilePieChart';
import PopularProducts from '../components/PopularProducts';
import Register from '../components/Register';
import Products from '../components/Products';

export default function DashboardItem() {
  return (
    <div className="flex flex-col gap-4">
      <DashboardStatsGrid />
      <div className="flex flex-row gap-4 w-full">
        <TransactionChart />
        <BuyerProfilePieChart />
      </div>
      <div className="flex flex-row gap-4 w-full">
        <RecentOrders />
        <PopularProducts />
      </div>
      <div>
      {/* <Register />
      <Products /> */}
    </div>
    </div>
  );
}
