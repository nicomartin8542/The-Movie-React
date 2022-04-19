import axios from "axios";

const clienteAxios = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});

export default clienteAxios;