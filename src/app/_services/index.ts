import { TLotteryResponse, TLotteryType } from './types';

export const getData = async (type: TLotteryType): Promise<TLotteryResponse> => {
  const res = await fetch(`https://testing-luckito-backend.rnssol.com/api/luckito/lottery/get-lottery?lotteryType=${type}`);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
};
