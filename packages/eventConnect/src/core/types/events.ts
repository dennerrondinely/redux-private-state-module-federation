export enum Events {
  increment = "increment",
  decrement = "decrement",
  getCount = "getCount",
  returnCount = "returnCount",
}

export type EventsType = keyof typeof Events;
