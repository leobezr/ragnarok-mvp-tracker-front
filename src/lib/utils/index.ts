import { Dictionary } from "@/types";

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Sep",
  "Ago",
  "Oct",
  "Nov",
  "Dec",
];

export default class Utils {
  /**
   * This helper is perfect for using mutable unknown values.
   * Mostly used with forms.
   *
   * @param checkableItem Dictionary, but accepts anything
   * @returns False | checkableItem
   *
   * @example
   * const ElForm = ref(null)
   *
   * const validateForm = () => {
   *  const Form = Utils.isType(ElForm, "validate")
   *
   *  if (Form && await Form.validate) {
   *    emit("confirm")
   *  }
   * }
   */
  public static isType<T>(checkableItem: any, checkKey: string) {
    if (JSON.stringify(checkableItem.constructor()) === "{}") {
      const _checkableItem = checkableItem as Dictionary;

      if (_checkableItem.hasOwnProperty(checkKey)) {
        return checkableItem as T;
      }
    }

    return false;
  }

  public static countDown(from: number, to: number) {
    const _t = (value: number) => `${value}`.padStart(2, "0");

    if (to > from) {
      const difRange = to - from;
      const mins = Math.floor(difRange / (1000 * 60));
      const ms = Math.ceil((difRange - 1000 * 60 * mins) / 1000);

      return `${_t(mins)}:${_t(ms)}`;
    }

    return "0";
  }

  public static getDate(targetDate: number) {
    const _t = (value: number) => `${value}`.padStart(2, "0");

    const date = new Date(targetDate);
    const day = _t(date.getDate());
    const month = MONTHS[date.getMonth()];
    const hour = _t(date.getHours());
    const min = _t(date.getMinutes());

    return `${month} ${day}, ${hour}h${min}`;
  }
}
