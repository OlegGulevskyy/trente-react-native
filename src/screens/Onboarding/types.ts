export type AccountType = "artist" | "pro" | "fan";
export type CurrentScreenProps = {
  index: number;
  accountType: AccountType;
  setAccountType: (type: AccountType) => void;
};
