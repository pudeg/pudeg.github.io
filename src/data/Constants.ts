export const CONSTS = {
  get gcfLocal(): string { return 'http://localhost:5000/my-lady-8b48f/us-central1/getMiladyBalance' },
  get onOrderWrite(): string { return 'http://127.0.0.1:5001/my-lady-8b48f/us-central1/onWriteOrder-0' },
  get gcfRemoteUrl(): string { return 'https://us-central1-my-lady-8b48f.cloudfunctions.net/getMiladyBalance' },
  get scatterMintUrl(): string { return 'https://www.scatter.art/collection/0xfe498548C3ea6c04bbCbf8eAAFcD6Cf584D63414?tab=mint' },
  get MILADY_BALANCE_ENDPOINT(): string { return this.gcfRemoteUrl },
}