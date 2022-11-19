import { ElMessage } from "element-plus";

export const raiseSuccess = (message?: string, duration = 2000) => {
  ElMessage({
    ...(message && { message }),
    type: "success",
    duration,
  });
};

export const raiseError = (message?: string, duration = 2000) => {
  ElMessage({
    ...(message && { message }),
    type: "error",
    duration,
  });
};

export const raiseWarning = (message?: string, duration = 2000) => {
  ElMessage({
    ...(message && { message }),
    type: "warning",
    duration,
  });
};

export const raiseMsg = (message: string) => {
  ElMessage(message);
};
