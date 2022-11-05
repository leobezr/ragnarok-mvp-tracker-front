import { Component } from "vue";
import AccountCircleOutlineIcon from "icon/AccountCircleOutline.vue";
import HomeVariantOutlineIcon from "icon/HomeVariantOutline.vue";
import SwordIcon from "icon/Sword.vue";

interface MenuItem {
  name: string;
  routeRelative: string;
  label: string;
  description: string;
  icon: Component;
}

export default [
  {
    name: "Dashboard",
    label: "Dashboard",
    routeRelative: "dashboard",
    description:
      "Here you can see a summary of what you have been doing lately",
    icon: HomeVariantOutlineIcon,
  },
  {
    name: "MvpTracker",
    label: "Mvp Tracker",
    routeRelative: "mvpTracker",
    description: "Manage your MVP kills here",
    icon: SwordIcon,
  },
  {
    name: "Profile",
    label: "Profile",
    routeRelative: "profile",
    description: "Manage all your personal account data",
    icon: AccountCircleOutlineIcon,
  },
] as MenuItem[];
