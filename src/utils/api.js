import axios from "axios";  // axios is JavaScript library used for making HTTP requests, particularly for fetching data from APIs.

const BASE_URL='https://youtube138.p.rapidapi.com'

const options = {
    params: {
      hl: 'en',  //host language → 'en' stands for English language
      gl: 'US'   // geolocation → 'US' stands for the United States as the geographical region
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_YOUTUBE_API_KEY,
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };

  export const fetchDataFromApi = async (url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`,options);
    console.log('this is nitish data',data);
    return data;
  }