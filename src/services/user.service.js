import API_URL from './config.js'
export const UserService = {
    // async fetchOneUserByID(id) {
    //     const response = await fetch(`${API_URL}/users/${id}`, {
    //         method: "GET",
    //         headers: authHeader()
    //     });
    //     if (response.ok) {
    //         let data = await response.json();
    //         // console.log("USER SERVICE - fetch 1 USER")
    //         // console.log(data)
    //         return data;
    //     }
    //     else
    //     {
    //         // console.log("USER SERVICE - fetch 1 USER")
    //         // console.log(response)
    //         throw Error(handleResponses(response.status));
    //     }
    // },

    async fetchAllUsers() {
        // console.log(" USER SERVICE - fetch ALL USERS started...")
        // return axios.get(API_URL + 'admin', { headers: authHeader() });
        const response = await fetch(`${API_URL}/users`, {
            method: "GET",
            headers: authHeader()
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

export default UserService;


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