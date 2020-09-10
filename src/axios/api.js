import axios from 'axios';

export default axios.create({
    baseURL: `https://red-store-server.herokuapp.com/api`
});