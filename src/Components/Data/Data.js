import {
    LayoutDashboard,
    CalendarDays,
    UserRound,
    Settings,
    Frown,
} from 'lucide-react';

export const SidebarData = [
    {
        icons: LayoutDashboard,
        headings: "Dashboard",
    },
    {
        icons: CalendarDays,
        headings: "Calender",
    },
    {
        icons: UserRound,
        headings: "Profile",
    },
    {
        icons: Settings,
        headings: "Setting",
    },
];

export const CardsData = [
    {
        title: "Casual Leave",
        // color: {
        // // // // backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
        // // boxShadow: "0px 10px 20px 0px #e0c6f5",
        // },
        barvalue: 50,
        icons: Frown,
        remaining: 12,
        used: 12,
        total: 12
    },
    {
        title: "Sick Leave",
        // color: {
        // // // // backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
        // // boxShadow: "0px 10px 20px 0px #FDC0C7",
        // },
        barvalue: 60,
        icons: Frown,
        remaining: 12,
        used: 12,
        total: 12
    },
    {
        title: "Half-day",
        // color: {
        // backGround:
        // // // // "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
        // // boxShadow: "0px 10px 20px 0px #F9D59B",
        // },
        barvalue: 70,
        icons: Frown,
        remaining: 12,
        used: 12,
        total: 12,
    },
    {
        title: 'Earned Leave',
        barvalue: 50,
        icons: Frown,
        remaining: 12,
        used: 12,
        total: 12
    },
    {
        title: 'Annual Leave',
        barvalue: 50,
        icons: Frown,
        remaining: 12,
        used: 12,
        total: 12
    },
];