import { Asyncio } from "./asyncio";
import { simulateRequest } from "./helper";

describe("Testing loader module", () => {
  vi.mock("@/lib/snackbar", () => {
    return {
      raiseSuccess: vi.fn(),
      raiseError: vi.fn(),
    };
  });

  it("Make sure await method waits to complete before resolving", async () => {
    const asyncio = new Asyncio();
    const now = Date.now();

    await expect(
      asyncio.await(async () => {
        return await simulateRequest("success");
      })
    ).resolves.toBeGreaterThanOrEqual(now + 50);
  });

  it("Asyncio.await should change loading flag to true", () => {
    const asyncio = new Asyncio();

    expect(asyncio.loading).toEqual(false);

    asyncio.await(() => simulateRequest("success"));

    expect(asyncio.loading).toEqual(true);
  });

  it("Asyncio.await after complete refreshes loading to false", async () => {
    const asyncio = new Asyncio();

    await expect(
      asyncio.await(async () => {
        expect(asyncio.loading).toEqual(true);
        return await simulateRequest("success");
      })
    ).resolves.toEqual(expect.any(Number));

    expect(asyncio.loading).toEqual(false);
  });

  it("Asyncio.await should reject function", async () => {
    const asyncio = new Asyncio();

    await expect(
      asyncio.await(async () => {
        await simulateRequest("fail");
      })
    ).rejects.toThrow("Rejected");
  });

  it("Testing onSuccess", async () => {
    const asyncio = new Asyncio({ alertOnSuccess: true });

    await expect(
      asyncio.await(async () => {
        expect(asyncio.loading).toEqual(true);
        return await simulateRequest("success");
      })
    ).resolves.toEqual(expect.any(Number));
  });
});
