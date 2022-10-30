import { UserModule } from "@/store/user";
import { Asyncio } from "@/lib/loader";
import { navigate } from "@/router";
import { Credential } from "@/types/core";

export default class Session {
  private static userModule = UserModule();
  private static asyncio = new Asyncio();
  private static authenticated = false;

  public static get loading() {
    return this.asyncio.loading;
  }

  public static get isConnected() {
    return this.authenticated;
  }

  public static disconnect() {
    localStorage.clear();
    this.authenticated = false;
    navigate({ name: "LoginPage" });
  }

  public static async connect(credential: Credential) {
    await this.asyncio.await(async () => {
      try {
        const token = await this.userModule.connect(credential);
        localStorage.setItem("+token", token);
        this.authenticated = true;
      } catch {
        this.disconnect();
      }
    });
  }

  public static async validate() {
    await this.asyncio.await(async () => {
      try {
        await this.userModule.getMyDetails();
      } catch {
        this.disconnect();
      }
    });
  }
}
