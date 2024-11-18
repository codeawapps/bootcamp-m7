export interface Product {
  name: string;
  desc: string;
  stock: number;
}

export interface Stock {
  action: Stock__Action;
  productName: string;
}

export enum Stock__Action {
  ADD = 'ADD',
  REDUCE = 'REDUCE'
};
