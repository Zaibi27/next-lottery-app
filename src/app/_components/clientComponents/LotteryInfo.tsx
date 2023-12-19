import React, { useState } from 'react';
interface LotteryInfoProps {
  lotteryName: string;
  roundNumber: number;
  previousWinningticket: number[];
  winningPot: number;
  baseColor: string;
}

const LotteryInfo = (props: LotteryInfoProps) => {
  const { lotteryName, roundNumber, previousWinningticket, winningPot, baseColor } = props;

  const [showPastResults, setShowPastResults] = useState(false);

  const toggleInfoView = () => setShowPastResults(!showPastResults);
  return (
    <>
      <div className="flex justify-between items-center px-4">
        <div className="flex place-items-center  gap-2 ">
          <h1 className={`text-${baseColor}-950 font-bold`}>{lotteryName}</h1>
          <p className={`text-${baseColor}-950`}>{!showPastResults ? `No. ${roundNumber}` : `Past 5 results`}</p>
        </div>
        <button onClick={toggleInfoView} className="text-gray-800 font-bold bg-gray-200 rounded p-2">
          {showPastResults ? 'Hide' : 'Show'} past results
        </button>
      </div>
      {!showPastResults ? (
        <>
          <div className="my-4 flex items-center gap-4 px-4">
            {previousWinningticket.map((item, index) => (
              <div key={index} className={`bg-${baseColor}-950 rounded-full p-1 justify-center item-center flex w-8 h-8`}>
                <p className="text-white">{item}</p>
              </div>
            ))}
          </div>
          <div className="my-4 px-4 flex items-center justify-between">
            <p className={`text-${baseColor}-950`}>Winning Pot</p>
            <p className={`text-${baseColor}-950 `}>
              <span className="text-3xl font-bold">{winningPot}</span> LUCKI
            </p>
          </div>
        </>
      ) : (
        <p className="text-center text-2xl text-gray-800 py-8 font-bold"> No Data available in response</p>
      )}
    </>
  );
};

export default LotteryInfo;
