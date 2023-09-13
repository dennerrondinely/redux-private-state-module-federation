export const increment = (callback: () => void) => {
  document.addEventListener("incrementEvent", callback);
};

export const removeIncrement = (callback: () => void) => {
  document.removeEventListener("incrementEvent", callback);
};

export const decrement = (callback: () => void) => {
  document.addEventListener("decrementEvent", callback);
};

export const removeDecrement = (callback: () => void) => {
  document.removeEventListener("decrementEvent", callback);
};

export const getCount = (callback: (value: any) => void) => {
  document.addEventListener("getCountEvent", (event: any) => {
    callback(event.detail);
  });
};

export const removeGetCount = (callback: () => void) => {
  document.removeEventListener("getCountEvent", callback);
}
