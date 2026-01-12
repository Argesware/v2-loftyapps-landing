import axios from 'axios';

// const url = 'http://localhost:4000';

const url = 'https://userproject.loftyapps.online';

const instancePro = axios.create({
  baseURL: url,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instancePro;
