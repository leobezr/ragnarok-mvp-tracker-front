import { ElMessage } from "element-plus";

export const raiseSuccess = (message?: string) => {
  ElMessage({
    ...(message && { message }),
    type: "success",
  });
};

export const raiseError = (message?: string) => {
  ElMessage({
    ...(message && { message }),
    type: "error",
  });
};

export const raiseWarning = (message?: string) => {
  ElMessage({
    ...(message && { message }),
    type: "warning",
  });
};

export const raiseMsg = (message: string) => {
  ElMessage(message);
};
