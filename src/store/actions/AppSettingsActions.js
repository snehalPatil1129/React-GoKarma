/**
 * Redux App Settings Actions
 */
import {
  COLLAPSED_SIDEBAR,
  RTL_LAYOUT,
  TOGGLE_MENU,
  MINI_SIDEBAR,
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
