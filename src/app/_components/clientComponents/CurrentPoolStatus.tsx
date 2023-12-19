'use-client';

import React, { useState } from 'react';
import { TPoolAmount } from '../../_services/types';

interface ICurrentPoolStatus {
  poolAmount: TPoolAmount[];
}

const getSumOfAllPools = (pools: number[]) => {
  return pools.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};

const CurrentPoolStatus = ({ poolAmount }: ICurrentPoolStatus) => {
  const [isTableOpen, setIsTableOpen] = useState(false);

  const summOfPools = getSumOfAllPools(poolAmount.map((item) => +item.poolAmount));

  const togglePoolView = () => setIsTableOpen(!isTableOpen);
  return (
    <div className="px-4">
      {!isTableOpen ? (
        <button onClick={togglePoolView} className="text-center w-full self-center py-2 text-gray-600 hover:underline">
          Show Current Pool Status
        </button>
      ) : (
        <div>
          <p className="text-gray-800 my-4 font-semibold">Current Pool Status</p>
          {poolAmount.length > 0 ? (
            <>
              {poolAmount.map((item) => (
                <div key={item.poolId} className="flex items-center justify-between">
                  <p className="font-bold text-gray-800">{item.coinName}</p>
                  <p className="text-gray-800">{`${item.poolAmount}  ${item.coinSymbol}`}</p>
                </div>
              ))}
              <div className="border-t-2 border-t-gray-800 mt-3 justify-end flex">
                <p className="text-gray-800 text-xl">
                  ≈ <span className="text-3xl font-bold">{summOfPools} </span>
                  LUCKI
                </p>
              </div>
            </>
          ) : (
            <p className="text-3xl text-center text-gray-800">No Data Available</p>
          )}
          <button onClick={togglePoolView} className="text-center w-full self-center py-2 text-gray-600 hover:underline">
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default CurrentPoolStatus;
