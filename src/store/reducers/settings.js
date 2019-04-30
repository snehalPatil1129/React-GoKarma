/**
 * App Settings Reducers
 */
import {
  COLLAPSED_SIDEBAR,
  DARK_MODE,
  BOXED_LAYOUT,
  RTL_LAYOUT,
  MINI_SIDEBAR,
  SEARCH_FORM_ENABLE,
  CHANGE_THEME_COLOR,
  TOGGLE_SIDEBAR_IMAGE,
  SET_SIDEBAR_IMAGE,
  SET_LANGUAGE,
  START_USER_TOUR,
  STOP_USER_TOUR
} from "../actions/types";

// app config
import AppConfig from "../../constants/AppConfig";

/**
 * initial app settings
 */
const INIT_STATE = {
  navCollapsed: AppConfig.navCollapsed,
  rtlLayout: AppConfig.rtlLayout,
  miniSidebar: AppConfig.miniSidebar,
  activeTheme: {
    id: 1,
    name: "primary"
  },
  // sidebar background image
  sidebarBackgroundImages: [
    require("../../assets/img/sidebar-1.jpg"),
    require("../../assets/img/sidebar-2.jpg"),
    require("../../assets/img/sidebar-3.jpg"),
    require("../../assets/img/sidebar-4.jpg")
  ],
  sidebarActiveFilter: AppConfig.sidebarActiveFilter, // default sidebar color
  enableSidebarBackgroundImage: AppConfig.enableSidebarBackgroundImage, // default enable sidebar background
  selectedSidebarImage: AppConfig.sidebarImage // default sidebar
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    // collapse sidebar
    case COLLAPSED_SIDEBAR:
      return { ...state, navCollapsed: action.isCollapsed };

    // rtl layout
    case RTL_LAYOUT:
      return { ...state, rtlLayout: action.payload };

    // mini sidebar
    case MINI_SIDEBAR:
      return { ...state, miniSidebar: action.payload };

    default:
      return { ...state };
  }
};
