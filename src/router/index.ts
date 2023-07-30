// replace
// import UserDetails from './views/UserDetails'

import { createRouter, createWebHistory } from "vue-router"

// with
const DashboardPage = () => import("@pages/dashboard/DashboardPage.vue")
const AccountPage = () => import("@pages/account/AccountPage.vue")
const BookingsPage = () => import("@pages/bookings/BookingsPage.vue")
const CabinsPage = () => import("@pages/cabins/CabinsPage.vue")
const UsersPage = () => import("@pages/users/UsersPage.vue")
const SettingsPage = () => import("@pages/settings/SettingsPage.vue")
const LoginPage = () => import("@pages/login/LoginPage.vue")
const NotFound = () => import("@pages/NotFound.vue")

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", redirect: { name: "Dashboard" } },
        { path: "/dashboard", component: DashboardPage, name: "Dashboard" },
        { path: "/account", component: AccountPage, name: "Account" },
        { path: "/bookings", component: BookingsPage, name: "Bookings" },
        { path: "/users", component: UsersPage, name: "Users" },
        { path: "/cabins", component: CabinsPage, name: "Cabins" },
        { path: "/settings", component: SettingsPage, name: "Settings" },
        { path: "/login", component: LoginPage, name: "Login" },
        { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound }
    ]
})
