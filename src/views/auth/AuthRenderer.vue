<script setup lang="ts">
import SideBar from "@/global/sidebar/SideBarRoot.vue";
</script>

<template>
  <div class="connectedState">
    <side-bar />

    <router-view class="authenticated" />
  </div>
</template>

<style lang="scss"></style>
