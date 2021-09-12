import React from "react";
import DashboardIcon from "@material-ui/icons/Dashboard";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import PersonIcon from "@material-ui/icons/Person";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
export const Sidebardata = [
  {
    title: "Dashboard",
    icon: <DashboardIcon />,
    link: "/dashboard",
  },
  {
    title: "Courses",
    icon: <LocalLibraryIcon />,
    link: "/courses",
  },
  {
    title: "Availability",
    icon: <CalendarTodayIcon />,
    link: "/availability",
  },
  {
    title: "Students",
    icon: <PersonIcon />,
    link: "/students",
  },
  {
    title: "Blog",
    icon: <FileCopyIcon />,
    link: "/blogs",
  },
  {
    title: "Coupon",
    icon: <FileCopyIcon />,
    link: "/coupan",
  },
  {
    title: "Earnings",
    icon: <AttachMoneyIcon />,
    link: "/earnings",
  },
];
