'use client';

import React from 'react';
import { TLotteryData, TLotteryType } from '../../_services/types';
import CurrentPoolStatus from './CurrentPoolStatus';
import CountdownTimer from './CountDownTimer';
import LotteryInfo from './LotteryInfo';
import Link from 'next/link';

interface ILotteryCardProps {
  data: TLotteryData;
}

let bgcolors = 'bg-violet-200 bg-rose-200 bg-blue-200';
let contrastColor = 'bg-violet-950 bg-rose-950 bg-blue-950';
let textColor = 'text-violet-950 text-rose-950 text-blue-950';

const getBgColor = (lotteryName: TLotteryType) => {
  switch (lotteryName) {
    case 'COSMIC':
      return 'violet';
    case 'ATOMIC':
      return 'rose';
    case 'CLASSIC':
    default:
      return 'blue';
  }
};

const LotteryCard = (props: ILotteryCardProps) => {
  const {
    data: { lotteryName, roundNumber, previousWinningticket, winningPot, poolAmount, showPoolDetail, nextDraw, ...rest },
  } = props;

  const baseColor = getBgColor(lotteryName as TLotteryType);

  console.log({ lotteryName, rest });

  return (
    <div className={`bg-${baseColor}-200  rounded-lg py-2`}>
      <LotteryInfo
        lotteryName={lotteryName}
        roundNumber={roundNumber}
        previousWinningticket={previousWinningticket}
        winningPot={winningPot}
        baseColor={baseColor}
      />
      <div className={`bg-${baseColor}-950 px-4 py-2 flex items-center justify-between`}>
        <div className="flex items-center gap-4">
          <p>Next Draw in</p>
          <CountdownTimer initialTime={nextDraw} />
        </div>
        <Link href={'/login'}>
          <button className={`bg-white px-4 py-2 text-${baseColor}-950 rounded font-semibold`}>Play</button>
        </Link>
      </div>

      {showPoolDetail && <CurrentPoolStatus poolAmount={poolAmount ?? []} />}
    </div>
  );
};

export default LotteryCard;
