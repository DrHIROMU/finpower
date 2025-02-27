export type CashFlowRequest = {
    currency: string;
    amount: number;
    type: string;
  };
  
  export enum CashFlowType {
    DEPOSIT = "DEPOSIT",
    WITHDRAWAL = "WITHDRAW",
  }