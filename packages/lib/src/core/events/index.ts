import { Events, EventsType } from "../types/events";

export const events = () => {
  const on = (event: EventsType, callback: (event: any) => void) => {
    document.addEventListener(Events[event], callback);
  };

  const off = (event: EventsType, callback: (event: any) => void) => {
    document.removeEventListener(Events[event], callback);
  };

  const emit = (event: EventsType, ...args: any[]) => {
    const customEvent = new CustomEvent(Events[event], { detail: args });

    document.dispatchEvent(customEvent);
  };

  return {
    on,
    off,
    emit,
  };
};
