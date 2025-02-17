export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  accountStatus: AccountStatus;
  createdAt: string;
  createdBy: string;
};

export enum AccountStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}