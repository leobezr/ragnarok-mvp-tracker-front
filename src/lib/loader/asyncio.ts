import { CONFIG } from "./config";
import { LoaderConfig } from "./type";
import { raiseSuccess, raiseError } from "@/lib/snackbar";

export class Asyncio {
  private isLoading = false;
  private config: LoaderConfig = CONFIG;

  constructor(config = {} as LoaderConfig) {
    const loaderConfig = { ...CONFIG, ...config };
    this.config = loaderConfig;
  }

  public get loading() {
    return this.isLoading;
  }

  public async await<T = unknown>(fn: Function, args?: T) {
    try {
      this.isLoading = true;

      if (this.config.alertOnSuccess) {
        raiseSuccess("Success");
      }

      return await fn.call(this, args);
    } catch (err) {
      if (this.config.alertOnFail) {
        raiseError(err as string);
      }

      if (this.config.autoThrow) {
        throw Error(err as string);
      }
    } finally {
      this.isLoading = false;
    }
  }
}
