export enum Events {
  AddValue = "addValue",
}

export type EventsType = keyof typeof Events;

export class EventBus {
  private events: Record<string, Function[]>;

  constructor() {
    this.events = {};
  }
  on(event: EventsType, callback: Function) {
    const hasEvent = this.events[event];
    if (!hasEvent) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
  }
  off(event: EventsType, callback: Function) {
    const hasEvent = this.events[event];
    if (!hasEvent) {
      return;
    }
    this.events[event] = this.events[event].filter((cb) => cb !== callback);
  }
  emit(event: EventsType, ...args: any[]) {
    const hasEvent = this.events[event];
    if (!hasEvent) {
      return;
    }
    this.events[event].forEach((cb) => cb(...args));
  }
}
