import API_URL from "./config.js";

export const OfferService = {
  async fetchAllOffers() {
    // console.log(" USER SERVICE - fetch ALL USERS started...")
    // return axios.get(API_URL + 'admin', { headers: authHeader() });
    const response = await fetch(`${API_URL}/offers`, {
      method: "GET",
    });
    if (response.ok) {
      let data = await response.json();
      // console.log("USER SERVICE - fetch ALL USERS")
      // console.log(data)
      return data;
    } else {
      // console.log("USER SERVICE - fetch ALL USERS: ERROR ");
      // console.log(response)
      throw Error(handleResponses(response.status));
    }
  },
  async fetchOneOffer(offerID) {
    console.log("pedido feito");
    const response = await fetch(`${API_URL}/offers/${offerID}`, {
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
  async fetchUpdateOffer(offer) {
    console.log("pedido feito");
    const response = await fetch(`${API_URL}/offers/${offer.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        id:offer.id,
        companyId: offer.companyId,
        typeOfferId: offer.typeOfferId,
        areaId: offer.areaId,
        description: offer.description,
        emailContact: offer.emailContact,
        duration: offer.duration,
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
  async fetchDeleteOffer(offerID) {
    const response = await fetch(`${API_URL}/offers/${offerID}`, {
        method: "DELETE",
    });
    if (response.ok) {
        let data = await response.json();
        return data;
    }
    else {
        throw Error(handleResponses(response.status));
    }
},
  // sends request to API root
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

export default OfferService;

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
