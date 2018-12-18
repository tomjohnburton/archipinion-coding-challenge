import axios from "axios";

const service = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon/"
  // withCredentials: true
});

const errHandler = err => {
  if (err.response && err.response.data) {
    throw err.response.data.message;
  }
  throw err;
};

export default {
  service: service,

  getPokeList(limit) {
    return service.get("/").then(res => {
      return res.data.results.slice(0, limit);
    });
  }
};
