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
});
