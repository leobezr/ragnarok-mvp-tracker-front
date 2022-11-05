import Utils from "./index";

describe("Testing Utils class", () => {
  interface Car {
    gas: () => "Car is moving";
  }

  const car = {
    gas() {
      return "Car is moving";
    },
  };

  it("Testing static method, isType", () => {
    expect(Utils.isType<Car>(car, "gas")).toHaveProperty("gas");
  });

  it("Testing static method isType", () => {
    expect(Utils.isType(car, "")).toEqual(false);
  });

  it("Testing method countDown, case 1", () => {
    const second = 1000;
    const min = second * 60;
    const hour = min * 60;

    const targetTime = Date.now() + hour * 1 + min * 10 + second * 52;
    const now = Date.now();

    expect(Utils.countDown(now, targetTime)).toEqual("70:52");
  });

  it("Testing method countDown, case 2", () => {
    const second = 1000;
    const min = second * 60;
    const hour = min * 60;

    const targetTime = Date.now() + hour * 5 + min * 10 + second * 5;
    const now = Date.now();

    expect(Utils.countDown(now, targetTime)).toEqual("310:05");
  });

  it("Testing method countDown, case 3", () => {
    const second = 1000;
    const min = second * 60;

    const targetTime = Date.now() + min * 2 + second * 5;
    const now = Date.now();

    expect(Utils.countDown(now, targetTime)).toEqual("02:05");
  });

  it("Testing method countDown, case 4", () => {
    const second = 1000;
    const min = second * 60;

    const targetTime = Date.now() + min * 10 + second * 0;
    const now = Date.now();

    expect(Utils.countDown(now, targetTime)).toEqual("10:00");
  });

  it("Testing method countDown, case 5", () => {
    const targetTime = Date.now() - 1;
    const now = Date.now();

    expect(Utils.countDown(now, targetTime)).toEqual("0");
  });

  it("Testing method getDate, case 1", () => {
    const targetDate = new Date("2021-10-19 19:10:00").getTime();

    expect(Utils.getDate(targetDate)).toEqual("Oct 19, 19h10");
  });

  it("Testing method getDate, case 2", () => {
    const targetDate = new Date("2021-12-31 00:10:00").getTime();

    expect(Utils.getDate(targetDate)).toEqual("Dec 31, 00h10");
  });

  it("Testing method getDate, case 3", () => {
    const targetDate = new Date("2022-01-01 00:10:00").getTime();

    expect(Utils.getDate(targetDate)).toEqual("Jan 01, 00h10");
  });

  it("Testing method getDate, case 4", () => {
    const targetDate = new Date("2022-04-05 05:10:00").getTime();

    expect(Utils.getDate(targetDate)).toEqual("Apr 05, 05h10");
  });
});
