import { ROUTES } from "../router/routes";
import { IMAGES } from "./assets";

export const NAV_ITEMS = [
  {
    name: "Admin",
    route: ROUTES.ADMIN,
    image: IMAGES.ADMIN_ICON,
    activeImage: IMAGES.ADMIN_ACTIVE_ICON,
    isAdminButton: true,
  },
  {
    name: "Dashboard",
    route: ROUTES.DASHBOARD,
    image: IMAGES.DASHBOARD,
    activeImage: IMAGES.DASHBOARD_ACTIVE,
  },
  {
    name: "Groups",
    route: ROUTES.GROUP_DETAILS,
    image: IMAGES.GROUPS,
    activeImage: IMAGES.GROUPS_ACTIVE,
  },
  {
    name: "Join Group",
    route: ROUTES.JOIN_GROUP,
    image: IMAGES.JOIN_GROUP,
    activeImage: IMAGES.JOIN_GROUP_ACTIVE,
  },
];

export const BOTTOM_NAV_ITEMS = [
  {
    name: "Settings",
    route: ROUTES.SETTINGS,
    image: IMAGES.SETTINGS,
    activeImage: IMAGES.SETTINGS_ACTIVE,
  },
];
