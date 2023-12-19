import React from 'react';
import { getData } from '../_services';
import LotteryCard from './clientComponents/LotteryCard';

const CosmicLottery = async () => {
  const data = await getData('COSMIC');

  return <LotteryCard data={data.data} />;
};

export default CosmicLottery;
