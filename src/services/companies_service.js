import API_URL from './config.js'

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

export const CompanyService = {
     

    async fetchAllCompanies() {
        // console.log(" company SERVICE - fetch ALL companies started...")
        // return axios.get(API_URL + 'admin', { headers: authHeader() });
        const response = await fetch(`${API_URL}/companies`, {
            method: "GET",
            headers: authHeader()
        });
        if (response.ok) {
            let data = await response.json();
            // console.log("companies SERVICE - fetch ALL companies")
            // console.log(data)
            return data;
        } else {
            // console.log("companies SERVICE - fetch ALL companies: ERROR ");
            // console.log(response)
            throw Error(handleResponses(response.status));
        }

    },
    async fetchOneCompany(companyID) {

        const response = await fetch(`${API_URL}/companies/${companyID}`, {
            method: "GET",
            headers:authHeader()
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
    async fetchAddCompany(company) {
        const response = await fetch(`${API_URL}/companies`, {
          method: "POST",
          headers: authHeader(),
          body: JSON.stringify({
            name: company.name,
            email: company.email,
            address: company.address,
            website: company.website,
            logo: company.logo,
            linkedIn: company.linkedIn,
            about: company.about,
          }),
        });
        if (response.ok) {
          const data = await response.json();
          console.log(data)
          return data;
        } else {
          throw Error(response.message);
        }
      },
    async fetchUpdateCompany(company) {
        console.log("pedido feito");
        const response = await fetch(`${API_URL}/companies/${company.id}`, {
          method: "PUT",
          headers:authHeader(),
          body: JSON.stringify({
            name: company.name,
            email: company.email,
            address: company.address,
            website: company.website,
            logo: company.logo,
            linkedIn:company.linkedIn,
            about: company.about,
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
    async fetchDeleteCompany(companyID) {
        const response = await fetch(`${API_URL}/companies/${companyID}`, {
            method: "DELETE",
            headers:authHeader()
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
            method: "GET" // requires NO authorization header
        });
        if (response.ok) {
            let data = await response.json();
            // console.log("USER SERVICE - fetch WELCOMING MESSAGE")
            // console.log(data) // data = "Welcome to the TUTORIALS api"
            return data;
        } else
            throw Error(handleResponses(response.status));
    }
}

export default CompanyService;


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