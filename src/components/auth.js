import axios from "axios";

const getToken = async () => {
  const response = await axios.post("http://localhost:8080/oauth/token", null, {
    params: {
      grant_type: "client_credentials",
      client_id: "client_1",
      client_secret: "adminpass"
    }
  });
  localStorage.setItem("access_token", response.data.access_token);
};

const getBooks = async access_token => {
  const response = await axios.get("http://localhost:8080/api/v1/books", {
    params: {
      access_token: access_token
    }
  });
  return response.status;
};

function mainAuth() {
  console.log(localStorage.getItem("access_token"));
  if (localStorage.getItem("access_token") === null) {
    getToken();
  } else {
    let access_token = localStorage.getItem("access_token");
    getBooks(access_token).then(res => {
      if (res !== 200) {
        getToken();
      }
    });
  }
}

export { mainAuth };
