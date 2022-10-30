import { Dictionary } from "@/types";
import EventBus from "./event-buss";

describe("Testing event buss action as publisher/subscription programming pattern", () => {
  it("Testing insertion of event using eventName", () => {
    let isRegistered = false;
    const registered = () => (isRegistered = true);

    EventBus.on("register", registered);
    EventBus.trigger("register");

    expect(isRegistered).toEqual(true);
  });

  it("Trigger has valid arguments", () => {
    const triggeredValues: Dictionary<number> = { a: 0, b: 0 };

    const setTriggerValues = (busParam: { value: number; key: string }) => {
      const { value, key } = busParam;
      triggeredValues[key] = value;
    };

    EventBus.on("triggerValues", setTriggerValues);

    EventBus.trigger("triggerValues", { key: "a", value: 1 });
    EventBus.trigger("triggerValues", { key: "b", value: 2 });

    expect(triggeredValues).toEqual(expect.objectContaining({ a: 1, b: 2 }));
  });

  it("Drop directed event registered", () => {
    EventBus.on("register", () => true);
    EventBus.drop("register");

    expect(() => EventBus.trigger("register")).toThrowError(
      "EventBus Error, event name {register} is not registered"
    );
  });

  it("Should throw when has invalid event name", () => {
    expect(() => EventBus.trigger("invalid")).toThrowError(
      "EventBus Error, event name {invalid} is not registered"
    );
  });
});
