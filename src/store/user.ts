import { defineStore } from "pinia";
import { Credential } from "@/types/core";

export const UserModule = defineStore("counter", {
  state: () => {
    return {
      userDetails: {},
    };
  },

  actions: {
    async getMyDetails() {
      this.userDetails = {};
    },

    async connect(credential: Credential) {
      return "token";
    },
  },
});
