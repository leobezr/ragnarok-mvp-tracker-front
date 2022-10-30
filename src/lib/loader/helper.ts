export const simulateRequest = (
  type: "success" | "fail"
): Promise<number | never> => {
  return new Promise((resolve, reject) => {
    if (type === "success") {
      setTimeout(() => resolve(Date.now()), 50);
    } else {
      reject("Rejected");
    }
  });
};
