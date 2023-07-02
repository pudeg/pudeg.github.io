export const CONSTS = {
  get getUserOrdersLocal(): string { return 'http://127.0.0.1:8080/my-lady-8b48f/us-central1/getUserOrders' },
  get getUserOrdersRemote(): string { return 'https://us-central1-my-lady-8b48f.cloudfunctions.net/getUserOrders' },
  get getUserStateLocal(): string { return 'http://127.0.0.1:8080/my-lady-8b48f/us-central1/getUserState' },
  get getUserStateRemote(): string { return 'https://us-central1-my-lady-8b48f.cloudfunctions.net/getUserState' },
  get createUserOrderLocal(): string { return 'http://127.0.0.1:8080/my-lady-8b48f/us-central1/createUserOrder' },
  get createUserOrderRemote(): string { return 'https://us-central1-my-lady-8b48f.cloudfunctions.net/createUserOrder' },
  get scatterMintUrl(): string { return 'https://www.scatter.art/collection/0xfe498548C3ea6c04bbCbf8eAAFcD6Cf584D63414?tab=mint' },
}

export const displayStatusMap = new Map([
  [
    'SHIPPING_ASSIGNED', 'ORDER PLACED'
  ],
  [
    'FULFILLED', 'ORDER SHIPPED'
  ],
  [
    'CLOSED', 'ORDER DELIVERED'
  ],
  [
    'UNDELIVERABLE', 'ORDER UNDELIVERABLE'
  ],
  [
    'DELAYED', 'ORDER DELAYED'
  ],
]);