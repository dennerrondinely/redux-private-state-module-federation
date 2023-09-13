export const incrementEvent = new CustomEvent("increment");
export const decrementEvent = new CustomEvent("decrement");
export const getCountEvent = new CustomEvent("getCount");
export const returnCountEvent = new CustomEvent("returnCount");

enum Events {
  increment = "increment",
  decrement = "decrement",
  getCount = "getCount",
  returnCount = "returnCount",
}

type EventsType = keyof typeof Events;

const isEventInstanced = <T>(event?: CustomEvent<T>) => {
  return event && event instanceof CustomEvent;
};

export const events = () => {
  const events: { [key in Events]?: CustomEvent } = {};
  const eventsKeys = Object.keys(Events) as EventsType[];

  return eventsKeys.reduce((acc, key) => {
    const isInstanced = isEventInstanced(events[key]);

    if (isInstanced) {
      return acc;
    } else {
      return { ...acc, [key]: new CustomEvent(Events[key]) };
    }
  }, {});
};
