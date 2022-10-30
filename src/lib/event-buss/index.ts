import EventBus from "./event-buss";

/**
 * Registers new event or adds callback to an eventName
 * It can register multiple times, so be aware when navigating between routes.
 * This should be used on high level components only.
 *
 * @example
 * // HighLevelComponent.vue
 * authenticated = ref(false)
 *
 * const login = (authValue) => {
 *  authenticated.value = authValue
 * }
 *
 * $on("authenticated", login)
 *
 * // LowLevelComponent.vue
 * $trigger("authenticated", true)
 */
const $on = (eventName: string, fn: Function) => {
  EventBus.on(eventName, fn);
};

/**
 * This should be used by low level components only.
 *
 * @example
 * // HighLevelComponent.vue
 * authenticated = ref(false)
 *
 * const login = (authValue) => {
 *  authenticated.value = authValue
 * }
 *
 * $on("authenticated", login)
 *
 * // LowLevelComponent.vue
 * $trigger("authenticated", true)
 */
const $emit = (eventName: string, args: any) => {
  EventBus.trigger(eventName, args);
};

/**
 * Drops registered event, this could be useful when working with navigation,
 * this should be used as a work around when using listeners to low level components
 * that will be triggered every time navigation changes.
 *
 * @example
 * $dropEvent("authenticated")
 */
const $dropEvent = (eventName: string) => {
  EventBus.drop(eventName);
};

export default {
  $on,
  $emit,
  $dropEvent,
};
