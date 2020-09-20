import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tinder-backend-sa.herokuapp.com',
})

export default instance;