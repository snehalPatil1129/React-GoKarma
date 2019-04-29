// sidebar nav links
export default {
      category1: [
            {
                  "menu_title": "sidebar.dashboard",
                  "menu_icon": "ti-dashboard",
                  "path": "/app/dashboard",
                  "child_routes": null
            }
      ],
      category2: [
            {
                  "menu_title": "sidebar.inbox",
                  "menu_icon": "ti-archive",
                  "path": "/app/mail",
                  "child_routes": null
            }
      ],
      category3: [
            {
                  "menu_title": "sidebar.uiComponents",
                  "menu_icon": "ti-ruler-alt-2",
                  "child_routes": [
                        {
                              "path": "/app/ui-components/alerts",
                              "menu_title": "sidebar.alerts"
                        },
                        {
                              "path": "/app/ui-components/app-bar",
                              "menu_title": "sidebar.appBar"
                        },
                        {
                              "path": "/app/ui-components/avatars",
                              "menu_title": "sidebar.avatars"
                        },
                        {
                              "path": "/app/ui-components/buttons",
                              "menu_title": "sidebar.buttons"
                        },
                        {
                              "path": "/app/ui-components/bottom-navigations",
                              "menu_title": "sidebar.bottomNavigations"
                        },
                        {
                              "path": "/app/ui-components/badges",
                              "menu_title": "sidebar.badges"
                        },
                        {
                              "path": "/app/ui-components/cards",
                              "menu_title": "sidebar.cards"
                        },
                        {
                              "path": "/app/ui-components/cards-masonary",
                              "menu_title": "sidebar.cardsMasonry"
                        },
                        {
                              "path": "/app/ui-components/chip",
                              "menu_title": "sidebar.chip"
                        },
                        {
                              "path": "/app/ui-components/dialog",
                              "menu_title": "sidebar.dialog"
                        },
                        {
                              "path": "/app/ui-components/dividers",
                              "menu_title": "sidebar.dividers"
                        },
                        {
                              "path": "/app/ui-components/drawers",
                              "menu_title": "sidebar.drawers"
                        },
                        {
                              "path": "/app/ui-components/expansion-panel",
                              "menu_title": "sidebar.expansionPanel"
                        },
                        {
                              "path": "/app/ui-components/grid-list",
                              "menu_title": "sidebar.gridList"
                        },
                        {
                              "path": "/app/ui-components/list",
                              "menu_title": "sidebar.list"
                        },
                        {
                              "path": "/app/ui-components/menu",
                              "menu_title": "sidebar.menu"
                        },
                        {
                              "path": "/app/ui-components/popover",
                              "menu_title": "sidebar.popoverAndToolTip"
                        },
                        {
                              "path": "/app/ui-components/progress",
                              "menu_title": "sidebar.progress"
                        },
                        {
                              "path": "/app/ui-components/snackbar",
                              "menu_title": "sidebar.snackbar"
                        },
                        {
                              "path": "/app/ui-components/selection-controls",
                              "menu_title": "sidebar.selectionControls"
                        }
                  ]
            }
      ],
      category4: [
            {
                  "menu_title": "sidebar.forms",
                  "menu_icon": "ti-menu-alt",
                  "child_routes": [
                        {
                              "path": "/app/forms/form-elements",
                              "menu_title": "sidebar.formElements"
                        },
                        {
                              "path": "/app/forms/text-field",
                              "menu_title": "sidebar.textField"
                        },
                        {
                              "path": "/app/forms/select-list",
                              "menu_title": "sidebar.selectList"
                        }
                  ]
            }
      ],
      category5: [
            {
                  "menu_title": "sidebar.maps",
                  "menu_icon": "ti-map-alt",
                  "child_routes": [
                        {
                              "path": "/app/maps/google-maps",
                              "menu_title": "sidebar.googleMaps"
                        },
                        {
                              "path": "/app/maps/leaflet-maps",
                              "menu_title": "sidebar.leafletMaps"
                        }
                  ]
            }
      ]
}
