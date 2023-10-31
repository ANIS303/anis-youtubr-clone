import axios from 'axios';
const baseURL = 'https://youtube-v31.p.rapidapi.com';
const REACT_APP_RAPID_API_KEY = '7e9c5cbb41mshf57f5347baa3037p138e7ajsncd938397fa3d'

const options = {

  params: {
   
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key':REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${baseURL}/${url}`, options);

    return data;
  };