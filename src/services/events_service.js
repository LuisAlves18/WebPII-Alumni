import API_URL from "./config.js";
function authHeader() {
  // checks Local Storage for user item
  let user = JSON.parse(localStorage.getItem("user"));

  // if there is a logged in user with accessToken (JWT)
  if (user && user.accessToken) {
    // return HTTP authorization header for Node.js Express back-end
    return {
      "Content-Type": "application/json",
      "x-access-token": user.accessToken,
    };
  } else {
    return { "Content-Type": "application/json" }; //otherwise, return an empty object
  }
}
export const EventService = {
  async fetchAllEvents() {
    const response = await fetch(`${API_URL}/events`, {
      method: "GET",
    });
    if (response.ok) {
      let data = await response.json();
      // console.log("USER SERVICE - fetch ALL USERS")
      console.log(data);
      return data;
    } else {
      // console.log("USER SERVICE - fetch ALL USERS: ERROR ");
      // console.log(response)
      throw Error(handleResponses(response.status));
    }
  },
  async fetchOneEvent(eventID) {
    const response = await fetch(`${API_URL}/events/${eventID}`, {
      method: "GET",
      headers: authHeader(),
    });
    if (response.ok) {
      let data = await response.json();
      // console.log("USER SERVICE - fetch ALL USERS")
      console.log(data);
      return data;
    } else {
      // console.log("USER SERVICE - fetch ALL USERS: ERROR ");
      // console.log(response)
      throw Error(handleResponses(response.status));
    }
  },
  async fetchAddEvent(event) {
    console.log("pedido feito");
    const response = await fetch(`${API_URL}/events/`, {
      method: "POST",
      headers: authHeader(),
      body: JSON.stringify({
        id_event_type: event.id_event_type,
        name: event.name,
        price: event.price,
        description: event.description,
        photo: event.photo,
        date: event.date,
        time: event.time,
        date_limit: event.date_limit,
        link: event.link,
        address: event.address,
        nrLimit: event.nrLimit,
      }),
    });
    if (response.ok) {
      let data = await response.json();
      // console.log("USER SERVICE - fetch ALL USERS")
      console.log(data);
      return data;
    } else {
      // console.log("USER SERVICE - fetch ALL USERS: ERROR ");
      // console.log(response)
      throw Error(handleResponses(response.status));
    }
  },
  async fetchUpdateEvent(event) {
    console.log("pedido feito");
    const response = await fetch(`${API_URL}/events/${event.id}`, {
      method: "PUT",
      headers: authHeader(),
      body: JSON.stringify({
        id_event_type: event.id_event_type,
        name: event.name,
        price: event.price,
        description: event.description,
        photo: event.photo,
        date: event.date,
        time: event.time,
        date_limit: event.date_limit,
        link: event.link,
        address: event.address,
        nrLimit: event.nrLimit,
      }),
    });
    if (response.ok) {
      let data = await response.json();
      // console.log("USER SERVICE - fetch ALL USERS")
      console.log(data);
      return data;
    } else {
      // console.log("USER SERVICE - fetch ALL USERS: ERROR ");
      // console.log(response)
      throw Error(handleResponses(response.status));
    }
  },
  async fetchDeleteEvent(eventID) {
    const response = await fetch(`${API_URL}/events/${eventID}`, {
      method: "DELETE",
      headers: authHeader(),
    });
    if (response.ok) {
      let data = await response.json();
      return data;
    } else {
      throw Error(handleResponses(response.status));
    }
  },
  async fetchAllEventTypes() {
    const response = await fetch(`${API_URL}/eventsType`, {
      method: "GET",
    });
    if (response.ok) {
      let data = await response.json();
      console.log(data);
      return data;
    } else {
      // console.log("USER SERVICE - fetch ALL USERS: ERROR ");
      // console.log(response)
      throw Error(handleResponses(response.status));
    }
  },
  async getPublicContent() {
    // return axios.get(API_URL);
    const response = await fetch(`${API_URL}`, {
      method: "GET", // requires NO authorization header
    });
    if (response.ok) {
      let data = await response.json();
      // console.log("USER SERVICE - fetch WELCOMING MESSAGE")
      // console.log(data) // data = "Welcome to the TUTORIALS api"
      return data;
    } else throw Error(handleResponses(response.status));
  },
};

export default EventService;

function handleResponses(code) {
  let message = "";
  switch (code) {
    case 401:
      message = "Not allowed to executed this action!";
      break;
    case 403:
      message = "Forbidden access";
      break;
    default:
      message = "Unkown message";
      break;
  }
  return message;
}
