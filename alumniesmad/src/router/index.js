import Vue from "vue";
import VueRouter from "vue-router";
import Store from "../store"
import Home from "@/views/Home.vue";

import Profile from "@/views/Profile.vue";
import Offers from "@/views/Offers.vue";
import OffersView from "@/views/OffersView.vue"
import Social from "@/views/Social.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import Events from "@/views/Events.vue";
import EventsView from "@/views/EventsView.vue";
import Highlights from "@/views/Highlights.vue";

import Admin from "@/views/Admin.vue";
import ProfileView from "@/views/ProfileView.vue";
import AddCompany from "@/views/AddCompany.vue";
import CompanyProfile from "@/views/CompaniesProfile.vue";
import AddEvent from "@/views/AddEvent.vue";
import EventsDetails from "@/views/EventsDetails.vue";
import OffersDetails from "@/views/OffersDetails.vue";
import AddOffer from "@/views/AddOffer.vue";
import EnrollmentsUsersList from "@/views/EnrollmentsUsersList.vue";



Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: Home
    },

    {
        path: "/login",
        name: "Login",
        component: Login
    },
    {
        path: "/register",
        name: "Register",
        component: Register
    },
    {
        path: "/profile",
        name: "Profile",
        component: Profile,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/offers",
        name: "Offers",
        component: Offers
    },
    {
        path: "/offers/:OfferId",
        name: "OffersView",
        component: OffersView
    }, {
        path: "/events",
        name: "Events",
        component: Events
    },
    {
        path: "/events/:EventId",
        name: "EventsView",
        component: EventsView
    },
    {
        path: "/social",
        name: "Social",
        component: Social,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/highlights",
        name: "Highlights",
        component: Highlights
    },
    {
        path: "/admin",
        name: "Admin",
        component: Admin,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/admin/profileView",
        name: "ProfileView",
        component: ProfileView,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/admin/addCompany",
        name: "AddCompany",
        component: AddCompany,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/admin/companyProfile",
        name: "CompanyProfile",
        component: CompanyProfile,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/admin/addEvent",
        name: "AddEvent",
        component: AddEvent,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/admin/eventsDetails",
        name: "EventsDetails",
        component: EventsDetails,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/admin/offersDetails",
        name: "OffersDetails",
        component: OffersDetails,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/admin/addOffer",
        name: "AddOffer",
        component: AddOffer,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/admin/enrollmentsUsersList",
        name: "EnrollmentsUsersList",
        component: EnrollmentsUsersList,
        meta: {
            requiresAuth: true
        }
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !Store.getters.isLoggedUser) {
        next({ name: 'Login' })
    } else {
        next();
    }

});

export default router;