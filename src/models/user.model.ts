import type { Timestamp, Unsubscribe } from "firebase/firestore";

export enum JerseySize {
  XSmall,
  Small,
  Medium,
  Large,
  XLarge,
  XXLarge,
  XXXLarge
}
export type JerseySizeType =
  'XSmall' |
  'Small' |
  'Medium' |
  'Large' |
  'XLarge' |
  'XXLarge' |
  'XXXLarge';

export interface DocumentBase {
  created?: Timestamp | null,
  modified?: Timestamp | null,
}
export interface ShippingAddress extends DocumentBase {
  name: string;
  address1: string;
  address2?: string | null;
  city: string;
  postalCode: string;
  stateProvince: string;
  country: string;
}

export type OrderStatus = 'SHIPPING_UNASSIGNED' | 'SHIPPING_ASSIGNED' | 'FULFILLED' | 'CLOSED';

export interface Order extends DocumentBase {
  id?: string;
  index?: number;
  tokenId?: string;
  jerseySize: JerseySizeType | null;
  shippingAddress: ShippingAddress | null;
  status: OrderStatus;
  trackingNumber?: string;
}

export interface UserModel extends DocumentBase {
  mi777Balance: number | null | any;
  wallet: string | null;
  orders: Record<string, Order>;
  ownedTokenIds?: Array<string | number>;
}

export interface UserState {
  userData: UserModel;
}

export interface UserSubscriptions {
  user: Unsubscribe | null,
  orders: Unsubscribe | null,
}

export interface BalanceMap {
  balance: number;
  contract: string;
}

export interface Token extends DocumentBase {
  id: string;
  // contract?: string;
  owner: string | null;
}

export interface TokenResponse {
  TokenAddress: string;
  TokenId: string;
};

export interface BalanceResponse {
  contract: string;
  tokens: TokenResponse[];
};

