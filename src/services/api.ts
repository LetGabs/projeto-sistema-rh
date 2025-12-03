<<<<<<< HEAD
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api", 
  timeout: 10000, 
});
=======
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000'
})
>>>>>>> lara-conexao

export default api;
