

import API_URL from "./config.js";

export const AuthService = {
  async login(user) {
    // payload = user (username + password)
    const response = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        email: user.email,
        password: user.password,
      }),
    });
    if (response.ok) {
      const data = await response.json();
      // console.log("LOGIN SERVICE OK")
      // console.log(data)
      if (data.accessToken) localStorage.setItem("user", JSON.stringify(data));
      return data;
    } else {
      throw Error(handleResponses(response.status));
    }
  },

  async logout() {
    localStorage.removeItem("user");
  },

  async register(user) {
    const response = await fetch(`${API_URL}/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        alumni_number: user.alumni_number,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        password: user.password,
        cv: "",
        facebook: "",
        instagram: "",
        linkedIn: "",
        photo: "",
        points: 0,
        roleId: 2,
        statusId: 3, //estado pendente aguarda confirmação de admin
        courseId: user.courseId,
        areaId: user.areaId,
      }),
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw Error(handleResponses(response.status));
    }
  },
};

function handleResponses(code) {
  let message = "";
  switch (code) {
    case 400:
      message = "Username already exists.";
      break;
    case 401:
      message = "Wrong credentials";
      break;
    case 404:
      message = "User not found";
      break;
    default:
      message = "Unkown message";
      break;
  }
  return message;
}

export default AuthService;
