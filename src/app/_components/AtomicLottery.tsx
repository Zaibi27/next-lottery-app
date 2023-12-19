import React from 'react';
import { getData } from '../_services';
import LotteryCard from './clientComponents/LotteryCard';

const AtomicLottery = async () => {
  const data = await getData('ATOMIC');

  return <LotteryCard data={data.data} />;
};

export default AtomicLottery;
