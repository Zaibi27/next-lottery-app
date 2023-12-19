import React from 'react';
import { getData } from '../_services';
import LotteryCard from './clientComponents/LotteryCard';

const ClassicLottery = async () => {
  const data = await getData('CLASSIC');

  return <LotteryCard data={data.data} />;
};

export default ClassicLottery;
