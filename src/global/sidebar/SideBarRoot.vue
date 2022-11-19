<script setup lang="ts">
import Router, { navigate } from "@/router";
import menuLinks from "./lib/menu-links";
import "./scss/_sidebar.scss";

const activeMenu = (relativeName: string) => {
  const thisRoute = Router.currentRoute;
  return thisRoute.value.meta?.routeRelative === relativeName;
};
</script>

<template>
  <div id="sideBarRoot">
    <figure class="logo">
      <img src="@/assets/logo.png" />
    </figure>

    <ul class="menuLink">
      <el-tooltip
        v-for="link in menuLinks"
        :key="link.name"
        :content="link.description"
        effect="light"
        placement="right-start"
      >
        <li
          @click="navigate({ name: link.name })"
          :size="25"
          :active="activeMenu(link.routeRelative)"
        >
          <component :is="link.icon" />
          <span>{{ link.label }}</span>
        </li>
      </el-tooltip>
    </ul>
  </div>
</template>
