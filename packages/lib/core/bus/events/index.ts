import { EventBus } from "../eventBus";

const event = new EventBus();

export const addEvent = () => {
  event.emit("AddValue");
};

export const onAddEvent = (callback: Function) => {
  event.on("AddValue", callback);
};

export const offAddEvent = (callback: Function) => {
  event.off("AddValue", callback);
};
