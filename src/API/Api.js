import axios from 'axios';
import Notiflix from 'notiflix';

const API_KEY = '29451050-d710b01a754c47fc53a7a4779';
const url = 'https://pixabay.com/api/';

export const params = {
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
  safesearch: 'true',
};

export const getData = async (query, page) => {
  try {
    const response = await axios.get(
      `${url}?q=${query}&page=${page}&key=${API_KEY}`,
      { params }
    );
    // console.log(response.data);
    return response.data;
  } catch (error) {
    Notiflix.Notify.failure(`Sorry, try again ${error} `);
    throw new Error(`Sorry, try again ${error}`);
  }
};
