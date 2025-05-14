import { FaUsers, FaUserTie } from "react-icons/fa";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { LuBrainCircuit, LuPackageSearch } from "react-icons/lu";
import { AuthenticatedRoutes } from "../Routes";
import { FaRegNewspaper, FaWallet } from "react-icons/fa6";
import { MdManageHistory, MdOutlineAddCard } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { MainContent } from "./MainContent";
import { TfiAnnouncement } from "react-icons/tfi";
<<<<<<< HEAD
import { MdCheck } from 'react-icons/md';
import { MdCreditCard } from 'react-icons/md';

=======
import { BiSupport } from "react-icons/bi";
import { GrAchievement, GrAnnounce } from "react-icons/gr";
>>>>>>> d308730531495a6c915883832c05b65cae946a91

export const SidebarContent = {
    user: [
        {
            id: "Dashboard",
            icon: <HiOutlineSquares2X2 />,
            name: "Dashboard",
            link: AuthenticatedRoutes.USER_DASHBOARD,
        },
        {
            id: "Assets",
            icon: <MdCreditCard />,
            name: "Assets",
            link: AuthenticatedRoutes.ASSETS,
            options: [
                {
                    id: "Dapp Wallet",
                    name: "Dapp Wallet",
                    link: AuthenticatedRoutes.DAPP_WALLET,
                },
                {
                    id: "USDT(BEP-20)",
                    name: "USDT(BEP-20)",
                    link: AuthenticatedRoutes.USDT_BEP,
                },
                {
                    id: "USDT(TRC-20)",
                    name: "USDT(TRC-20)",
                    link: AuthenticatedRoutes.USDT_TRC,
                },
                {
                    id: "WITHDRAWAL",
                    name: "WITHDRAWAL",
                    link: AuthenticatedRoutes.WITHDRAWAL,
                },
            ],
        },
        {
            id: "Wallet",
            icon: <FaWallet />,
            name: "Wallet",
            options: [
                {
                    id: "Wallet",
                    name: "Wallet",
                    link: AuthenticatedRoutes.WALLET,
                },
                {
                    id: "Withdrawal Report",
                    name: "Withdrawal Report",
                    link: AuthenticatedRoutes.WITHDRAWAL_REPORT,
                },
            ],
        },

        // {
        //     id: "Income Report",
        //     icon: <LuPackageSearch />,
        //     name: "Income Report",
        //     options: [
        //         {
        //             id: "Referral Income",
        //             name: "Referral Income",
        //             link: AuthenticatedRoutes.REFERRAL_INCOME_REPORT,
        //         },
        //         {
        //             id: "ROI Income",
        //             name: "ROI Income",
        //             link: AuthenticatedRoutes.ROI_INCOME_REPORT,
        //         },
                // {
                //   id: "Spin Income",
                //   name: "Spin Income",
                //   link: AuthenticatedRoutes.SPIN_INCOME_REPORT,
                // },
                // {
                //   id: "Royalty Income",
                //   name: "ROI Income",
                //   link: AuthenticatedRoutes.ROYALTY_INCOME_REPORT,
                // },
                // {
                //     id: "Level Income",
                //     name: "Level Income",
                //     link: AuthenticatedRoutes.LEVEL_INCOME_REPORT,
                // },
                // {
                //     id: "Matching Income",
                //     name: "Matching Income",
                //     link: AuthenticatedRoutes.MATCHING_INCOME_REPORT,
                // },
<<<<<<< HEAD
        //     ],
        // },
 
    
       


        // {
        //     id: "Notification & Announcements",
        //     icon: <TfiAnnouncement />,
        //     name: "Notification & Announcements",
        //     link: AuthenticatedRoutes.NEWS_AND_NOTIF,
        // },
=======
            ],
        },
        {
            id: "History",
            icon: <MdManageHistory />,
            name: "History",
            link: AuthenticatedRoutes.HISTORY,
        },
        {
            id: "AI Agent",
            icon: <LuBrainCircuit />,
            name: "AI Agent",
            link: AuthenticatedRoutes.AI_AGENT,
        },
        {
            id: "Support-AI",
            icon: <BiSupport />,
            name: "Support",
            link: AuthenticatedRoutes.SUPPORT,
        },
        {
            id: "Announcements",
            icon: <GrAnnounce />,
            name: "Announcements",
            link: AuthenticatedRoutes.ANNOUNCEMENTS,
        },
        {
            id: "Level Achievement",
            icon: <GrAchievement />,
            name: "Level Achievement",
            link: AuthenticatedRoutes.LEVEL_ACHIEVEMENT,
        },
        {
            id: "Notification & Announcements",
            icon: <TfiAnnouncement />,
            name: "Notification & Announcements",
            link: AuthenticatedRoutes.NEWS_AND_NOTIF,
        },
>>>>>>> d308730531495a6c915883832c05b65cae946a91

        // route added by vikas 

        {
            id: "Activity",
            icon: <TfiAnnouncement />,
            name: "Acitvity",
            link: AuthenticatedRoutes.Activity,
        },
<<<<<<< HEAD
        {
            id: "AirDrop Alert",
            icon: <TfiAnnouncement />,
            name: "AIrDrop Alert",
            link: AuthenticatedRoutes.USERAIRDROPALERT,
        },
       

        {
            id: "Market",
            icon: <MdCheck />,
            name: "Market",
            link: AuthenticatedRoutes.MARKET,
        },
       
=======

>>>>>>> d308730531495a6c915883832c05b65cae946a91
        {
            id: "Our Team",
            icon: <FaUsers />,
            name: "Our Team",
            options: [
                {
                    id: "Direct",
                    name: "Direct",
                    link: AuthenticatedRoutes.TEAM_DIRECT,
                },
                {
                    id: "Levels",
                    name: "Levels",
                    link: AuthenticatedRoutes.TEAM_TREE,
                },
            ],
        },
        {
            id: "OurPlan",
            icon: <MdOutlineAddCard />,
            name: "Our Plan",
            options: [
                {
                    id: "Our Plans",
                    name: "Our Plans",
                    link: AuthenticatedRoutes.OUR_PLANS,
                },
                {
                    id: "Purchase Plan History",
                    name: "Purchase Plan History",
                    link: AuthenticatedRoutes.PURCHASE_PLAN_HISTORY,
                },
            ],
        },

        {
            id: "Support",
            icon: <BiSupport />,
            name: "Help & Support",
            options: [
                {
                    id: "Support",
                    name: "Raise Ticket",
                    link: AuthenticatedRoutes.SUPPORT_RAISE_TICKET,
                },
                {
                    id: "Support History",
                    name: "Raise Ticket History",
                    link: AuthenticatedRoutes.SUPPORT_RAISE_TICKET_HISTORY,
                },
                // {
                //     id: "Connect on Telegram",
                //     name: "Connect on Telegram",
                //     link: MainContent.telegram_link,
                //     external: true,
                // },
            ],
        },
        // {
        //   id: "Profile",
        //   icon: <FaUserTie />,
        //   name: "Account Setting",
        //   options: [
        //     {
        //       id: "Profile",
        //       name: "Profile",
        //       link: AuthenticatedRoutes.USER_PROFILE,
        //     },

        //   ],
        // },
    ],
    admin: [
        {
            id: "Dashboard",
            icon: <HiOutlineSquares2X2 />,
            name: "Dashboard",
            link: AuthenticatedRoutes.ADMIN_DASHBOARD,
        },
        {
            id: "Users",
            icon: <FaUsers />,
            name: "Users",
            options: [
                {
                    id: "All Users",
                    icon: <FaUsers />,
                    name: "All Users",
                    link: AuthenticatedRoutes.ALL_USERS,
                },
                {
                    id: "Active Users",
                    icon: <FaUsers />,
                    name: "Active Users",
                    link: AuthenticatedRoutes.ACTIVE_USERS,
                },
            ],
        },

        {
            id: "financialReports",
            icon: <FaUserTie />,
            name: "Financial Reports",
            options: [
                {
                    id: "Transaction History",
                    name: "Package Purchase History",
                    link: AuthenticatedRoutes.PURCHASE_PLAN_HISTORY,
                },
                {
                    id: "Referral Income History",
                    name: "Referral Income History",
                    link: AuthenticatedRoutes.DIRECT_REFERRAL_INCOME_REPORT,
                },
                // {
                //     id: "level Income History",
                //     name: "Level Income History",
                //     link: AuthenticatedRoutes.LEVEL_INCOME_REPORT,
                // },
                {
                    id: "ROI Income History",
                    name: "ROI Income History",
                    link: AuthenticatedRoutes.ROI_INCOME_HISTORY,
                },
                // {
                //     id: "Airdrop Income History",
                //     name: "Airdrop Income History",
                //     link: AuthenticatedRoutes.DIRECT_REFERRAL_INCOME_REPORT,
                // },
            ],
        },
        {
            id: "Withdrawal Request",
            icon: <FaWallet />,
            name: "Withdrawal",
            options: [
                // {
                //     id: "Withdrawal Update",
                //     name: "Withdrawal Update",
                //     link: AuthenticatedRoutes.WITHDRAWAL_UPDATE,
                // },
                {
                    id: "Withdrawal History",
                    name: "Withdrawal History",
                    link: AuthenticatedRoutes.APPROVED_WITHDRAWAL_REQUEST,
                },
            ],
        },
        // {
        //     id: "Upload Banners",
        //     icon: <FaRegNewspaper />,
        //     name: "Upload Banners",
        //     link: AuthenticatedRoutes.NEWS_AND_NOTIF_ADMIN,
        // },
        {
            id: "Support",
            icon: <BiSupport />,
            name: "Help & Support",
            options: [
                {
                    id: "Support history",
                    name: "Raise Ticket History",
                    link: AuthenticatedRoutes.RAISE_TICKET_LIST,
                },
            ],
        },
    ],
};
