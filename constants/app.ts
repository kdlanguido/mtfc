import { AdminNavLinksI, NavLinksI } from "./interfaces";

export const NavLinks: NavLinksI[] = [
    {
        label: "Home",
        url: "/"
    },
    {
        label: "About",
        url: "/about"
    },
    {
        label: "Trainers",
        url: "/trainers"
    },
    {
        label: "Pricing",
        url: "/pricing"
    },
    {
        label: "Shop",
        url: "/store"
    },
    {
        label: "Contact",
        url: "/contact-us"
    }
];

export const AdminNavLinks: AdminNavLinksI[] = [
    {
        label: "Dashboard",
        url: "/admin/dashboard",
        imgUrl: "https://res.cloudinary.com/dlobngrjy/image/upload/v1740860549/singson/dashboard_2_1_olapna.png"
    },
    {
        label: "Manage Members",
        url: "/admin/members",
        imgUrl: "https://res.cloudinary.com/dlobngrjy/image/upload/v1740860549/singson/group-users_1_1_t1lrgc.png"
    },
    {
        label: "Session Management",
        url: "/admin/sessions",
        imgUrl: "https://res.cloudinary.com/dlobngrjy/image/upload/v1740860548/singson/laptop_1_cr3pbi.png"
    },
    {
        label: "Trainer Management",
        url: "/admin/trainers",
        imgUrl: "https://res.cloudinary.com/dlobngrjy/image/upload/v1740860549/singson/gym_1_h18xyx.png"
    },
    {
        label: "Promotion Management",
        url: "/admin/promotions",
        imgUrl: "https://res.cloudinary.com/dlobngrjy/image/upload/v1740860548/singson/marketing_zhzkjo.png"
    },
    {
        label: "Gym Equipment",
        url: "/admin/gym",
        imgUrl: "https://res.cloudinary.com/dlobngrjy/image/upload/v1740860548/singson/barbell_1_u3ctri.png"
    },
    {
        label: "Product Management",
        url: "/admin/products",
        imgUrl: "https://res.cloudinary.com/dlobngrjy/image/upload/v1740860548/singson/supplement-bottle_1_ux3cmv.png"
    }
];

export const DefaultProfileImgUrl = "https://res.cloudinary.com/dlobngrjy/image/upload/v1740755565/user-imgUrl-on-transparent-background-free-png_t6yn4k.webp"