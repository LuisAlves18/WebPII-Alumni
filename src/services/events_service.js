import API_URL from './config.js'
export const EventService = {


    async fetchAllEvents() {
        const response = await fetch(`${API_URL}/events`, {
            method: "GET",

        });
        if (response.ok) {
            let data = await response.json();
            // console.log("USER SERVICE - fetch ALL USERS")
            console.log(data)
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

        });
        if (response.ok) {
            let data = await response.json();
            // console.log("USER SERVICE - fetch ALL USERS")
            console.log(data)
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
            method: "GET" // requires NO authorization header
        });
        if (response.ok) {
            let data = await response.json();
            // console.log("USER SERVICE - fetch WELCOMING MESSAGE")
            // console.log(data) // data = "Welcome to the TUTORIALS api"
            return data;
        } else
            throw Error(handleResponses(response.status));
    },
    async fetchUpdateEvent(event) {
        console.log("pedido feito");
        const response = await fetch(`${API_URL}/events/${event.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify({
            id_event_type: event.id_event_type,
            name: event.name,
            date_time_event: event.date_time_event,
            date_limit: event.date_limit,
            price: event.price,
            link: event.link,
            address: event.address,
            description: event.description,
            photo: event.photo,
            nrLimit: event.nrLimit,
            closed:event.closed
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
}

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