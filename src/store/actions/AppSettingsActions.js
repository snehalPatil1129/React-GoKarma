/**
 * Redux App Settings Actions
 */
import {
  COLLAPSED_SIDEBAR,
  DARK_MODE,
  BOXED_LAYOUT,
  RTL_LAYOUT,
  TOGGLE_MENU,
  MINI_SIDEBAR,
  SEARCH_FORM_ENABLE,
  CHANGE_THEME_COLOR,
  TOGGLE_SIDEBAR_IMAGE,
  SET_SIDEBAR_IMAGE,
  SET_LANGUAGE,
  START_USER_TOUR,
  STOP_USER_TOUR
} from "./types";

/**
 * Redux Action To Emit Collapse Sidebar
 * @param {*boolean} isCollapsed 
 */
export const collapsedSidebarAction = isCollapsed => ({
  type: COLLAPSED_SIDEBAR,
  isCollapsed
});

/**
 * Redux Action To Emit Rtl Layout
 *  @param {*boolean} isRtlLayout
 */
export const rtlLayoutAction = isRtlLayout => ({
  type: RTL_LAYOUT,
  payload: isRtlLayout
});

/**
 * Redux Action To Toggle Sidebar Menus
 */
export const onToggleMenu = selectedMenu => ({
  type: TOGGLE_MENU,
  payload: selectedMenu
});

/**
 * Redux Action To Emit Mini Sidebar
 */
export const miniSidebarAction = isMiniSidebar => ({
  type: MINI_SIDEBAR,
  payload: isMiniSidebar
});

/**
 * Redux Action To Enable/Disable The Search Form
 */

/**
 * Redux Action To Enable/Disable Sidebar Background Image
 */
export const toggleSidebarImage = () => ({
  type: TOGGLE_SIDEBAR_IMAGE
});
