import { mvpMock } from "../__mocks__/mvp-list.mock";
import { heatLevel } from "./heat-level";

describe("Testing heat level", () => {
  it("Should receive green, for alive state", () => {
    expect(heatLevel(mvpMock[1])).toEqual("green");
  });

  it("Should receive yellow, for possibly alive state", () => {
    expect(heatLevel(mvpMock[2])).toEqual("yellow");
  });

  it("Should receive empty string, for not alive state", () => {
    expect(heatLevel(mvpMock[0])).toEqual("");
  });
});
