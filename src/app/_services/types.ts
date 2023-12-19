export type TLotteryType = 'COSMIC' | 'CLASSIC' | 'ATOMIC';

export type TPoolAmount = {
  poolId: string;
  lotteryId: string;
  coinId: string;
  coinSymbol: string;
  coinName: string;
  roundId: string;
  poolAmount: string;
  createdAt: string;
};

export type TLotteryData = {
  lotteryName: string;
  lotteryPrice: number;
  roundNumber: number;
  previousWinningticket: number[];
  poolAmount: TPoolAmount[];
  winningPot: number;
  currentPool: number;
  nextDraw: number;
  ticketCount: number;
  prevTicketCount: number;
  showPoolDetail: boolean;
};

export type TLotteryResponse = {
  result: boolean;
  code: number;
  message: string;
  data: TLotteryData;
};
