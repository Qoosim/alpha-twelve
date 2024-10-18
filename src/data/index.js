import HomeIcon from "../assets/icons/home.svg"
import EventIcon from "../assets/icons/event.svg"
import SpeakerIcon from "../assets/icons/speaker.svg"
import ReportIcon from "../assets/icons/report.svg"
import BellIcon from "../assets/icons/bell.svg"
import MsgIcon from "../assets/icons/msg-icon.svg"
import SettingIcon from "../assets/icons/settings-icon.svg"
import CollapseIcon from "../assets/icons/collapse-icon.svg"

import ArrowUp from "../assets/icons/arrow-up-right.svg"
import ArrowDown from "../assets/icons/arrow-down-right.svg"
import Information from "../assets/icons/information.svg"


export const sidebarItems = [
    {
        id: 1,
        icon: HomeIcon,
        text: "Home",
        url: "/"
    },
    {
        id: 2,
        icon: EventIcon,
        text: "Event",
        url: "/event"
    },
    {
        id: 3,
        icon: SpeakerIcon,
        text: "Speakers",
        url: "/speakers"
    },
    {
        id: 4,
        icon: ReportIcon,
        text: "Reports",
        url: "/reports"
    },
    {
        id: 5,
        icon: BellIcon,
        text: "Notifications",
        url: "/notifications"
    },
    {
        id: 6,
        icon: MsgIcon,
        text: "Messages",
        url: "/messages"
    },
    {
        id: 7,
        icon: SettingIcon,
        text: "Settings",
        url: "/settings"
    },
    {
        id: 8,
        icon: CollapseIcon,
        text: "Collapse",
        url: "/collapse"
    }
]

export const cardContent = [
    {
        id: 1,
        text: "Total Events",
        value: "100,000",
        statusIcon: ArrowUp,
        infoIcon: Information,
        percentage: "+5.0%",
        color: "green"
    },
    {
        id: 2,
        text: "Active Speakers",
        value: "25",
        statusIcon: ArrowDown,
        infoIcon: Information,
        percentage: "-5.0%",
        color: "red"
    },
    {
        id: 3,
        text: "Total Registration",
        value: "300",
        statusIcon: ArrowUp,
        infoIcon: Information,
        percentage: "+5.0%",
        color: "green"
    },
    {
        id: 4,
        text: "Total Revenue",
        value: "$500,000",
        statusIcon: ArrowUp,
        infoIcon: Information,
        percentage: "+5.0%",
        color: "green"
    }
]