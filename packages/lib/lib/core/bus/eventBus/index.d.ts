export declare enum Events {
    AddValue = "addValue"
}
export type EventsType = keyof typeof Events;
export declare class EventBus {
    private events;
    constructor();
    on(event: EventsType, callback: Function): void;
    off(event: EventsType, callback: Function): void;
    emit(event: EventsType, ...args: any[]): void;
}
