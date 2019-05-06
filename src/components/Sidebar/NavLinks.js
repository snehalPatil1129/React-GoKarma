// sidebar nav links
export default {
  //profile
  category1: [
    {
      menu_title: "My Work",
      menu_icon: "ti-briefcase",
      child_routes: [
        {
          path: "/app/dashboard",
          menu_title: "Dashboard",
          menu_icon: "ti-dashboard",          
        },
        {
          path: "/app/dashboard",
          menu_title: "What's New?",
          menu_icon: "ti-plus",
        },
        {
          path: "/app/dashboard",
          menu_title: "Activities",
          menu_icon: "fa fa-tasks",
        }
      ]
    },
    {
      menu_title: "Reports",
      menu_icon: "ti-pie-chart",
      path: "/app/dashboard",
      child_routes: null
    },
    {
      menu_title: "Analytics",
      menu_icon: "ti-stats-up",
      path: "/app/dashboard",
      child_routes: [
        {
          path: "/app/dashboard",
          menu_title: "Interactive Dashboard",
          menu_icon: "ti-dashboard",
        },
        {
          path: "/app/dashboard",
          menu_title: "Social Insight",
          menu_icon :"fa fa-handshake-o"
        }
      ]
    },
    {
      menu_title: "Articles",
      menu_icon: "fa fa-files-o",
      path: "/app/dashboard",
      child_routes: null
    }
    // {
    //   menu_title: "My Profile",
    //   menu_icon: "ti ti-user",
    //   path: "/app/userProfile",
    //   child_routes: null
    // }
  ],
  //Constituent
  category2: [
    {
      menu_title: "Prospects",
      menu_icon: "fa fa-star",
      path: "/app/dashboard",
      child_routes: null
    },
    {
      menu_title: "Donor",
      menu_icon: "ti-user",
      child_routes: [
        {
          path: "/app/dashboard",
          menu_title: "New Donor",
          menu_icon: "fa fa-user-plus",
        },
        {
          path: "/app/dashboard",
          menu_title: "Donors",
          menu_icon: "fa fa-users",
        }
      ]
    },
    {
      menu_title: "Beneficiary",
      menu_icon: "fa fa-users",
      child_routes: [
        {
          path: "/app/dashboard",
          menu_title: "New Beneficiary",
          menu_icon: "fa fa-user-plus",
        },
        {
          path: "/app/dashboard",
          menu_title: "Beneficiaries",
          menu_icon: "fa fa-users",
        }
      ]
    },
    {
      menu_title: "Volunteers",
      menu_icon: "ti-dashboard",
      child_routes: [
        {
          path: "/app/dashboard",
          menu_title: "New Volunteer",
          menu_icon: "fa fa-user-plus"
        },
        {
          path: "/app/dashboard",
          menu_title: "Volunteers",
          menu_icon: "fa fa-users",
        },
        {
          path: "/app/dashboard",
          menu_title: "Volunteers TimeLog",
          menu_icon: "fa fa-clock-o"
        }
      ]
    },
    {
      menu_title: "Service Providers",
      menu_icon: "ti ti-user",
      path: "/app/dashboard",
      child_routes: [
        {
          path: "/app/dashboard",
          menu_title: "New Service Provider"
        },
        {
          path: "/app/dashboard",
          menu_title: "Service Providers"
        },
        {
          path: "/app/dashboard",
          menu_title: "Service Providers TimeLogs"
        },
        {
          path: "/app/dashboard",
          menu_title: "Service Providers Invoices"
        },
        {
          path: "/app/dashboard",
          menu_title: "Service Providers Goods Logs"
        }
      ]
    }
  ],
  //Donations
  category3: [
    {
      menu_title: "New Donor",
      menu_icon: "fa fa-user-plus",
      path: "/app/dashboard",
      child_routes: null
    },
    {
      menu_title: "Donation Pledge",
      menu_icon: "",
      child_routes: [
        {
          path: "/app/dashboard",
          menu_title: "New Donation Pledge",
          menu_icon: "",          
        },
        {
          path: "/app/dashboard",
          menu_title: "Donation Pledges",
          menu_icon: "",          
        },
        {
          path: "/app/dashboard",
          menu_title: "Sub Pledges",
          menu_icon: "",          
        }
      ]
    },
    {
      menu_title: "Donate Now",
      menu_icon: "fa fa-plus-circle",
      path: "/app/dashboard",
      child_routes: null
    },
    {
      menu_title: "Donation Transaction",
      menu_icon: "fa fa-exchange",
      path: "/app/dashboard",
      child_routes: null
    }
  ],
  //Campaign
  category4: [
    {
      menu_title: "Add Campaign",
      menu_icon: "",
      child_routes: [
        {
          path: "/app/dashboard",
          menu_title: "New Campaign",
          menu_icon: "",          
        },
        {
          path: "/app/dashboard",
          menu_title: "New Participation",
          menu_icon: "",          
        }
      ]
    },
    {
      menu_title: "Campaign",
      menu_icon: "",
      child_routes: [
        {
          path: "/app/dashboard",
          menu_title: "Campaign List",
          menu_icon: "",
        },
        {
          path: "/app/dashboard",
          menu_title: "Participation List",
          menu_icon: "",
        }
      ]
    }
  ],
  //Events
  category5: [
    {
      menu_title: "New Event",
      menu_icon: "fa fa-calendar",
      path: "/app/dashboard",
      child_routes: null
    },
    {
      menu_title: "Event List",
      menu_icon: "fa fa-calendar",
      path: "/app/dashboard",
      child_routes: null
    },
    {
      menu_title: "Programs",
      menu_icon: "",
      path: "/app/dashboard",
      child_routes: null
    },
    {
      menu_title: "Event Activity Members",
      menu_icon: "fa fa-users",
      path: "/app/dashboard",
      child_routes: null
    },
    {
      menu_title: "Bookings",
      menu_icon: "fa fa-bookmark",
      path: "/app/dashboard",
      child_routes: null
    },
    {
      menu_title: "Event Tickets",
      menu_icon: "fa fa-ticket",
      path: "/app/dashboard",
      child_routes: null
    },
    {
      menu_title: "Event Members",
      menu_icon: "fa fa-users",
      path: "/app/dashboard",
      child_routes: null
    },
    {
      menu_title: "Booking Transactions",
      menu_icon: "fa fa-exchange",
      path: "/app/dashboard",
      child_routes: null
    }
  ]
};
