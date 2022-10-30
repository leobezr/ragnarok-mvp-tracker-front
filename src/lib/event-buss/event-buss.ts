import { Dictionary } from "@/types";

export default class EventBus {
  private static events: Dictionary<Function[]> = {};

  public static on(eventName: string, fn: Function) {
    EventBus.events[eventName] = EventBus.events[eventName] || [];
    EventBus.events[eventName].push(fn);
  }

  public static drop(eventName: string) {
    if (EventBus.events[eventName]) {
      delete EventBus.events[eventName];
    }
  }

  public static trigger(eventName: string, args?: any) {
    if (EventBus.events[eventName] && EventBus.events[eventName].length) {
      EventBus.events[eventName].forEach((event) => {
        event.call(this, args);
      });
    } else {
      throw Error(
        `EventBus Error, event name {${eventName}} is not registered`
      );
    }
  }
}
