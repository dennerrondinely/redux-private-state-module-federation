'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Events;
(function (Events) {
    Events["AddValue"] = "addValue";
})(Events || (Events = {}));
class EventBus {
    constructor() {
        this.events = {};
    }
    on(event, callback) {
        const hasEvent = this.events[event];
        if (!hasEvent) {
            this.events[event] = [];
        }
        this.events[event].push(callback);
    }
    off(event, callback) {
        const hasEvent = this.events[event];
        if (!hasEvent) {
            return;
        }
        this.events[event] = this.events[event].filter((cb) => cb !== callback);
    }
    emit(event, ...args) {
        const hasEvent = this.events[event];
        if (!hasEvent) {
            return;
        }
        this.events[event].forEach((cb) => cb(...args));
    }
}

const event = new EventBus();
const addEvent = () => {
    event.emit("AddValue");
};
const onAddEvent = (callback) => {
    event.on("AddValue", callback);
};
const offAddEvent = (callback) => {
    event.off("AddValue", callback);
};

const increment = (callback) => {
    document.addEventListener("incrementEvent", callback);
};
const removeIncrement = (callback) => {
    document.removeEventListener("incrementEvent", callback);
};
const decrement = (callback) => {
    document.addEventListener("decrementEvent", callback);
};
const removeDecrement = (callback) => {
    document.removeEventListener("decrementEvent", callback);
};
const getCount = (callback) => {
    document.addEventListener("getCountEvent", (event) => {
        callback(event.detail);
    });
};
const removeGetCount = (callback) => {
    document.removeEventListener("getCountEvent", callback);
};

exports.addEvent = addEvent;
exports.decrement = decrement;
exports.getCount = getCount;
exports.increment = increment;
exports.offAddEvent = offAddEvent;
exports.onAddEvent = onAddEvent;
exports.removeDecrement = removeDecrement;
exports.removeGetCount = removeGetCount;
exports.removeIncrement = removeIncrement;
//# sourceMappingURL=index.js.map
