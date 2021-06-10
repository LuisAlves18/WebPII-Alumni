import API_URL from "./config.js";
function authHeader() {
  // checks Local Storage for user item
  let user = JSON.parse(localStorage.getItem('user'));
  

  // if there is a logged in user with accessToken (JWT)
  if (user && user.accessToken) {
      // return HTTP authorization header for Node.js Express back-end
      return {
          'Content-Type': 'application/json',
          'x-access-token': user.accessToken
      };
  } else {
      return { 'Content-Type': 'application/json' }; //otherwise, return an empty object
  }
}

export const OfferService = {
  async fetchAllOffers() {
    // console.log(" USER SERVICE - fetch ALL USERS started...")
    // return axios.get(API_URL + 'admin', { headers: authHeader() });
    const response = await fetch(`${API_URL}/offers`, {
      method: "GET",
      headers:authHeader()
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
  async fetchFilteredOffers(paramsReq) {
    // console.log(" USER SERVICE - fetch ALL USERS started...")
    // return axios.get(API_URL + 'admin', { headers: authHeader() });
    const response = await fetch(`${API_URL}/offers/?${paramsReq}`, {
      method: "GET",
      headers:authHeader()
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
      headers:authHeader()
    });
    if (response.ok) {
      let data = await response.json();
      // console.log("USER SERVICE - fetch ALL USERS")
      console.log(data);
      return data;
    } else {
      // console.log("USER SERVICE - fetch ALL USERS: ERROR ");
      // console.log(response)
      let data = await response.json();
            alert(data.message);
      throw Error(handleResponses(response.status));
    }
  },
  async fetchAddOffer(offer) {
    console.log("pedido feito");
    const response = await fetch(`${API_URL}/offers/`, {
      method: "POST",
      headers:authHeader(),
      body: JSON.stringify({
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
      alert(data.message)
      console.log(data);
      return data;
    } else {
      // console.log("USER SERVICE - fetch ALL USERS: ERROR ");
      // console.log(response)
      let data = await response.json();
            alert(data.message);
      throw Error(handleResponses(response.status));
    }
  },
  async fetchUpdateOffer(offer) {
    console.log("pedido feito");
    const response = await fetch(`${API_URL}/offers/${offer.id}`, {
      method: "PUT",
      headers:authHeader(),
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
      alert(data.message)
      console.log(data);
      return data;
    } else {
      // console.log("USER SERVICE - fetch ALL USERS: ERROR ");
      // console.log(response)
      let data = await response.json();
            alert(data.message);
      throw Error(handleResponses(response.status));
    }
  },
  async fetchDeleteOffer(offerID) {
    const response = await fetch(`${API_URL}/offers/${offerID}`, {
        method: "DELETE",
        headers:authHeader()
    });
    if (response.ok) {
        let data = await response.json();
        alert(data.message)
        return data;
    }
    else {
      let data = await response.json();
            alert(data.message);
        throw Error(handleResponses(response.status));
    }
},
async fetchAllOffersType() {
  // console.log(" USER SERVICE - fetch ALL USERS started...")
  // return axios.get(API_URL + 'admin', { headers: authHeader() });
  const response = await fetch(`${API_URL}/offersType`, {
    method: "GET",
    headers:authHeader()
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
