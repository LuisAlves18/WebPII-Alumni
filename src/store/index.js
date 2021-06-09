import Vue from "vue";
import Vuex from "vuex";

import { EventService } from "../services/events_service";
import { OfferService } from "../services/offers_service";
import { AuthService } from "../services/auth_service";
import { UserService } from "../services/user_service";
import { CompanyService } from "../services/companies_service";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    loggedIn: "",
    loggedUser: "",
    userProfileContent: "",
    companyProfileContent: "",
    eventsProfileContent: "",
    offersProfileContent: "",
    companies: [],
    events: [],
    events_type: [],
    enrollments: localStorage.getItem("enrollments")
      ? JSON.parse(localStorage.getItem("enrollments"))
      : [],
    offers: [],
    offers_type: [],
    areas: [],
  },
  getters: {
    getEvents: (state) => state.events,
    getLoggedUser: (state) => state.loggedUser,
    isLoggedUser: (state) => (state.loggedUser == "" ? false : true),
    isLoggedAdmin: (state) => (state.loggedUser.type == "admin" ? true : false),
  },
  actions: {
    async getAPIRoot({ commit }) {
      const result = await EventService.getPublicContent();
      console.log("pedido");
      commit("SET_MESSAGE", result.message);
    },
    async login({ commit }, user) {
      try {
        const loggedUser = await AuthService.login(user);
        commit("LOGIN_SUCCESS", loggedUser);
      } catch (error) {
        commit("LOGIN_FAILURE");

        throw error;
      }
    },
    logout(context) {
      context.commit("LOGOUT");
      localStorage.removeItem("user");
    },
    async register({ commit }, user) {
      //verificar se ja existe este user
      try {
        const response = await AuthService.register(user);
        // console.log("STORE REGISTER SUCCES: response is...")
        console.log(response);
        commit("SET_MESSAGE", response.message);
      } catch (error) {
        console.log("STORE REGISTER FAILS");
        console.log(error);
        throw error;
      }
    },
    //Users
    async fetchAllUsers({ commit }) {
      try {
        console.log("pedido feito");
        const users = await UserService.fetchAllUsers();
        console.log("STORE events: " + users.length);
        commit("SET_USERS", users);

        //return Promise.resolve(users);
      } catch (error) {
        // console.log('STORE listUsers: ' + error);
        console.log("error");
        commit("SET_USERS", []);
        commit("SET_MESSAGE", error);
        throw error; // Needed to continue propagating the error
        //return Promise.reject(error);
      }
    },
    async editProfile({ commit }, user) {
      try {
        const response = await UserService.fetchUpdateUser(user);
        // console.log("STORE REGISTER SUCCES: response is...")
        console.log(response);
        commit("SET_MESSAGE", response.message);
      } catch (error) {
        console.log("user update FAILS");
        console.log(error);
        throw error;
      }
    },
    async removeUser({ commit }, id) {
      try {
        const response = await UserService.fetchDeleteUser(id);
        console.log(response);
        commit("SET_MESSAGE", response.message);
      } catch (error) {
        console.log("STORE REGISTER FAILS");
        console.log(error);
        throw error;
      }
    },
    seeMore(context, payload) {
      context.commit("SEEMORE", payload);
    },
    async updateUserStatusByAdmin({ commit }, user) {
      try {
        const response = await UserService.fetchUpdateUserByAdmin(user);
        // console.log("STORE REGISTER SUCCES: response is...")
        console.log(response);
        commit("SET_MESSAGE", response.message);
      } catch (error) {
        console.log("user update FAILS");
        console.log(error);
        throw error;
      }
    },
    //company
    async fetchAllCompanies({ commit }) {
      try {
        console.log("pedido feito");
        const companies = await CompanyService.fetchAllCompanies();
        console.log("STORE companies: " + companies.length);
        commit("SET_COMPANIES", companies);
      } catch (error) {
        console.log("error");
        commit("SET_COMPANIES", []);
        commit("SET_MESSAGE", error);
        throw error; // Needed to continue propagating the error
        //return Promise.reject(error);
      }
    },
    async removeCompany({ commit }, id) {
      try {
        const response = await CompanyService.fetchDeleteCompany(id);
        console.log(response);
        commit("SET_MESSAGE", response.message);
      } catch (error) {
        console.log("delete company FAILS");
        console.log(error);
        throw error;
      }
    },
    async addCompany({ commit }, company) {
      try {
        console.log(company);
        const response = await CompanyService.fetchAddCompany(company);
        console.log(response);
        commit("SET_MESSAGE", response.message);
      } catch (error) {
        console.log("add company FAILS");
        console.log(error);
        throw error;
      }
    },
    seeMoreCompany(context, payload) {
      context.commit("SEEMORECOMPANY", payload);
    },
    async editCompany({ commit }, company) {
      try {
        const response = await CompanyService.fetchUpdateCompany(company);
        // console.log("STORE REGISTER SUCCES: response is...")
        console.log(response);
        commit("SET_MESSAGE", response.message);
      } catch (error) {
        console.log("company update FAILS");
        console.log(error);
        throw error;
      }
    },
    async fetchAllAreas({ commit }) {
      try {
        console.log("pedido feito");
        const areas = await CompanyService.fetchAllAreas();
        console.log("STORE events: " + areas.length);
        commit("SET_AREAS", areas);

        //return Promise.resolve(users);
      } catch (error) {
        // console.log('STORE listUsers: ' + error);
        console.log("error");
        commit("SET_AREAS", []);
        commit("SET_MESSAGE", error);
        throw error; // Needed to continue propagating the error
        //return Promise.reject(error);
      }
    },
    async fetchAllOffersType({ commit }) {
      try {
        console.log("pedido feito");
        const offersType = await OfferService.fetchAllOffersType();
        console.log("STORE events: " + offersType.length);
        commit("SET_OFFERS_TYPE", offersType);

        //return Promise.resolve(users);
      } catch (error) {
        // console.log('STORE listUsers: ' + error);
        console.log("error");
        commit("SET_OFFERS_TYPE", []);
        commit("SET_MESSAGE", error);
        throw error; // Needed to continue propagating the error
        //return Promise.reject(error);
      }
    },
    //events
    async fetchAllEventTypes({ commit }) {
      try {
        console.log("pedido feito");
        const events_type = await EventService.fetchAllEventTypes();
        console.log("STORE events: " + events_type.length);
        commit("SET_EVENTTYPE", events_type);

        //return Promise.resolve(users);
      } catch (error) {
        // console.log('STORE listUsers: ' + error);
        console.log("error");
        commit("SET_EVENTTYPE", []);
        commit("SET_MESSAGE", error);
        throw error; // Needed to continue propagating the error
        //return Promise.reject(error);
      }
    },
    async fetchAllEvents({ commit }) {
      try {
        console.log("pedido feito");
        const events = await EventService.fetchAllEvents();
        console.log("STORE events: " + events.length);
        commit("SET_EVENT", events);

        //return Promise.resolve(users);
      } catch (error) {
        // console.log('STORE listUsers: ' + error);
        console.log("error");
        commit("SET_EVENT", []);
        commit("SET_MESSAGE", error);
        throw error; // Needed to continue propagating the error
        //return Promise.reject(error);
      }
    },
    async fetchAddEvent({ commit }, event) {
      try {
        const response = await EventService.fetchAddEvent(event);
        // console.log("STORE REGISTER SUCCES: response is...")
        console.log(response);
        commit("SET_MESSAGE", response.message);
      } catch (error) {
        console.log("add event FAILS");
        console.log(error);
        throw error;
      }
    },
    async fetchPayEnrollment({ commit }, payload) {
      try {
        const response = await EventService.fetchPayEnrollment(payload);
        // console.log("STORE REGISTER SUCCES: response is...")
        console.log(response);
        commit("SET_MESSAGE", response.message);
      } catch (error) {
        console.log("pay event FAILS");
        console.log(error);
        throw error;
      }
    },
    seeMoreEvent(context, payload) {
      context.commit("SEEMOREEVENT", payload);
    },
    manageEnrollments(context, payload) {
      context.commit("MANAGE_ENROLLMENTS", payload);
    },
    async fetchAddEnrollment({ commit }, event) {
      try {
        const response = await EventService.fetchAddEnrollment(event);
        // console.log("STORE REGISTER SUCCES: response is...")
        console.log(response);
        commit("SET_MESSAGE", response.message);
      } catch (error) {
        console.log("add enrollment FAILS");
        console.log(error);
        throw error;
      }
    },
    async fetchCancelEnrollment({ commit }, event) {
      try {
        const response = await EventService.fetchCancelEnrollment(event);
        // console.log("STORE REGISTER SUCCES: response is...")
        console.log(response);
        commit("SET_MESSAGE", response.message);
      } catch (error) {
        console.log("cancel enrollment FAILS");
        console.log(error);
        throw error;
      }
    },
    async editEvent({ commit }, event) {
      try {
        const response = await EventService.fetchUpdateEvent(event);
        // console.log("STORE REGISTER SUCCES: response is...")
        console.log(response);
        commit("SET_MESSAGE", response.message);
      } catch (error) {
        console.log("offer update FAILS");
        console.log(error);
        throw error;
      }
    },
    addGuest(context, payload) {
      context.commit("ADDGUEST", payload);
      localStorage.setItem("guests", JSON.stringify(context.state.guests));
    },
    async removeEvent({ commit }, id) {
      try {
        const response = await EventService.fetchDeleteEvent(id);
        console.log(response);
        commit("SET_MESSAGE", response.message);
      } catch (error) {
        console.log("STORE REGISTER FAILS");
        console.log(error);
        throw error;
      }
    },

    enrollEvent(context, payload) {
      const event = context.state.events.find(
        (event) => event.id === payload.idEvent
      );
      if (event.nrLimit > 0) {
        context.commit("ENROLLEVENT", payload);
        localStorage.setItem(
          "enrollments",
          JSON.stringify(context.state.enrollments)
        );
        localStorage.setItem("events", JSON.stringify(context.state.events));
        localStorage.setItem("users", JSON.stringify(context.state.users));
      } else {
        throw Error("Capacidade máxima de inscrições atingida!");
      }
    },
    acceptEnrollment(context, payload) {
      context.commit("ACCEPT_ENROLLMENT", payload);
    },
    unsubscribeEvent(context, payload) {
      context.commit("UNSUBSCRIBE_EVENT", payload);
      localStorage.setItem(
        "enrollments",
        JSON.stringify(context.state.enrollments)
      );
      localStorage.setItem("events", JSON.stringify(context.state.events));
      localStorage.setItem("users", JSON.stringify(context.state.users));
    },

    //offers
    async fetchAllOffers({ commit }) {
      try {
        console.log("pedido feito");
        const offers = await OfferService.fetchAllOffers();
        console.log("STORE offers: " + offers.length);
        commit("SET_OFFER", offers);
      } catch (error) {
        // console.log('STORE listUsers: ' + error);
        console.log("error");
        commit("SET_OFFER", []);
        commit("SET_MESSAGE", error);
        throw error; // Needed to continue propagating the error
        //return Promise.reject(error);
      }
    },
    async editOffer({ commit }, offer) {
      try {
        const response = await OfferService.fetchUpdateOffer(offer);
        // console.log("STORE REGISTER SUCCES: response is...")
        console.log(response);
        commit("SET_MESSAGE", response.message);
      } catch (error) {
        console.log("offer update FAILS");
        console.log(error);
        throw error;
      }
    },
   async addOffer({commit}, offer) {
      try {
        const response = await OfferService.fetchAddOffer(offer);
        // console.log("STORE REGISTER SUCCES: response is...")
        console.log(response);
        commit("SET_MESSAGE", response.message);
      } catch (error) {
        console.log("add event FAILS");
        console.log(error);
        throw error;
      }
    },
    async removeOffer({ commit }, id) {
      try {
        const response = await OfferService.fetchDeleteOffer(id);
        console.log(response);
        commit("SET_MESSAGE", response.message);
      } catch (error) {
        console.log("STORE REGISTER FAILS");
        console.log(error);
        throw error;
      }
    },
    seeMoreOffer(context, payload) {
      context.commit("SEEMOREOFFER", payload);
    },
  },

  mutations: {
    SET_MESSAGE(state, payload) {
      state.message = payload;
    },
    LOGIN_SUCCESS(state, payload) {
      state.loggedIn = true;
      state.loggedUser = payload;
    },
    LOGIN_FAILURE(state) {
      state.loggedIn = false;
      state.loggedUser = "";
    },
    LOGOUT(state) {
      state.loggedIn = false;
      state.loggedUser = "";
    },
    REGISTER(state, user) {
      state.users.push(user);
    },
    SET_USERS(state, payload) {
      console.log("STORE MUTATION SET_USERS: " + payload.length);
      state.users = payload;
    },
    SET_COMPANIES(state, payload) {
      console.log("STORE MUTATION SET_COMPANIES: " + payload.length);
      state.companies = payload;
    },
    SET_AREAS(state, payload) {
      console.log("STORE MUTATION SET_Areas: " + payload.length);
      state.areas = payload;
    },
    REMOVEUSER(state, userEmail) {
      state.users = state.users.filter((user) => user.email != userEmail);
    },
    SEEMORE(state, user) {
      state.userProfileContent = user;
    },
    UPDATESTATUS(state, payload) {
      state.users = state.users.map((user) => {
        if (user.email == payload.email) {
          user.estado = payload.statusChange;
        }
        return user;
      });
    },
    EDITPROFILE(state, payload) {
      state.users = state.users.map((user) => {
        if (user.nrAluno == payload.nrAluno) {
          user.fname = payload.fname;
          user.lname = payload.lname;
          user.address = payload.address;
          user.email = payload.email;
          user.password = payload.password;
          user.facebook = payload.facebook;
          user.instagram = payload.instagram;
          user.linkedin = payload.linkedin;
          user.logo = payload.logo;
          user.photo = payload.photo;
          user.pontos = payload.pontos;
        }
        return user;
      });
    },
    REMOVECOMPANY(state, payload) {
      state.companies = state.companies.filter(
        (company) => company.id != payload
      );
    },
    ADDCOMPANY(state, payload) {
      state.companies.push(payload);
    },
    SEEMORECOMPANY(state, payload) {
      state.companyProfileContent = payload;
    },
    EDITCOMPANY(state, payload) {
      state.companies = state.companies.map((company) => {
        if (company.id == payload.id) {
          company.name = payload.name;
          company.address = payload.address;
          company.email = payload.email;
          company.website = payload.website;
          company.linkedIN = payload.linkedIN;
          company.logo = payload.logo;
        }
        return company;
      });
    },
    //eventos
    SET_EVENT(state, payload) {
      console.log("STORE MUTATION SET_EVENTS: " + payload.length);
      state.events = payload;
    },
    SET_EVENTTYPE(state, payload) {
      console.log("STORE MUTATION SET_EVENTSTYPE: " + payload.length);
      state.events_type = payload;
    },
    REMOVEEVENT(state, payload) {
      state.events = state.events.filter((event) => event.id != payload);
    },
    ADDEVENT(state, payload) {
      const newEvent = {
        id: payload.id,
        id_event_type: payload.id_event_type,
        name: payload.name,
        price: payload.price,
        description: payload.description,
        photo: payload.photo,
        date_time_event: payload.date_time_event,
        date_limit: payload.date_limit,
        link: payload.link,
        address: payload.address,
        nrLimit: payload.nrLimit,
      };
      state.events.push(newEvent);
      state.guests = state.guests.concat(payload.guests);
    },
    SEEMOREEVENT(state, payload) {
      state.eventsProfileContent = payload;
    },
    MANAGE_ENROLLMENTS(state, payload) {
      state.eventsProfileContent = payload;
    },
    EDITEVENT(state, payload) {
      state.events = state.events.map((event) => {
        if (event.id == payload.id) {
          event.name = payload.name;
          event.price = payload.price;
          event.description = payload.description;
          event.photo = payload.photo;
          event.link = payload.link;
          event.date_time_event = payload.date_time_event;
          event.date_limit = payload.date_limit;
          event.address = payload.address;
          event.nrLimit = payload.nrLimit;
        }
        return event;
      });
    },
    ADDGUEST(state, payload) {
      state.guests = state.guests.concat(payload);
    },
    ENROLLEVENT(state, payload) {
      state.enrollments.push(payload);
      state.events.map((event) => {
        if (event.id == payload.idEvent) {
          event.nrLimit = event.nrLimit - 1;
        }
        return event;
      });
      state.users.map((user) => {
        if (user.nrAluno == payload.idUser) {
          user.pontos = user.pontos + 1;
        }
      });
    },
    ACCEPT_ENROLLMENT(state, payload) {
      state.enrollments.map((enroll) => {
        if (
          enroll.idEvent == payload.idEvent &&
          enroll.idUser == payload.idUser
        ) {
          enroll.state = "inscrito";
        }
        return enroll;
      });
    },
    UNSUBSCRIBE_EVENT(state, payload) {
      state.enrollments = state.enrollments.filter((enrollment) => {
        if (enrollment.idEvent == payload.idEvent) {
          if (enrollment.idUser == payload.idUser) {
            return false;
          } else {
            return true;
          }
        } else {
          return true;
        }
      });
      state.events.map((event) => {
        if (event.id == payload.idEvent) {
          event.nrLimit = event.nrLimit + 1;
        }
        return event;
      });
      state.users.map((user) => {
        if (user.nrAluno == payload.idUser) {
          user.pontos = user.pontos - 1;
        }
      });
    },
    SET_OFFER(state, payload) {
      console.log("STORE MUTATION SET_OFFER: " + payload.length);
      state.offers = payload;
    },
    SEEMOREOFFER(state, payload) {
      state.offersProfileContent = payload;
    },
    EDITOFFER(state, payload) {
      state.offers = state.offers.map((offer) => {
        if (offer.id == payload.id) {
          offer.id_Company = payload.id_Company;
          offer.description = payload.description;
          offer.emailContact = payload.emailContact;
          offer.id_type_offer = payload.id_type_offer;
          offer.id_area = payload.id_area;
          offer.duration = payload.duration;
        }
        return offer;
      });
    },
    ADDOFFER(state, payload) {
      state.offers.push(payload);
    },
    REMOVEOFFER(state, id) {
      state.offers = state.offers.filter((offer) => offer.id != id);
    },
    SET_OFFERS_TYPE(state, payload) {
      console.log("STORE MUTATION SET_OFFERSTYPE: " + payload.length);
      state.offers_type = payload;
    },
  },
});
